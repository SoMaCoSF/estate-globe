#!/usr/bin/env python3
"""Build assets/nodes.js and assets/layers.js from estate sources.

Sources:
  * ~/workspace/sites/imbuuid-registry/registry.json (85 records) — the
    sites, their grades, and each record's own identity: its IMBUUID,
    its parent (ancestry), and its mint state.
  * ~/workspace/selfport/deliveries.jsonl — the SELF.OWN delivery chain;
    records matched to a node become that node's card timeline.
  * GitHub (gh API at build time) — repo and gist creation dates, the
    births on the timeline. Results are cached in assets/births.json so
    an offline rebuild keeps the last verified dates.
  * assets/layers/*.json — the layer documents. Layers are DATA: each
    document declares its population rule, flow rule, entry points and
    leaderboard scope, and the page's engine interprets them. Adding a
    layer means adding a document, never editing engine logic.

Every somacosf.com subdomain gets its own deterministic color (founder
rule, 2026-11-21): hue from an FNV-1a hash of the host, with the gold
band (32 to 58 degrees) shifted out so gold stays reserved for the rays.
Says city sites sit at their true coordinates; everything else is placed
deterministically from the same hash. Ambient flow values are decorative
(AMBIENT), seeded from the hash.
"""
import json, pathlib, subprocess
from urllib.parse import urlparse

ROOT = pathlib.Path.home() / "workspace"
REG = ROOT / "sites/imbuuid-registry/registry.json"
DELIV = ROOT / "selfport/deliveries.jsonl"
HERE = pathlib.Path(__file__).parent
OUT = HERE / "assets/nodes.js"
LAYERS_OUT = HERE / "assets/layers.js"
LAYERS_DIR = HERE / "assets/layers"
BIRTHS_CACHE = HERE / "assets/births.json"

CITIES = [
    ("sonoma", (38.2919, -122.4580)),
    ("austin", (30.2672, -97.7431)),
    ("newyork", (40.7128, -74.0060)),
    ("new-york", (40.7128, -74.0060)),
    ("miami", (25.7617, -80.1918)),
    ("chicago", (41.8781, -87.6298)),
    ("sanfrancisco", (37.7749, -122.4194)),
    ("san-francisco", (37.7749, -122.4194)),
    ("losangeles", (34.0522, -118.2437)),
    ("los-angeles", (34.0522, -118.2437)),
    ("paris", (48.8566, 2.3522)),
    ("london", (51.5074, -0.1278)),
    ("tokyo", (35.6762, 139.6503)),
]

def fnv1a(s):
    h = 0x811C9DC5
    for ch in s.encode():
        h ^= ch
        h = (h * 0x01000193) & 0xFFFFFFFF
    return h

def raw_hue(host):
    hue = fnv1a(host) % 360
    if 28 <= hue <= 64:  # keep the gold band clear; gold is for rays only
        hue = (hue + 45) % 360
    return hue

# Host to hue, resolved once for the whole registry so neighbouring
# subdomains never land on near-identical colors: hash hues are pushed
# apart to a minimum 7 degree separation, deterministically.
HUES = {}

def resolve_hues(hosts):
    # Even spread over the non-gold arc (64..360..28 = 324 degrees),
    # hosts ordered by their hash hue so the assignment stays stable
    # and deterministic for a given registry.
    order = sorted(hosts, key=lambda hst: (raw_hue(hst), hst))
    step = 324.0 / max(len(order), 1)
    for i, hst in enumerate(order):
        HUES[hst] = int(round(64 + i * step)) % 360

def color_for(host):
    hue = HUES.get(host, raw_hue(host))
    return f"hsl({hue}, 68%, 63%)", hue

def coords_for(host, label):
    key = (host + " " + label).lower().replace(" ", "")
    for name, ll in CITIES:
        if name in key:
            return ll[0], ll[1], True
    h = fnv1a(host + "|" + label)
    lat = ((h % 1000) / 1000.0) * 108 - 48          # -48 .. 60
    lon = (((h >> 10) % 1000) / 1000.0) * 360 - 180  # -180 .. 180
    return round(lat, 3), round(lon, 3), False

