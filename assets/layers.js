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
 }
];
