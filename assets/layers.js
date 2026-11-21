window.ESTATE_LAYERS = [
 {
  "entryPoints": [
   {
    "kind": "hub",
    "label": "San Francisco hub"
   }
  ],
  "flow": {
   "mesh": null,
   "type": "hub"
  },
  "gloss": "The whole estate: every site in the registry, on one globe.",
  "hubLabel": null,
  "id": "estate",
  "leaderboard": {
   "scope": "layer"
  },
  "name": "ESTATE",
  "population": {
   "type": "all"
  }
 },
 {
  "entryPoints": [
   {
    "kind": "hub",
    "label": "San Francisco hub"
   },
   {
    "host": "geohex.somacosf.com",
    "kind": "host",
    "label": "GeoHex, spatial identity"
   }
  ],
  "flow": {
   "mesh": null,
   "type": "hub"
  },
  "gloss": "The tiling itself as the subject: every site stands on addressed ground, one cell to a place, and density gathers where identity stands.",
  "hubLabel": null,
  "id": "geohex",
  "leaderboard": {
   "scope": "layer"
  },
  "name": "GEOHEX",
  "population": {
   "type": "all"
  }
 },
 {
  "entryPoints": [
   {
    "kind": "hub",
    "label": "San Francisco hub, the entry point"
   },
   {
    "host": "spoc.somacosf.com",
    "kind": "host",
    "label": "SPOC, the network node"
   }
  ],
  "flow": {
   "mesh": {
    "k": 2,
    "strategy": "nearest"
   },
   "type": "hub+mesh"
  },
  "gloss": "The Says network only: the city presences, their voxel twin, and the network node, with the traffic between them.",
  "hubLabel": "SAN FRANCISCO HUB \u00b7 ENTRY POINT",
  "id": "says",
  "leaderboard": {
   "scope": "layer"
  },
  "name": "SAYS",
  "population": {
   "alsoHosts": [
    "spoc.somacosf.com"
   ],
   "suffix": "says.com",
   "type": "hostSuffix"
  }
 },
 {
  "entryPoints": [
   {
    "kind": "hub",
    "label": "San Francisco hub"
   },
   {
    "host": "atlas.somacosf.com",
    "kind": "host",
    "label": "Atlas, the supply chain map"
   }
  ],
  "flow": {
   "mesh": {
    "k": 2,
    "strategy": "nearest"
   },
   "type": "hub+mesh"
  },
  "gloss": "The supply chain surfaces: SCPM, the atlas of 91 companies across 10 bill of materials layers, and the datacenter working end, read as one chain. Flows are modelled, not measured.",
  "hubLabel": "SAN FRANCISCO HUB \u00b7 MODELLED",
  "id": "supply-chain",
  "leaderboard": {
   "scope": "layer"
  },
  "name": "SUPPLY CHAIN",
  "population": {
   "hosts": [
    "scpm.somacosf.com",
    "atlas.somacosf.com",
    "dc.somacosf.com"
   ],
   "type": "hostList"
  }
 }
];
