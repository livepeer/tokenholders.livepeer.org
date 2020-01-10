export type ResourceCategory = "learn" | "tools" | "develop";

export type Resource = {
  title: string;
  byline: string;
  category: ResourceCategory;
  description: string;
  link: string;
};

const resources: Array<Resource> = [
  {
    title: "The Livepeer Primer",
    byline: "By Adam Soffer & Kellie Pcolar",
    category: "learn",
    description:
      "Through storytelling, illustration, and data, the Livepeer Primer explains, at a high level, the problem Livepeer solves, and how it works.",
    link: "https://livepeer.org/primer/"
  },
  {
    title: "The Livepeer Whitepaper",
    byline: "By Doug Petkanics & Eric Tang",
    category: "learn",
    description:
      "Protocol and Economic Incentives For a Decentralized Live Video Streaming Network",
    link: "https://github.com/livepeer/wiki/blob/master/WHITEPAPER.md"
  },
  {
    title: "The Livepeer Whitepaper (French Translation)",
    byline: "Translation by Gareth Mensah",
    category: "learn",
    description:
      "Protocol and Economic Incentives For a Decentralized Live Video Streaming Network",
    link:
      "https://github.com/GreyEcologist/wiki/blob/feature/french_translation/WHITEPAPER_FRENCH.md"
  },
  {
    title: "The Livepeer Whitepaper (Russian Translation)",
    byline: "Translation by Fedorello",
    category: "learn",
    description:
      "Protocol and Economic Incentives For a Decentralized Live Video Streaming Network",
    link:
      "https://github.com/fedorello/wiki/blob/fedorello-patch-1/WHITEPAPER.md "
  },
  {
    title: "The Livepeer Streamflow Paper",
    byline: "By Doug Petkanics & Yondon Fu",
    category: "learn",
    description:
      "Livepeer Scalability on Ethereum through Orchestration, Probabilistic Micropayments, and Offchain Job Negotiation",
    link: "https://github.com/livepeer/wiki/blob/master/STREAMFLOW.md"
  },
  {
    title: "The Livepeer Streamflow Paper (Portuguese Translation)",
    byline: "Translation by Felipe Gaúcho",
    category: "learn",
    description:
      "Livepeer Scalability on Ethereum through Orchestration, Probabilistic Micropayments, and Offchain Job Negotiation",
    link: "https://github.com/felipegaucho/wiki-1/blob/master/STREAMFLOW.md"
  },
  {
    title: "Livepeer Tools",
    byline: "By Protofire",
    category: "tools",
    description: "Pro-active tokenholder and orchestrator alert notifications",
    link: "https://livepeer.tools"
  },
  {
    title: "Unified Rest API",
    byline: "By Fabrix.io",
    category: "develop",
    description: "Pro-active tokenholder and orchestrator alert notifications",
    link: "https://livepeer.tools"
  },
  {
    title: "Livepeer.js",
    byline: "By Livepeer Inc.",
    category: "develop",
    description:
      "JavaScript tools and applications that interact with Livepeer's smart contracts and peer-to-peer network",
    link: "https://github.com/livepeer/livepeerjs/"
  },
  {
    title: "Go Livepeer",
    byline: "By Livepeer Inc.",
    category: "develop",
    description: "Official Go implementation of the Livepeer protocol",
    link: "https://github.com/livepeer/go-livepeer"
  },
  {
    title: "The Livepeer Subgraph",
    byline: "By Livepeer Inc.",
    category: "develop",
    description:
      "Query indexed Livepeer data over GraphQL using the Graph Protocol.",
    link: "https://thegraph.com/explorer/subgraph/livepeer/livepeer"
  }
];

export default resources;