# ---------------------------------------------------------------------
# Dossiers: WHAT a thing is and WHY it was built, gloss first, written
# from estate material (registry titles, project records, the delivery
# chain). A node with no entry here, or a field left None, renders as
# "Dossier pending" on the card. Nothing is padded.
# ---------------------------------------------------------------------
DOSSIERS = {
 "estate.somacosf.com": dict(
   what="The front door of the Somaco estate: the page hierarchy root from which every other surface hangs.",
   why="Built so the estate has one address a visitor can start from, and one root the registry can parent everything to."),
 "cayman.somacosf.com": dict(
   what="Cayman: the parody coin site. CaymanCoinCaribbeanCrypto, 'the cleanest coin available', where wallets are shells and the fine print states the parody.",
   why="Built as the estate's satire surface, and as the hub of the globe's SHELLS layer: the shell jurisdiction, read from George Town."),
 "sidc.somacosf.com": dict(
   what="SIDC: the orbital data center census, the datacenter story read from above the dirt.",
   why="Built so the supply chain's next terrain, orbit, has an addressed surface of its own, and as the hub of the globe's SPACE layer."),
 "geohex.somacosf.com": dict(
   what="GeoHex: spatial identity. A hexagonal cell system that gives places an address of their own.",
   why="Built so location itself can carry identity, and anything at a place can be reached by address rather than found by search."),
 "pay.somacosf.com": dict(
   what="UUID Payments: disposable transaction UUIDs, one identity per payment act, made to be spent and retired.",
   why="Built so a payment never has to expose a durable identity. The transaction carries its own address, and its own end."),
 "hxphxh.somacosf.com": dict(
   what="HXPHXH: the hex trax console, the estate's first hex surface.",
   why="Built as the working console where the hex identity ideas were exercised in the open."),
 "scpm.somacosf.com": dict(
   what="SCPM: the supply chain perception machine. The datacenter supply chain read as a living map of companies, layers, and flows.",
   why="Built because the supply chain is the schedule. SCPM makes it visible before it binds."),
 "status.somacosf.com": dict(
   what="Status: the estate's status plane, where each lane carries its graded state.",
   why="Built so state is read from a page the agents update directly, not asked for in chat and not waited on."),
 "dc.somacosf.com": dict(
   what="DC: the datacenter supply chain surfaces, the working end of the SCPM atlas.",
   why="Built to put the supply chain record in front of the people planning the builds."),
 "live.somacosf.com": dict(
   what="Live: the fleet book surface, kept current as the fleet runs.",
   why="Built so the book is read from the surface, not reconstructed after the fact."),
 "ex.somacosf.com": dict(
   what="Ex: the equity and book surface.",
   why="Built so the equity record has one address of its own, apart from the noise of the day."),
 "imbue.somacosf.com": dict(
   what="Imbue: the flagship product. The desktop layer where files, panels, and sessions carry identity in their address, built on the SoMaCo UUID protocol.",
   why="Built as the personal artifact the career was practice for: identity is infrastructure, shipped as a working system."),
 "dcpm.somacosf.com": dict(
   what="DCPM: a datacenter surface in the project management family, beside ITPM.",
   why=None),
 "proof.somacosf.com": dict(
   what="Proof: the verify in browser surface, where estate claims are checked in the open.",
   why="Built so a claim can be re-run by whoever reads it, not taken on trust."),
 "portfolio.somacosf.com": dict(
   what="Portfolio: the estate's portfolio page.",
   why=None),
 "369.somacosf.com": None,
 "hex.somacosf.com": dict(
   what="Hex: the HXPHXH family site, home of the hex font and tile work.",
   why="Built to give the hex line a public face of its own, apart from the console."),
 "github.com/muse-identity": dict(
   what="The identity repo: the private record of identities and grades, and the source the status page reads.",
   why="Built so identity has a home that outlives any one machine or install."),
 "github.com/mission-control-hub": dict(
   what="Mission Control hub: the coordination ledger where the agent team's directives, claims, and receipts are written.",
   why="Built so many agents can work one estate without losing who said what, or what was proven."),
 "somacoprotocol.slack.com": dict(
   what="The somaco_protocol Slack workspace: the live channel where the team coordinates.",
   why="Kept as the fast channel. The ledger, not the chat, is the record."),
 "spoc.somacosf.com": dict(
   what="SPOC: the Says network node. The presences and endpoints of the ten cities, named in one place.",
   why="Built as the network's front door: one address that names the whole federation."),
 "sonomasays.com": dict(
   what="Sonoma Says: the wine country city of the Says network, and the front door to the Sonoma voxel twin.",
   why="Built first among the cities because the ground was already known: the terroir, the wineries, and the story. It is the network's income build, commerce by recorded intent."),
 "austinsays.com": dict(
   what="Austin Says: the Austin city surface of the Says network, a city read over a hex addressed grid.",
   why="Built to prove the city pattern at scale: tens of thousands of real buildings, every cell carrying its own identity."),
 "www.newyorksays.com": dict(
   what="New York Says: the network's New York presence.",
   why="One of the ten Says presences: the same addressed city pattern, flown in New York."),
 "miamisays.com": dict(
   what="Miami Says: the network's Miami presence.",
   why="One of the ten Says presences: the same addressed city pattern, flown in Miami."),
 "chicagosays.com": dict(
   what="Chicago Says: the network's Chicago presence.",
   why="One of the ten Says presences: the same addressed city pattern, flown in Chicago."),
 "sanfranciscosays.com": dict(
   what="San Francisco Says: the network's home city presence.",
   why="San Francisco is the hub city, the estate's home ground and the network's anchor."),
 "losangelessays.com": dict(
   what="Los Angeles Says: the network's Los Angeles presence.",
   why="One of the ten Says presences: the same addressed city pattern, flown in Los Angeles."),
 "parissays.com": dict(
   what="Paris Says: the network's Paris presence.",
   why="One of the ten Says presences: the same addressed city pattern, flown in Paris."),
 "londonsays.com": dict(
   what="London Says: the network's London presence.",
   why="One of the ten Says presences: the same addressed city pattern, flown in London."),
 "tokyosays.com": dict(
   what="Tokyo Says: the network's Tokyo presence.",
   why="One of the ten Says presences: the same addressed city pattern, flown in Tokyo."),
 "game.somacosf.com": dict(
   what="Game: the estate's games, SPLAT and GEOHEX TD.",
   why="Built so the estate's systems can be played with, not only read."),
 "imbuuid-pitch.vercel.app": dict(
   what="The IMBUUID pitch, staged.",
   why=None),
 "vox.somacosf.com": dict(
   what="Vox: the voxel doctrine. One cell, one IMBUUID; a place and its occupant are linked, never merged.",
   why="Built to state the voxel rules in one place, before the city twins were built on them."),
 "vox.sonomasays.com": dict(
   what="Vox Sonoma: the Sonoma voxel twin, the county read as addressed voxels.",
   why="Built to test the voxel doctrine on real ground: density only where a supply chain or identity bearing element stands."),
 "build.somacosf.com": dict(
   what="Build: the delivery record. Every landed build and deploy, chained in order.",
   why="Built so what shipped is a matter of record, readable without asking anyone."),
 "library.somacosf.com": dict(
   what="Library: the estate census, the counted inventory of what exists.",
   why="Built so the estate can be counted honestly, gaps included."),
 "mermaid.somacosf.com": dict(
   what="Mermaid: the estate dump, the whole tree rendered as diagrams.",
   why="Built so the shape of the estate can be seen whole, in one pass."),
 "logic.somacosf.com": dict(
   what="Logic: the logic system surface.",
   why=None),
 "fractal.somacosf.com": dict(
   what="Fractal: the campaign surfaces.",
   why=None),
 "umbit.somacosf.com": dict(
   what="UMBIT: You Am Be I Technology.",
   why=None),
 "atlas.somacosf.com": dict(
   what="Atlas: the supply chain atlas. 91 companies across 10 bill of materials layers, placed on the map.",
   why="Built so a build's supply base can be read geographically, from the company down to the dirt."),
 "itpm.somacosf.com": dict(
   what="ITPM: the commissioning and project delivery system, spoken and typed, exercised end to end on real Revit models.",
   why="Built from thirty years of hospital and datacenter go-lives: the role's work as a system, every transition receipted."),
 "planck.somacosf.com": None,
 "github.com/imbuuid_itpm": dict(
   what="The Spoken ITPM coordination repo: the mailbox and record tree for the ITPM build crew.",
   why="Built so the ITPM workstream coordinates by addressed append, in the open, not by chat memory."),
 "kestrel.somacosf.com": dict(
   what="Kestrel '45: a one file vertical shoot em up.",
   why="Built as a single file game: the whole thing at one address."),
}

