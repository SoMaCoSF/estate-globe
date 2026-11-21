#!/usr/bin/env python3
"""Build assets/nodes.js from the estate registry (status plane source of truth).

Source: ~/workspace/sites/imbuuid-registry/registry.json (85 records).
Nodes: one per SITE record. Every somacosf.com subdomain gets its own
deterministic color (founder rule, 2026-11-21): hue from an FNV-1a hash of
the host, with the gold band (32 to 58 degrees) shifted out so gold stays
reserved for the rays. Says city sites sit at their true coordinates;
everything else is placed deterministically from the same hash.
Ambient flow values are decorative (AMBIENT), seeded from the hash.
"""
import json, pathlib
from urllib.parse import urlparse

ROOT = pathlib.Path.home() / "workspace"
REG = ROOT / "sites/imbuuid-registry/registry.json"
OUT = ROOT / "estate-globe/assets/nodes.js"

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

def main():
    d = json.loads(REG.read_text())
    recs = d["records"]
    hosts = set()
    for r in recs:
        if r.get("type") != "site" and r.get("kind") != "SITE":
            continue
        hst = urlparse(r.get("url") or "").hostname
        if hst:
            hosts.add(hst)
    resolve_hues(hosts)
    nodes = []
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
        })
    payload = {
        "records": len(recs),
        "generated_from": "sites/imbuuid-registry/registry.json",
        "hub": {"label": "San Francisco hub", "lat": 37.7749, "lon": -122.4194},
        "nodes": nodes,
    }
    OUT.write_text("window.ESTATE_DATA = " + json.dumps(payload, indent=1) + ";\n")
    print(f"nodes: {len(nodes)}  records: {len(recs)}")
    subs = sorted({n['host'] for n in nodes if n['host'].endswith('.somacosf.com')})
    print(f"somacosf subdomains: {len(subs)}")
    for s in subs:
        print(" ", s, color_for(s)[0])

if __name__ == "__main__":
    main()
