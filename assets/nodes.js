window.ESTATE_DATA = {
 "records": 85,
 "generated_from": "sites/imbuuid-registry/registry.json",
 "hub": {
  "label": "San Francisco hub",
  "lat": 37.7749,
  "lon": -122.4194
 },
 "nodes": [
  {
   "host": "estate.somacosf.com",
   "label": "estate",
   "board": "estate.somacosf.com",
   "title": "The Somaco Estate \u2014 page hierarchy root",
   "url": "https://estate.somacosf.com",
   "grade": "LIVE-200",
   "color": "hsl(226, 68%, 63%)",
   "hue": 226,
   "lat": 20.256,
   "lon": 0.36,
   "real": false,
   "base": 37.2,
   "speed": 0.342,
   "phase": 5.88,
   "uuid": "550efe7c-aa06-8000-8200-03d4304b98db",
   "parentName": "",
   "mint": "provisional",
   "status": "live",
   "dossier": {
    "what": "The front door of the Somaco estate: the page hierarchy root from which every other surface hangs.",
    "why": "Built so the estate has one address a visitor can start from, and one root the registry can parent everything to."
   },
   "timeline": [
    {
     "date": "2026-11-21",
     "kind": "BUILD",
     "label": "Estate Globe: mobile layout + in-page pop panel"
    },
    {
     "date": "2026-11-07",
     "kind": "DEPLOY",
     "label": "ESTATE DEPLOY LIVE \u2014 AUGMENT-ONLY (dpl_DAQFGsW79cmMbgv4pe4zMufnp3A1)"
    },
    {
     "date": "2026-10-31",
     "kind": "DEPLOY",
     "label": "estate.somacosf.com REBUILT \u2014 HXPHXH core + atlas (SOM-DOC-10528)"
    },
    {
     "date": "2026-10-31",
     "kind": "FINDING",
     "label": "Portal overwrite \u2014 rolled back, law recorded: NEVER OVERWRITE, ONLY AUGMENT"
    },
    {
     "date": "2026-10-31",
     "kind": "DEPLOY",
     "label": "ESTATE PORTAL AUGMENT LIVE"
    },
    {
     "date": "2026-10-31",
     "kind": "DEPLOY",
     "label": "ESTATE PORTAL PAD = v6m"
    },
    {
     "date": "2026-10-30",
     "kind": "DEPLOY",
     "label": "Estate hardening headers \u2014 applied"
    }
   ]
  },
  {
   "host": "geohex.somacosf.com",
   "label": "geohex",
   "board": "geohex.somacosf.com",
   "title": "GeoHex \u2014 spatial identity on the normal ray",
   "url": "https://geohex.somacosf.com",
   "grade": "LIVE-200",
   "color": "hsl(157, 68%, 63%)",
   "hue": 157,
   "lat": 4.164,
   "lon": -178.92,
   "real": false,
   "base": 78.3,
   "speed": 0.146,
   "phase": 5.31,
   "uuid": "550efee9-6ad4-8000-8200-01233ebe1345",
   "parentName": "estate:somacosf",
   "mint": "provisional",
   "status": "live",
   "dossier": {
    "what": "GeoHex: spatial identity. A hexagonal cell system that gives places an address of their own.",
    "why": "Built so location itself can carry identity, and anything at a place can be reached by address rather than found by search."
   },
   "timeline": [
    {
     "date": "2026-11-09",
     "kind": "REPO BORN",
     "label": "Repo born: SoMaCoSF/rustgis-geohex"
    }
   ]
  },
  {
   "host": "pay.somacosf.com",
   "label": "pay",
   "board": "pay.somacosf.com",
   "title": "UUID Payments \u2014 disposable transaction UUIDs (design surface)",
   "url": "https://pay.somacosf.com",
   "grade": "LIVE-200",
   "color": "hsl(149, 68%, 63%)",
   "hue": 149,
   "lat": -32.988,
   "lon": 173.88,
   "real": false,
   "base": 67.9,
   "speed": 0.442,
   "phase": 0.92,
   "uuid": "550efe95-ec70-8000-8200-03814a0bb8db",
   "parentName": "estate:somacosf",
   "mint": "provisional",
   "status": "live",
   "dossier": {
    "what": "UUID Payments: disposable transaction UUIDs, one identity per payment act, made to be spent and retired.",
    "why": "Built so a payment never has to expose a durable identity. The transaction carries its own address, and its own end."
   },
   "timeline": [
    {
     "date": "2026-11-07",
     "kind": "ASSET",
     "label": "DEVIN PAY FILM (37S)"
    },
    {
     "date": "2026-11-07",
     "kind": "REPO BORN",
     "label": "Repo born: SoMaCoSF/uuid-payments"
    },
    {
     "date": "2026-10-12",
     "kind": "GIST BORN",
     "label": "Gist born: The $100 Answer: trust architecture for agentic spending"
    }
   ]
  },
  {
   "host": "hxphxh.somacosf.com",
   "label": "hxphxh",
   "board": "hxphxh.somacosf.com",
   "title": "HXPHXH \u2014 the hex trax console",
   "url": "https://hxphxh.somacosf.com",
   "grade": "LIVE-200",
   "color": "hsl(133, 68%, 63%)",
   "hue": 133,
   "lat": -5.772,
   "lon": 130.32,
   "real": false,
   "base": 37.1,
   "speed": 0.133,
   "phase": 1.35,
   "uuid": "550efe35-2d21-8000-8200-00637bf1ed82",
   "parentName": "estate:somacosf",
   "mint": "verbatim",
   "status": "live",
   "dossier": {
    "what": "HXPHXH: the hex trax console, the estate's first hex surface.",
    "why": "Built as the working console where the hex identity ideas were exercised in the open."
   },
   "timeline": [
    {
     "date": "2026-11-18",
     "kind": "DEPLOY",
     "label": "KESTREL IN HXPHXH \u2014 '45 + 4 VARIANTS"
    },
    {
     "date": "2026-11-01",
     "kind": "DEPLOY",
     "label": "MUNICH '77 \u2014 HXPHXH 13TH LIBRARY IDIOM LIVE"
    },
    {
     "date": "2026-10-31",
     "kind": "DEPLOY",
     "label": "hxphxh.somacosf.com LIVE"
    },
    {
     "date": "2026-10-31",
     "kind": "DOC",
     "label": "Security sweep 2026-10-31 \u2014 SOM-DOC-10507"
    },
    {
     "date": "2026-10-31",
     "kind": "BUILD",
     "label": "HXPHXH v0.4 DEPTH"
    },
    {
     "date": "2026-10-31",
     "kind": "DEPLOY",
     "label": "HXPHXH EPIC live \u2014 the layered site (SOM-DOC-10532)"
    },
    {
     "date": "2026-10-31",
     "kind": "DEPLOY",
     "label": "HXPHXH PROJECT LAYER LIVE"
    },
    {
     "date": "2026-10-31",
     "kind": "BUILD",
     "label": "FAMILY REGISTRY REGENERATED \u2014 52 RECORDS"
    },
    {
     "date": "2026-10-31",
     "kind": "DEPLOY",
     "label": "HXPHXH FRAMING FIX DEPLOYED"
    },
    {
     "date": "2026-10-31",
     "kind": "DEPLOY",
     "label": "NEVER LIGHT \u2014 SKINS FIX DEPLOYED, BOTH SURFACES"
    },
    {
     "date": "2026-02-22",
     "kind": "REPO BORN",
     "label": "Repo born: SoMaCoSF/hxphxh"
    }
   ]
  },
  {
   "host": "scpm.somacosf.com",
   "label": "scpm",
   "board": "scpm.somacosf.com",
   "title": "SCPM \u2014 supply-chain perception machine",
   "url": "https://scpm.somacosf.com",
   "grade": "LIVE-200",
   "color": "hsl(311, 68%, 63%)",
   "hue": 311,
   "lat": 21.444,
   "lon": -134.64,
   "real": false,
   "base": 30.3,
   "speed": 0.342,
   "phase": 0.93,
   "uuid": "550efeff-f04d-8000-8200-00d381034c22",
   "parentName": "estate:somacosf",
   "mint": "provisional",
   "status": "live",
   "dossier": {
    "what": "SCPM: the supply chain perception machine. The datacenter supply chain read as a living map of companies, layers, and flows.",
    "why": "Built because the supply chain is the schedule. SCPM makes it visible before it binds."
   },
   "timeline": [
    {
     "date": "2026-09-17",
     "kind": "GIST BORN",
     "label": "Gist born: God's Eye View: the complete logic"
    },
    {
     "date": "2026-09-16",
     "kind": "GIST BORN",
     "label": "Gist born: SCPM: what we have built"
    },
    {
     "date": "2026-09-13",
     "kind": "GIST BORN",
     "label": "Gist born: Supply chain by prediction market engine"
    }
   ]
  },
  {
   "host": "status.somacosf.com",
   "label": "status",
   "board": "status.somacosf.com",
   "title": "Status \u2014 alias host of the SCPM System Dossier",
   "url": "https://status.somacosf.com",
   "grade": "LIVE-200",
   "color": "hsl(20, 68%, 63%)",
   "hue": 20,
   "lat": 57.732,
   "lon": 104.4,
   "real": false,
   "base": 75.9,
   "speed": 0.474,
   "phase": 4.78,
   "uuid": "550efe15-5cac-8000-8200-01ad2df9eed4",
   "parentName": "estate:somacosf",
   "mint": "provisional",
   "status": "live",
   "dossier": {
    "what": "Status: the estate's status plane, where each lane carries its graded state.",
    "why": "Built so state is read from a page the agents update directly, not asked for in chat and not waited on."
   },
   "timeline": [
    {
     "date": "2026-11-19",
     "kind": "BUILD",
     "label": "STATUS PAGE \u2014 DATA PLANE LIVE (SOM-DOC-10859)"
    },
    {
     "date": "2026-11-19",
     "kind": "REPO BORN",
     "label": "Repo born: SoMaCoSF/status"
    }
   ]
  },
  {
   "host": "dc.somacosf.com",
   "label": "dc",
   "board": "dc.somacosf.com",
   "title": "DC \u2014 the datacenter supply-chain surfaces",
   "url": "https://dc.somacosf.com",
   "grade": "LIVE-200",
   "color": "hsl(64, 68%, 63%)",
   "hue": 64,
   "lat": -25.212,
   "lon": -117.0,
   "real": false,
   "base": 75.1,
   "speed": 0.11,
   "phase": 0.69,
   "uuid": "550efe29-4945-8000-8200-02e5638c3f73",
   "parentName": "estate:somacosf",
   "mint": "provisional",
   "status": "live",
   "dossier": {
    "what": "DC: the datacenter supply chain surfaces, the working end of the SCPM atlas.",
    "why": "Built to put the supply chain record in front of the people planning the builds."
   },
   "timeline": []
  },
  {
   "host": "live.somacosf.com",
   "label": "live",
   "board": "live.somacosf.com",
   "title": "Live \u2014 Kalshi fleet book",
   "url": "https://live.somacosf.com",
   "grade": "LIVE-200",
   "color": "hsl(357, 68%, 63%)",
   "hue": 357,
   "lat": 11.076,
   "lon": -143.28,
   "real": false,
   "base": 8.7,
   "speed": 0.415,
   "phase": 4.44,
   "uuid": "550efe13-6b7c-8000-8200-02f025ea280d",
   "parentName": "estate:somacosf",
   "mint": "provisional",
   "status": "live",
   "dossier": {
    "what": "Live: the fleet book surface, kept current as the fleet runs.",
    "why": "Built so the book is read from the surface, not reconstructed after the fact."
   },
   "timeline": [
    {
     "date": "2026-11-15",
     "kind": "BUILD",
     "label": "LIVE.SOMACOSF.COM MOBILE PASS \u2014 SHIPPED + VERIFIED"
    },
    {
     "date": "2026-11-15",
     "kind": "BUILD",
     "label": "LIVE CONSOLE GLOSS + IMBUUID DEEP-DIVE (SOM-DOC-10806)"
    },
    {
     "date": "2026-11-13",
     "kind": "DEPLOY",
     "label": "LIVE.SOMACOSF.COM REBUILT"
    },
    {
     "date": "2026-11-13",
     "kind": "DOC",
     "label": "14 KALSHI MARKET PROPOSALS FILED"
    }
   ]
  },
  {
   "host": "ex.somacosf.com",
   "label": "ex",
   "board": "ex.somacosf.com",
   "title": "Ex \u2014 equity & book surface",
   "url": "https://ex.somacosf.com",
   "grade": "LIVE-200",
   "color": "hsl(187, 68%, 63%)",
   "hue": 187,
   "lat": -3.18,
   "lon": -39.96,
   "real": false,
   "base": 67.5,
   "speed": 0.337,
   "phase": 2.89,
   "uuid": "550efe78-d03d-8000-8200-02de61801b75",
   "parentName": "estate:somacosf",
   "mint": "provisional",
   "status": "live",
   "dossier": {
    "what": "Ex: the equity and book surface.",
    "why": "Built so the equity record has one address of its own, apart from the noise of the day."
   },
   "timeline": []
  },
  {
   "host": "imbue.somacosf.com",
   "label": "imbue",
   "board": "imbue.somacosf.com",
   "title": "Imbue \u2014 the flagship product",
   "url": "https://imbue.somacosf.com",
   "grade": "LIVE-200",
   "color": "hsl(126, 68%, 63%)",
   "hue": 126,
   "lat": 39.156,
   "lon": 179.64,
   "real": false,
   "base": 70.7,
   "speed": 0.533,
   "phase": 2.07,
   "uuid": "550efe3c-69e8-8000-8200-00bc4dee02cd",
   "parentName": "estate:somacosf",
   "mint": "provisional",
   "status": "live",
   "dossier": {
    "what": "Imbue: the flagship product. The desktop layer where files, panels, and sessions carry identity in their address, built on the SoMaCo UUID protocol.",
    "why": "Built as the personal artifact the career was practice for: identity is infrastructure, shipped as a working system."
   },
   "timeline": [
    {
     "date": "2026-10-30",
     "kind": "FINDING",
     "label": "Imbue .47 FOUND + Zero Breach Skill located"
    },
    {
     "date": "2026-10-11",
     "kind": "GIST BORN",
     "label": "Gist born: Imbue Identity System: identity is infrastructure"
    },
    {
     "date": "2026-10-02",
     "kind": "REPO BORN",
     "label": "Repo born: SoMaCoSF/imbue"
    }
   ]
  },
  {
   "host": "dcpm.somacosf.com",
   "label": "dcpm",
   "board": "dcpm.somacosf.com",
   "title": "DCPM",
   "url": "https://dcpm.somacosf.com",
   "grade": "LIVE-200",
   "color": "hsl(288, 68%, 63%)",
   "hue": 288,
   "lat": 36.132,
   "lon": 165.96,
   "real": false,
   "base": 79.9,
   "speed": 0.446,
   "phase": 2.33,
   "uuid": "550efefc-40a8-8000-8200-028dfca391b1",
   "parentName": "estate:somacosf",
   "mint": "provisional",
   "status": "live",
   "dossier": {
    "what": "DCPM: a datacenter surface in the project management family, beside ITPM.",
    "why": null
   },
   "timeline": [
    {
     "date": "2026-11-13",
     "kind": "DEPLOY",
     "label": "ATLAS ITERATION 2 + WIRE ATLAS EDITION LIVE"
    },
    {
     "date": "2026-11-08",
     "kind": "BUILD",
     "label": "DCPM TIED TO GEOHEX CELLS"
    }
   ]
  },
  {
   "host": "proof.somacosf.com",
   "label": "proof",
   "board": "proof.somacosf.com",
   "title": "Proof \u2014 the verify-in-browser surface",
   "url": "https://proof.somacosf.com",
   "grade": "LIVE-200",
   "color": "hsl(249, 68%, 63%)",
   "hue": 249,
   "lat": 6.756,
   "lon": -144.72,
   "real": false,
   "base": 84.7,
   "speed": 0.292,
   "phase": 2.95,
   "uuid": "550efeb9-2e58-8000-8200-0078171875ad",
   "parentName": "estate:somacosf",
   "mint": "provisional",
   "status": "live",
   "dossier": {
    "what": "Proof: the verify in browser surface, where estate claims are checked in the open.",
    "why": "Built so a claim can be re-run by whoever reads it, not taken on trust."
   },
   "timeline": [
    {
     "date": "2026-11-05",
     "kind": "REPO BORN",
     "label": "Repo born: SoMaCoSF/imbuuid-proof"
    }
   ]
  },
  {
   "host": "portfolio.somacosf.com",
   "label": "portfolio",
   "board": "portfolio.somacosf.com",
   "title": "Portfolio",
   "url": "https://portfolio.somacosf.com",
   "grade": "LIVE-200",
   "color": "hsl(303, 68%, 63%)",
   "hue": 303,
   "lat": 8.484,
   "lon": -79.56,
   "real": false,
   "base": 54.3,
   "speed": 0.351,
   "phase": 2.67,
   "uuid": "550efe67-178e-8000-8200-014b62d47293",
   "parentName": "estate:somacosf",
   "mint": "provisional",
   "status": "live",
   "dossier": {
    "what": "Portfolio: the estate's portfolio page.",
    "why": null
   },
   "timeline": []
  },
  {
   "host": "369.somacosf.com",
   "label": "369",
   "board": "369.somacosf.com",
   "title": "369",
   "url": "https://369.somacosf.com",
   "grade": "LIVE-200",
   "color": "hsl(234, 68%, 63%)",
   "hue": 234,
   "lat": -18.3,
   "lon": 173.16,
   "real": false,
   "base": 17.5,
   "speed": 0.174,
   "phase": 5.23,
   "uuid": "550efead-03fa-8000-8200-00dfe5544e32",
   "parentName": "estate:somacosf",
   "mint": "provisional",
   "status": "live",
   "dossier": null,
   "timeline": [
    {
     "date": "2026-11-05",
     "kind": "DEPLOY",
     "label": "369.SOMACOSF.COM LIVE"
    }
   ]
  },
  {
   "host": "hex.somacosf.com",
   "label": "hex",
   "board": "hex.somacosf.com",
   "title": "Hex \u2014 HXPHXH family site",
   "url": "https://hex.somacosf.com",
   "grade": "LIVE-200",
   "color": "hsl(241, 68%, 63%)",
   "hue": 241,
   "lat": 38.076,
   "lon": -115.92,
   "real": false,
   "base": 9.7,
   "speed": 0.165,
   "phase": 4.45,
   "uuid": "550efee9-703d-8000-8200-006cacd1e67e",
   "parentName": "estate:somacosf",
   "mint": "provisional",
   "status": "live",
   "dossier": {
    "what": "Hex: the HXPHXH family site, home of the hex font and tile work.",
    "why": "Built to give the hex line a public face of its own, apart from the console."
   },
   "timeline": [
    {
     "date": "2026-11-03",
     "kind": "REPO BORN",
     "label": "Repo born: SoMaCoSF/hex"
    },
    {
     "date": "2026-11-02",
     "kind": "DEPLOY",
     "label": "HEX FLAGSHIP LIVE \u2014 hex.somacosf.com (10603)"
    },
    {
     "date": "2026-11-02",
     "kind": "DOC",
     "label": "VERCEL CENSUS + ESTATE BACKUP \u2014 COMPLETE"
    },
    {
     "date": "2026-11-02",
     "kind": "DOC",
     "label": "DEVIN FOR STARTUPS \u2014 APPLICATION SUBMITTED"
    }
   ]
  },
  {
   "host": "github.com",
   "label": "muse-identity",
   "board": "github.com/muse-identity",
   "title": "Identity repo \u2014 SoMaCoSF/muse-identity",
   "url": "https://github.com/SoMaCoSF/muse-identity",
   "grade": "LIVE-OTHER-404",
   "color": "hsl(118, 68%, 63%)",
   "hue": 118,
   "lat": 28.68,
   "lon": -73.44,
   "real": false,
   "base": 77.0,
   "speed": 0.519,
   "phase": 5.59,
   "uuid": "550efe85-4a1b-8000-8200-021a8c00810a",
   "parentName": "estate:somacosf",
   "mint": "provisional",
   "status": "live",
   "dossier": {
    "what": "The identity repo: the private record of identities and grades, and the source the status page reads.",
    "why": "Built so identity has a home that outlives any one machine or install."
   },
   "timeline": [
    {
     "date": "2026-10-05",
     "kind": "REPO BORN",
     "label": "Repo born: SoMaCoSF/muse-identity"
    }
   ]
  },
  {
   "host": "github.com",
   "label": "mission-control-hub",
   "board": "github.com/mission-control-hub",
   "title": "Mission Control hub \u2014 SoMaCoSF/mission_control hub/",
   "url": "https://github.com/SoMaCoSF/mission_control",
   "grade": "LIVE-OTHER-404",
   "color": "hsl(118, 68%, 63%)",
   "hue": 118,
   "lat": -15.06,
   "lon": 3.96,
   "real": false,
   "base": 84.5,
   "speed": 0.351,
   "phase": 2.41,
   "uuid": "550efe8d-ddb8-8000-8200-0083cde46c03",
   "parentName": "estate:somacosf",
   "mint": "provisional",
   "status": "live",
   "dossier": {
    "what": "Mission Control hub: the coordination ledger where the agent team's directives, claims, and receipts are written.",
    "why": "Built so many agents can work one estate without losing who said what, or what was proven."
   },
   "timeline": [
    {
     "date": "2026-11-15",
     "kind": "BUILD",
     "label": "ITERATION LOOP WITH THE TEAM \u2014 CHARTER LIVE"
    },
    {
     "date": "2026-11-07",
     "kind": "BUILD",
     "label": "DEVIN UNBLOCK PACKAGE \u2014 ESTATE-SYSTEM SPEC IN MISSION_CONTROL (SOM-DOC-10660)"
    },
    {
     "date": "2026-11-05",
     "kind": "BUILD",
     "label": "CENTRAL-1 MERGED + PUSHED"
    },
    {
     "date": "2026-11-01",
     "kind": "BUILD",
     "label": "SLACK SPINE LIVE \u2014 DEVIN SEAT + SYNC DIRECTIVE"
    },
    {
     "date": "2026-07-28",
     "kind": "REPO BORN",
     "label": "Repo born: SoMaCoSF/mission_control"
    }
   ]
  },
  {
   "host": "somacoprotocol.slack.com",
   "label": "somacoprotocol.slack.com",
   "board": "somacoprotocol.slack.com",
   "title": "Slack \u2014 somaco_protocol workspace (the live channel)",
   "url": "https://somacoprotocol.slack.com",
   "grade": "LIVE-OTHER-403",
   "color": "hsl(87, 68%, 63%)",
   "hue": 87,
   "lat": -43.464,
   "lon": -116.64,
   "real": false,
   "base": 2.2,
   "speed": 0.369,
   "phase": 2.54,
   "uuid": "550efe0f-11bc-8000-8200-01dd115f9396",
   "parentName": "estate:somacosf",
   "mint": "provisional",
   "status": "live",
   "dossier": {
    "what": "The somaco_protocol Slack workspace: the live channel where the team coordinates.",
    "why": "Kept as the fast channel. The ledger, not the chat, is the record."
   },
   "timeline": []
  },
  {
   "host": "spoc.somacosf.com",
   "label": "spoc",
   "board": "spoc.somacosf.com",
   "title": "Says Network \u2014 ten cities: presences + SPOC nodes",
   "url": "https://spoc.somacosf.com",
   "grade": "LIVE-OTHER-503",
   "color": "hsl(342, 68%, 63%)",
   "hue": 342,
   "lat": 20.796,
   "lon": 85.68,
   "real": false,
   "base": 41.7,
   "speed": 0.31,
   "phase": 0.91,
   "uuid": "550efede-ad33-8000-8200-02ea002b74e4",
   "parentName": "estate:somacosf",
   "mint": "provisional",
   "status": "staged",
   "dossier": {
    "what": "SPOC: the Says network node. The presences and endpoints of the ten cities, named in one place.",
    "why": "Built as the network's front door: one address that names the whole federation."
   },
   "timeline": [
    {
     "date": "2026-11-08",
     "kind": "BUILD",
     "label": "SAYS-HUB + DEVIN-IDENTITY MERGES (NOV 8)"
    },
    {
     "date": "2026-10-27",
     "kind": "GIST BORN",
     "label": "Gist born: Protocol overview: the UUID is the address"
    },
    {
     "date": "2026-10-11",
     "kind": "GIST BORN",
     "label": "Gist born: SPOC Talk, the addressed comms capability"
    },
    {
     "date": "2026-04-13",
     "kind": "GIST BORN",
     "label": "Gist born: The Says Network, bent into UUID"
    },
    {
     "date": "2026-03-07",
     "kind": "REPO BORN",
     "label": "Repo born: SoMaCoSF/says-hub"
    }
   ]
  },
  {
   "host": "sonomasays.com",
   "label": "sonomasays.com",
   "board": "sonomasays.com",
   "title": "Sonoma Says \u2014 wine-country page",
   "url": "https://sonomasays.com",
   "grade": "LIVE-200",
   "color": "hsl(110, 68%, 63%)",
   "hue": 110,
   "lat": 38.2919,
   "lon": -122.458,
   "real": true,
   "base": 69.1,
   "speed": 0.442,
   "phase": 0.13,
   "uuid": "550efe7e-fdc8-8000-8200-033ade93b50b",
   "parentName": "says-network",
   "mint": "provisional",
   "status": "live",
   "dossier": {
    "what": "Sonoma Says: the wine country city of the Says network, and the front door to the Sonoma voxel twin.",
    "why": "Built first among the cities because the ground was already known: the terroir, the wineries, and the story. It is the network's income build, commerce by recorded intent."
   },
   "timeline": [
    {
     "date": "2026-07-28",
     "kind": "REPO BORN",
     "label": "Repo born: SoMaCoSF/sonomasays-platform"
    }
   ]
  },
  {
   "host": "austinsays.com",
   "label": "austinsays.com",
   "board": "austinsays.com",
   "title": "Austin Says \u2014 Next.js app",
   "url": "https://austinsays.com",
   "grade": "LIVE-200",
   "color": "hsl(211, 68%, 63%)",
   "hue": 211,
   "lat": 30.2672,
   "lon": -97.7431,
   "real": true,
   "base": 18.9,
   "speed": 0.392,
   "phase": 1.91,
   "uuid": "550efed9-aae9-8000-8200-01fb716a98c4",
   "parentName": "says-network",
   "mint": "provisional",
   "status": "live",
   "dossier": {
    "what": "Austin Says: the Austin city surface of the Says network, a city read over a hex addressed grid.",
    "why": "Built to prove the city pattern at scale: tens of thousands of real buildings, every cell carrying its own identity."
   },
   "timeline": [
    {
     "date": "2026-09-28",
     "kind": "GIST BORN",
     "label": "Gist born: Austin's buildings on a hex lattice"
    },
    {
     "date": "2026-02-28",
     "kind": "GIST BORN",
     "label": "Gist born: AustinSays platform implementation"
    },
    {
     "date": "2026-02-26",
     "kind": "REPO BORN",
     "label": "Repo born: SoMaCoSF/austinsays-platform"
    },
    {
     "date": "2026-02-26",
     "kind": "GIST BORN",
     "label": "Gist born: AustinSays Pulse"
    }
   ]
  },
  {
   "host": "www.newyorksays.com",
   "label": "www.newyorksays.com",
   "board": "www.newyorksays.com",
   "title": "New York Says \u2014 SoMaCo Protocol presence (www)",
   "url": "https://www.newyorksays.com",
   "grade": "LIVE-200",
   "color": "hsl(218, 68%, 63%)",
   "hue": 218,
   "lat": 40.7128,
   "lon": -74.006,
   "real": true,
   "base": 56.6,
   "speed": 0.287,
   "phase": 2.62,
   "uuid": "550efe21-e5ca-8000-8200-02f3266b7c4a",
   "parentName": "says-network",
   "mint": "provisional",
   "status": "live",
   "dossier": {
    "what": "New York Says: the network's New York presence.",
    "why": "One of the ten Says presences: the same addressed city pattern, flown in New York."
   },
   "timeline": []
  },
  {
   "host": "miamisays.com",
   "label": "miamisays.com",
   "board": "miamisays.com",
   "title": "Miami Says \u2014 SoMaCo Protocol presence",
   "url": "https://miamisays.com",
   "grade": "LIVE-200",
   "color": "hsl(72, 68%, 63%)",
   "hue": 72,
   "lat": 25.7617,
   "lon": -80.1918,
   "real": true,
   "base": 27.1,
   "speed": 0.278,
   "phase": 4.11,
   "uuid": "550efe4d-5cc8-8000-8200-03d0c783d9dd",
   "parentName": "says-network",
   "mint": "provisional",
   "status": "live",
   "dossier": {
    "what": "Miami Says: the network's Miami presence.",
    "why": "One of the ten Says presences: the same addressed city pattern, flown in Miami."
   },
   "timeline": []
  },
  {
   "host": "chicagosays.com",
   "label": "chicagosays.com",
   "board": "chicagosays.com",
   "title": "Chicago Says \u2014 SoMaCo Protocol presence",
   "url": "https://chicagosays.com",
   "grade": "LIVE-200",
   "color": "hsl(5, 68%, 63%)",
   "hue": 5,
   "lat": 41.8781,
   "lon": -87.6298,
   "real": true,
   "base": 18.3,
   "speed": 0.255,
   "phase": 3.3,
   "uuid": "550efee1-1477-8000-8200-029016a1ee4f",
   "parentName": "says-network",
   "mint": "provisional",
   "status": "live",
   "dossier": {
    "what": "Chicago Says: the network's Chicago presence.",
    "why": "One of the ten Says presences: the same addressed city pattern, flown in Chicago."
   },
   "timeline": []
  },
  {
   "host": "sanfranciscosays.com",
   "label": "sanfranciscosays.com",
   "board": "sanfranciscosays.com",
   "title": "San Francisco Says \u2014 SoMaCo Protocol presence",
   "url": "https://sanfranciscosays.com",
   "grade": "LIVE-200",
   "color": "hsl(265, 68%, 63%)",
   "hue": 265,
   "lat": 37.7749,
   "lon": -122.4194,
   "real": true,
   "base": 37.7,
   "speed": 0.115,
   "phase": 3.84,
   "uuid": "550efe23-f807-8000-8200-01d90a6f1555",
   "parentName": "says-network",
   "mint": "provisional",
   "status": "live",
   "dossier": {
    "what": "San Francisco Says: the network's home city presence.",
    "why": "San Francisco is the hub city, the estate's home ground and the network's anchor."
   },
   "timeline": []
  },
  {
   "host": "losangelessays.com",
   "label": "losangelessays.com",
   "board": "losangelessays.com",
   "title": "Los Angeles Says \u2014 SoMaCo Protocol presence",
   "url": "https://losangelessays.com",
   "grade": "LIVE-200",
   "color": "hsl(79, 68%, 63%)",
   "hue": 79,
   "lat": 34.0522,
   "lon": -118.2437,
   "real": true,
   "base": 51.9,
   "speed": 0.201,
   "phase": 4.9,
   "uuid": "550efe21-aeb4-8000-8200-01490a8c8bc4",
   "parentName": "says-network",
   "mint": "provisional",
   "status": "live",
   "dossier": {
    "what": "Los Angeles Says: the network's Los Angeles presence.",
    "why": "One of the ten Says presences: the same addressed city pattern, flown in Los Angeles."
   },
   "timeline": []
  },
  {
   "host": "parissays.com",
   "label": "parissays.com",
   "board": "parissays.com",
   "title": "Paris Says \u2014 SoMaCo Protocol presence",
   "url": "https://parissays.com",
   "grade": "LIVE-200",
   "color": "hsl(103, 68%, 63%)",
   "hue": 103,
   "lat": 48.8566,
   "lon": 2.3522,
   "real": true,
   "base": 33.5,
   "speed": 0.233,
   "phase": 0.93,
   "uuid": "550efeec-eb58-8000-8200-01ede33c91a3",
   "parentName": "says-network",
   "mint": "provisional",
   "status": "live",
   "dossier": {
    "what": "Paris Says: the network's Paris presence.",
    "why": "One of the ten Says presences: the same addressed city pattern, flown in Paris."
   },
   "timeline": []
  },
  {
   "host": "londonsays.com",
   "label": "londonsays.com",
   "board": "londonsays.com",
   "title": "London Says \u2014 SoMaCo Protocol presence",
   "url": "https://londonsays.com",
   "grade": "LIVE-200",
   "color": "hsl(334, 68%, 63%)",
   "hue": 334,
   "lat": 51.5074,
   "lon": -0.1278,
   "real": true,
   "base": 73.7,
   "speed": 0.333,
   "phase": 0.79,
   "uuid": "550efe29-34e9-8000-8200-01b9571a06fa",
   "parentName": "says-network",
   "mint": "provisional",
   "status": "live",
   "dossier": {
    "what": "London Says: the network's London presence.",
    "why": "One of the ten Says presences: the same addressed city pattern, flown in London."
   },
   "timeline": []
  },
  {
   "host": "tokyosays.com",
   "label": "tokyosays.com",
   "board": "tokyosays.com",
   "title": "Tokyo Says \u2014 SoMaCo Protocol presence",
   "url": "https://tokyosays.com",
   "grade": "LIVE-200",
   "color": "hsl(349, 68%, 63%)",
   "hue": 349,
   "lat": 35.6762,
   "lon": 139.6503,
   "real": true,
   "base": 6.3,
   "speed": 0.328,
   "phase": 0.47,
   "uuid": "550efe0c-2bc9-8000-8200-012742d3bc15",
   "parentName": "says-network",
   "mint": "provisional",
   "status": "live",
   "dossier": {
    "what": "Tokyo Says: the network's Tokyo presence.",
    "why": "One of the ten Says presences: the same addressed city pattern, flown in Tokyo."
   },
   "timeline": [
    {
     "date": "2026-11-16",
     "kind": "DEPLOY",
     "label": "TOKYOSAYS LIVE (SOM-DOC-10830)"
    }
   ]
  },
  {
   "host": "game.somacosf.com",
   "label": "game",
   "board": "game.somacosf.com",
   "title": "Game \u2014 SPLAT + GEOHEX TD (the estate's games)",
   "url": "https://game.somacosf.com",
   "grade": "LIVE-200",
   "color": "hsl(95, 68%, 63%)",
   "hue": 95,
   "lat": 38.724,
   "lon": 85.32,
   "real": false,
   "base": 34.3,
   "speed": 0.505,
   "phase": 5.66,
   "uuid": "550efee0-1dac-8000-8200-01a1142d7fbb",
   "parentName": "estate:somacosf",
   "mint": "provisional",
   "status": "live",
   "dossier": {
    "what": "Game: the estate's games, SPLAT and GEOHEX TD.",
    "why": "Built so the estate's systems can be played with, not only read."
   },
   "timeline": [
    {
     "date": "2026-11-16",
     "kind": "DEPLOY",
     "label": "SPLAT LIVE (SOM-DOC-10841)"
    }
   ]
  },
  {
   "host": "imbuuid-pitch.vercel.app",
   "label": "imbuuid-pitch.vercel.app",
   "board": "imbuuid-pitch.vercel.app",
   "title": "IMBUUID Pitch \u2014 staging",
   "url": "https://imbuuid-pitch.vercel.app",
   "grade": "LIVE-200",
   "color": "hsl(295, 68%, 63%)",
   "hue": 295,
   "lat": -10.956,
   "lon": 173.52,
   "real": false,
   "base": 60.3,
   "speed": 0.328,
   "phase": 0.12,
   "uuid": "550efe75-8bb8-8000-8200-01dab75e3873",
   "parentName": "estate:somacosf",
   "mint": "provisional",
   "status": "staged",
   "dossier": {
    "what": "The IMBUUID pitch, staged.",
    "why": null
   },
   "timeline": [
    {
     "date": "2026-11-16",
     "kind": "DEPLOY",
     "label": "IMBUUID PITCH STAGING LIVE (SOM-DOC-10838)"
    }
   ]
  },
  {
   "host": "vox.somacosf.com",
   "label": "vox",
   "board": "vox.somacosf.com",
   "title": "Vox \u2014 the voxel doctrine",
   "url": "https://vox.somacosf.com",
   "grade": "LIVE-200",
   "color": "hsl(195, 68%, 63%)",
   "hue": 195,
   "lat": 25.548,
   "lon": -31.32,
   "real": false,
   "base": 10.1,
   "speed": 0.292,
   "phase": 5.72,
   "uuid": "550efeb6-e4e5-8000-8200-00a73bd6b571",
   "parentName": "estate:somacosf",
   "mint": "provisional",
   "status": "live",
   "dossier": {
    "what": "Vox: the voxel doctrine. One cell, one IMBUUID; a place and its occupant are linked, never merged.",
    "why": "Built to state the voxel rules in one place, before the city twins were built on them."
   },
   "timeline": []
  },
  {
   "host": "vox.sonomasays.com",
   "label": "vox.sonomasays.com",
   "board": "vox.sonomasays.com",
   "title": "Vox Sonoma \u2014 the Sonoma voxel twin",
   "url": "https://vox.sonomasays.com",
   "grade": "LIVE-200",
   "color": "hsl(180, 68%, 63%)",
   "hue": 180,
   "lat": 38.2919,
   "lon": -122.458,
   "real": true,
   "base": 71.7,
   "speed": 0.242,
   "phase": 3.85,
   "uuid": "550efe32-a3ed-8000-8200-00182ccb9120",
   "parentName": "estate:somacosf",
   "mint": "provisional",
   "status": "live",
   "dossier": {
    "what": "Vox Sonoma: the Sonoma voxel twin, the county read as addressed voxels.",
    "why": "Built to test the voxel doctrine on real ground: density only where a supply chain or identity bearing element stands."
   },
   "timeline": [
    {
     "date": "2026-11-14",
     "kind": "DEPLOY",
     "label": "SONOMASAYS SHOWCASE V3 \u2014 VOX.SONOMASAYS.COM LIVE"
    },
    {
     "date": "2026-11-14",
     "kind": "REPO BORN",
     "label": "Repo born: SoMaCoSF/VoxCity"
    }
   ]
  },
  {
   "host": "build.somacosf.com",
   "label": "build",
   "board": "build.somacosf.com",
   "title": "Build \u2014 the build dash",
   "url": "https://build.somacosf.com",
   "grade": "LIVE-200",
   "color": "hsl(272, 68%, 63%)",
   "hue": 272,
   "lat": -1.884,
   "lon": 42.84,
   "real": false,
   "base": 44.7,
   "speed": 0.224,
   "phase": 0.71,
   "uuid": "550efe4c-3cb6-8000-8200-007f41bdf433",
   "parentName": "estate:somacosf",
   "mint": "provisional",
   "status": "live",
   "dossier": {
    "what": "Build: the delivery record. Every landed build and deploy, chained in order.",
    "why": "Built so what shipped is a matter of record, readable without asking anyone."
   },
   "timeline": [
    {
     "date": "2026-11-20",
     "kind": "DEPLOY",
     "label": "BUILD DASH REBUILT AS THE DELIVERY RECORD (SOM-DOC-10822)"
    },
    {
     "date": "2026-11-15",
     "kind": "DEPLOY",
     "label": "BUILD DASH LIVE (SOM-DOC-10822)"
    }
   ]
  },
  {
   "host": "library.somacosf.com",
   "label": "library",
   "board": "library.somacosf.com",
   "title": "Library \u2014 the estate census",
   "url": "https://library.somacosf.com",
   "grade": "LIVE-200",
   "color": "hsl(141, 68%, 63%)",
   "hue": 141,
   "lat": 26.412,
   "lon": 29.16,
   "real": false,
   "base": 50.9,
   "speed": 0.178,
   "phase": 1.61,
   "uuid": "550efe87-7c4f-8000-8200-039fa3cbcbd3",
   "parentName": "estate:somacosf",
   "mint": "provisional",
   "status": "live",
   "dossier": {
    "what": "Library: the estate census, the counted inventory of what exists.",
    "why": "Built so the estate can be counted honestly, gaps included."
   },
   "timeline": []
  },
  {
   "host": "mermaid.somacosf.com",
   "label": "mermaid",
   "board": "mermaid.somacosf.com",
   "title": "Mermaid \u2014 the estate dump",
   "url": "https://mermaid.somacosf.com",
   "grade": "LIVE-200",
   "color": "hsl(326, 68%, 63%)",
   "hue": 326,
   "lat": 24.684,
   "lon": -123.48,
   "real": false,
   "base": 73.3,
   "speed": 0.346,
   "phase": 2.97,
   "uuid": "550efe98-74d7-8000-8200-002bd3312655",
   "parentName": "estate:somacosf",
   "mint": "provisional",
   "status": "live",
   "dossier": {
    "what": "Mermaid: the estate dump, the whole tree rendered as diagrams.",
    "why": "Built so the shape of the estate can be seen whole, in one pass."
   },
   "timeline": []
  },
  {
   "host": "logic.somacosf.com",
   "label": "logic",
   "board": "logic.somacosf.com",
   "title": "Logic \u2014 the logic system",
   "url": "https://logic.somacosf.com",
   "grade": "LIVE-200",
   "color": "hsl(13, 68%, 63%)",
   "hue": 13,
   "lat": 56.436,
   "lon": -141.12,
   "real": false,
   "base": 74.7,
   "speed": 0.415,
   "phase": 1.98,
   "uuid": "550efe74-1800-8000-8200-00d920550b11",
   "parentName": "estate:somacosf",
   "mint": "provisional",
   "status": "live",
   "dossier": {
    "what": "Logic: the logic system surface.",
    "why": null
   },
   "timeline": []
  },
  {
   "host": "fractal.somacosf.com",
   "label": "fractal",
   "board": "fractal.somacosf.com",
   "title": "Fractal \u2014 the campaign surfaces",
   "url": "https://fractal.somacosf.com",
   "grade": "LIVE-200",
   "color": "hsl(319, 68%, 63%)",
   "hue": 319,
   "lat": 4.812,
   "lon": -144.72,
   "real": false,
   "base": 2.9,
   "speed": 0.292,
   "phase": 3.85,
   "uuid": "550efe44-2e09-8000-8200-022521de8c9c",
   "parentName": "estate:somacosf",
   "mint": "provisional",
   "status": "live",
   "dossier": {
    "what": "Fractal: the campaign surfaces.",
    "why": null
   },
   "timeline": [
    {
     "date": "2026-11-15",
     "kind": "DEPLOY",
     "label": "THE PULL LIVE (SOM-DOC-10821)"
    }
   ]
  },
  {
   "host": "umbit.somacosf.com",
   "label": "umbit",
   "board": "umbit.somacosf.com",
   "title": "UMBIT \u2014 You Am Be I Technology",
   "url": "https://umbit.somacosf.com",
   "grade": "LIVE-200",
   "color": "hsl(164, 68%, 63%)",
   "hue": 164,
   "lat": 35.916,
   "lon": -114.84,
   "real": false,
   "base": 27.7,
   "speed": 0.133,
   "phase": 4.7,
   "uuid": "550efe69-3899-8000-8200-002bf26ac048",
   "parentName": "estate:somacosf",
   "mint": "provisional",
   "status": "live",
   "dossier": {
    "what": "UMBIT: You Am Be I Technology.",
    "why": null
   },
   "timeline": []
  },
  {
   "host": "atlas.somacosf.com",
   "label": "atlas",
   "board": "atlas.somacosf.com",
   "title": "Atlas \u2014 the supply-chain atlas",
   "url": "https://atlas.somacosf.com",
   "grade": "LIVE-200",
   "color": "hsl(280, 68%, 63%)",
   "hue": 280,
   "lat": 9.132,
   "lon": 162.0,
   "real": false,
   "base": 82.9,
   "speed": 0.21,
   "phase": 5.19,
   "uuid": "550efefe-24db-8000-8200-0287d2601016",
   "parentName": "estate:somacosf",
   "mint": "provisional",
   "status": "live",
   "dossier": {
    "what": "Atlas: the supply chain atlas. 91 companies across 10 bill of materials layers, placed on the map.",
    "why": "Built so a build's supply base can be read geographically, from the company down to the dirt."
   },
   "timeline": []
  },
  {
   "host": "itpm.somacosf.com",
   "label": "itpm",
   "board": "itpm.somacosf.com",
   "title": "ITPM \u2014 the role OS, live proof",
   "url": "https://itpm.somacosf.com",
   "grade": "LIVE-200",
   "color": "hsl(257, 68%, 63%)",
   "hue": 257,
   "lat": -7.068,
   "lon": 29.52,
   "real": false,
   "base": 71.9,
   "speed": 0.274,
   "phase": 3.35,
   "uuid": "550efe2b-0a08-8000-8200-000813d26d1b",
   "parentName": "estate:somacosf",
   "mint": "provisional",
   "status": "live",
   "dossier": {
    "what": "ITPM: the commissioning and project delivery system, spoken and typed, exercised end to end on real Revit models.",
    "why": "Built from thirty years of hospital and datacenter go-lives: the role's work as a system, every transition receipted."
   },
   "timeline": [
    {
     "date": "2026-11-21",
     "kind": "FINDING",
     "label": "Commissioning standards dossier mapped onto ITPM model (SOM-DOC-10888)"
    },
    {
     "date": "2026-11-21",
     "kind": "DEPLOY",
     "label": "itpm.somacosf.com/commissioning.html \u2014 commissioning standards dossier (SOM-DOC-10888) posted"
    },
    {
     "date": "2026-11-21",
     "kind": "DOC",
     "label": "Boardy review folded into commissioning dossier + page (SOM-DOC-10888)"
    },
    {
     "date": "2026-11-19",
     "kind": "BUILD",
     "label": "SPOKEN ITPM \u2014 PERMIT FOLD-IN + DEPLOY PACKAGE"
    },
    {
     "date": "2026-11-18",
     "kind": "BUILD",
     "label": "SPOKEN ITPM T5 INTEGRATION \u2014 15/15 (SOM-DOC-10845)"
    },
    {
     "date": "2026-11-18",
     "kind": "BUILD",
     "label": "ITPM ISOMETRIC PROTOTYPE \u2014 LENS VIEWS BUILT (SOM-DOC-10848)"
    },
    {
     "date": "2026-09-27",
     "kind": "REPO BORN",
     "label": "Repo born: SoMaCoSF/ucsf_pm"
    }
   ]
  },
  {
   "host": "planck.somacosf.com",
   "label": "planck",
   "board": "planck.somacosf.com",
   "title": "Planck",
   "url": "https://planck.somacosf.com",
   "grade": "LIVE-200",
   "color": "hsl(203, 68%, 63%)",
   "hue": 203,
   "lat": 56.436,
   "lon": -95.4,
   "real": false,
   "base": 26.7,
   "speed": 0.246,
   "phase": 6.08,
   "uuid": "550efe06-e839-8000-8200-029c3ff4fe90",
   "parentName": "estate:somacosf",
   "mint": "provisional",
   "status": "live",
   "dossier": null,
   "timeline": []
  },
  {
   "host": "github.com",
   "label": "imbuuid_itpm",
   "board": "github.com/imbuuid_itpm",
   "title": "imbuuid_itpm \u2014 the Spoken ITPM coordination repo",
   "url": "https://github.com/SoMaCoSF/imbuuid_itpm",
   "grade": "LIVE-200",
   "color": "hsl(118, 68%, 63%)",
   "hue": 118,
   "lat": -34.932,
   "lon": -18.72,
   "real": false,
   "base": 66.1,
   "speed": 0.324,
   "phase": 4.98,
   "uuid": "550efeca-bdce-8000-8200-01bc6cddff81",
   "parentName": "estate:somacosf",
   "mint": "provisional",
   "status": "live",
   "dossier": {
    "what": "The Spoken ITPM coordination repo: the mailbox and record tree for the ITPM build crew.",
    "why": "Built so the ITPM workstream coordinates by addressed append, in the open, not by chat memory."
   },
   "timeline": [
    {
     "date": "2026-11-17",
     "kind": "REPO BORN",
     "label": "Repo born: SoMaCoSF/imbuuid_itpm"
    }
   ]
  },
  {
   "host": "kestrel.somacosf.com",
   "label": "kestrel",
   "board": "kestrel.somacosf.com",
   "title": "Kestrel '45 \u2014 the one-file vertical shmup",
   "url": "https://kestrel.somacosf.com",
   "grade": "LIVE-200",
   "color": "hsl(172, 68%, 63%)",
   "hue": 172,
   "lat": -41.196,
   "lon": 157.68,
   "real": false,
   "base": 4.3,
   "speed": 0.26,
   "phase": 3.44,
   "uuid": "550efe85-361c-8000-8200-0145d8804480",
   "parentName": "estate:somacosf",
   "mint": "provisional",
   "status": "live",
   "dossier": {
    "what": "Kestrel '45: a one file vertical shoot em up.",
    "why": "Built as a single file game: the whole thing at one address."
   },
   "timeline": [
    {
     "date": "2026-11-18",
     "kind": "DEPLOY",
     "label": "KESTREL IN HXPHXH \u2014 '45 + 4 VARIANTS"
    }
   ]
  }
 ]
};