# Node key -> SoMaCoSF repo whose creation date is the node's repo birth.
# Only mappings the record itself supports (the node IS the repo, or the
# repo is the node's documented source tree).
REPO_MAP = {
 "github.com/muse-identity": "muse-identity",
 "github.com/mission-control-hub": "mission_control",
 "github.com/imbuuid_itpm": "imbuuid_itpm",
 "imbue.somacosf.com": "imbue",
 "hxphxh.somacosf.com": "hxphxh",
 "hex.somacosf.com": "hex",
 "pay.somacosf.com": "uuid-payments",
 "proof.somacosf.com": "imbuuid-proof",
 "status.somacosf.com": "status",
 "geohex.somacosf.com": "rustgis-geohex",
 "itpm.somacosf.com": "ucsf_pm",
 "spoc.somacosf.com": "says-hub",
 "austinsays.com": "austinsays-platform",
 "sonomasays.com": "sonomasays-platform",
 "vox.sonomasays.com": "VoxCity",
}

# Node key -> [(gist id, short claim-level title)]. A gist appears on a
# node's timeline only where the gist's own description names that
# thing. Gists carrying mechanism detail (patent-PREP) are not listed.
GIST_MAP = {
 "austinsays.com": [
   ("d3944c12d91b96eb41ac0d1a26ba5d2a", "Austin's buildings on a hex lattice"),
   ("5b07a3985baa1deb5b07f12ea58bacd2", "AustinSays platform implementation"),
   ("9e78f3ce3a4a39391e45f1baec3fe193", "AustinSays Pulse"),
 ],
 "spoc.somacosf.com": [
   ("8db65e0eb3acb455ce726c41eb66c95d", "Protocol overview: the UUID is the address"),
   ("6269a61c5466904b9f1ad0f822fe8245", "SPOC Talk, the addressed comms capability"),
   ("fd0a7892b617bf6f07adb9fcdd6db473", "The Says Network, bent into UUID"),
 ],
 "scpm.somacosf.com": [
   ("f5f2ee0f76cf799c13a6c7e3d5ecbc4a", "God's Eye View: the complete logic"),
   ("d02d70d25ae1cef496cba54abff929a2", "SCPM: what we have built"),
   ("679bc336eac6db6f0f3ffadecf55aa40", "Supply chain by prediction market engine"),
 ],
 "imbue.somacosf.com": [
   ("c92006fc2e1dbc593b4d68c97989441a", "Imbue Identity System: identity is infrastructure"),
 ],
 "pay.somacosf.com": [
   ("dd1908202d0bd54e314078773fc3fc21", "The $100 Answer: trust architecture for agentic spending"),
 ],
}

# Extra strong tokens for matching SELF.OWN delivery records to a node.
# Matching is deliberately strict: the node's host in the record's
# where/title/summary, the node's repo path, or one of these tokens in
# the record's where field only. Short labels never match free text.
WHERE_ALIASES = {
 "itpm.somacosf.com": ["spoken-itpm", "ucsf_pm"],
 "github.com/imbuuid_itpm": ["imbuuid_itpm"],
 "github.com/mission-control-hub": ["mission_control", "mission-control/hub"],
 "github.com/muse-identity": ["muse-identity"],
 "status.somacosf.com": ["SoMaCoSF/status"],
 "geohex.somacosf.com": ["rustgis-geohex"],
 "spoc.somacosf.com": ["spoc.somacosf.com"],
}

def node_key(host, board):
    if host == "github.com":
        return "github.com/" + board.split("/", 1)[-1]
    return host

def fetch_births():
    """Repo and gist creation dates via the gh API, cached to
    assets/births.json. Falls back to the cache when gh is unavailable."""
    cache = {}
    if BIRTHS_CACHE.exists():
        try:
            cache = json.loads(BIRTHS_CACHE.read_text())
        except Exception:
            cache = {}
    repos, gists = {}, {}
    try:
        out = subprocess.run(
            ["gh", "repo", "list", "SoMaCoSF", "--limit", "400",
             "--json", "name,createdAt"],
            capture_output=True, text=True, timeout=120)
        if out.returncode == 0:
            for r in json.loads(out.stdout):
                repos[r["name"]] = r["createdAt"][:10]
        want = {gid for pairs in GIST_MAP.values() for gid, _ in pairs}
        out = subprocess.run(["gh", "api", "gists", "--paginate"],
                             capture_output=True, text=True, timeout=180)
        if out.returncode == 0:
            # paginated output is concatenated JSON arrays
            txt = out.stdout.replace("][", ",")
            for g in json.loads(txt):
                if g["id"] in want:
                    gists[g["id"]] = g["created_at"][:10]
    except Exception:
        pass
    if repos:
        cache["repos"] = repos
    if gists:
        cache.setdefault("gists", {}).update(gists)
    if cache:
        BIRTHS_CACHE.write_text(json.dumps(cache, indent=1, sort_keys=True) + "\n")
    return cache.get("repos", {}), cache.get("gists", {})

def host_hit(text, needle):
    """True when needle occurs in text at a host boundary, so that
    vox.sonomasays.com does not also claim sonomasays.com's records."""
    i = text.find(needle)
    while i != -1:
        if i == 0 or text[i - 1] not in "abcdefghijklmnopqrstuvwxyz0123456789.-":
            return True
        i = text.find(needle, i + 1)
    return False

def build_timeline(key, host, url, deliveries):
    """SELF.OWN records that name this node, newest first, capped."""
    hits = []
    repo = REPO_MAP.get(key)
    aliases = WHERE_ALIASES.get(key, [])
    if key.startswith("github.com/"):
        needles = ["github.com/somacosf/" + key.split("/", 1)[1].lower()]
    else:
        needles = [host.lower()]
        if host.startswith("www."):
            needles.append(host[4:].lower())
    for r in deliveries:
        where = (r.get("where") or "")
        text = (where + " " + (r.get("title") or "") + " " + (r.get("summary") or "")).lower()
        wl = where.lower()
        ok = any(host_hit(text, n) for n in needles)
        if not ok and repo and ("somacosf/" + repo.lower()) in wl:
            ok = True
        if not ok and any(a.lower() in wl for a in aliases):
            ok = True
        if ok:
            hits.append({"date": (r.get("ts") or "")[:10],
                         "kind": r.get("kind") or "",
                         "label": r.get("title") or ""})
    hits.sort(key=lambda e: e["date"], reverse=True)
    return hits[:10]

def main():
    d = json.loads(REG.read_text())
    recs = d["records"]
    by_uuid = {r.get("uuid"): r for r in recs}
    deliveries = [json.loads(l) for l in DELIV.read_text().splitlines() if l.strip()]
    repo_births, gist_births = fetch_births()
    hosts = set()
    for r in recs:
        if r.get("type") != "site" and r.get("kind") != "SITE":
            continue
        hst = urlparse(r.get("url") or "").hostname
        if hst:
            hosts.add(hst)
    resolve_hues(hosts)
    nodes = []
    n_gloss = n_partial = n_pending = 0
    tl_counts = {"deliveries": 0, "repos": 0, "gists": 0}
    for r in recs:
        if r.get("type") != "site" and r.get("kind") != "SITE":
            continue
        url = r.get("url") or ""
        host = urlparse(url).hostname or ""
        if not host:
            continue
        name = r.get("name", "")
        short = name.split(":", 1)[-1] if ":" in name else host
        if host == "github.com":
            label = short.replace("github.com/", "")
            label = label if label not in ("", "github.com") else host
            board = "github.com/" + label if "/" not in label else label
        elif host.endswith(".somacosf.com"):
            label = host[: -len(".somacosf.com")]
            board = host
        else:
            label = host
            board = host
        color, hue = color_for(host)
        lat, lon, real = coords_for(host, short)
        h = fnv1a(host + "|" + short)
        key = node_key(host, board)
        # identity: the registry record's own IMBUUID and its parent
        parent = by_uuid.get(r.get("parent") or "") or {}
        pname = parent.get("name") or ""
        parent_name = pname[len("site:"):] if pname.startswith("site:") else pname
        # dossier
        dos = DOSSIERS.get(key)
        if dos and dos.get("what") and dos.get("why"):
            dossier = {"what": dos["what"], "why": dos["why"]}
            n_gloss += 1
        elif dos and dos.get("what"):
            dossier = {"what": dos["what"], "why": None}
            n_partial += 1
        else:
            dossier = None
            n_pending += 1
        # timeline: deliveries, then the births, newest first overall
        timeline = build_timeline(key, host, url, deliveries)
        tl_counts["deliveries"] += len(timeline)
        repo = REPO_MAP.get(key)
        if repo and repo in repo_births:
            timeline.append({"date": repo_births[repo], "kind": "REPO BORN",
                             "label": "Repo born: SoMaCoSF/" + repo})
            tl_counts["repos"] += 1
        for gid, gtitle in GIST_MAP.get(key, []):
            if gid in gist_births:
                timeline.append({"date": gist_births[gid], "kind": "GIST BORN",
                                 "label": "Gist born: " + gtitle})
                tl_counts["gists"] += 1
        timeline.sort(key=lambda e: e["date"], reverse=True)
        nodes.append({
            "host": host,
            "label": label,
            "board": board,
            "title": r.get("title", ""),
            "url": url,
            "grade": r.get("live_grade", ""),
            "color": color,
            "hue": hue,
            "lat": lat,
            "lon": lon,
            "real": real,
            "base": round(2 + (h % 880) / 10.0, 1),      # ambient flow seed
            "speed": round(0.11 + ((h >> 5) % 100) / 220.0, 3),
            "phase": round(((h >> 3) % 628) / 100.0, 2),
            "uuid": r.get("uuid", ""),
            "parentName": parent_name,
            "mint": r.get("mint", ""),
            "status": r.get("status", ""),
            "dossier": dossier,
            "timeline": timeline,
        })
    payload = {
        "records": len(recs),
        "generated_from": "sites/imbuuid-registry/registry.json",
        "hub": {"label": "San Francisco hub", "lat": 37.7749, "lon": -122.4194},
        "nodes": nodes,
    }
    OUT.write_text("window.ESTATE_DATA = " + json.dumps(payload, indent=1) + ";\n")
    # layers are data: bake the documents in assets/layers/ verbatim
    layers = []
    for p in sorted(LAYERS_DIR.glob("*.json")):
        layers.append(json.loads(p.read_text()))
    LAYERS_OUT.write_text("window.ESTATE_LAYERS = " + json.dumps(layers, indent=1) + ";\n")
    print(f"nodes: {len(nodes)}  records: {len(recs)}")
    print(f"dossiers: {n_gloss} full, {n_partial} what-only, {n_pending} pending")
    print(f"timeline entries: {tl_counts['deliveries']} deliveries, "
          f"{tl_counts['repos']} repo births, {tl_counts['gists']} gist births")
    print(f"layers: {[l['id'] for l in layers]}")
    subs = sorted({n['host'] for n in nodes if n['host'].endswith('.somacosf.com')})
    print(f"somacosf subdomains: {len(subs)}")
    for s in subs:
        print(" ", s, color_for(s)[0])

if __name__ == "__main__":
    main()
