export type Project = {
  name: string;
  link: string;
  liveLink?: string;
  desc: string;
  longDesc: string;
  techStack: string[];
  category: "web2" | "web3";
  award?: string;
};

export const projectsData: Project[] = [
  {
    name: "Wisk",
    link: "https://github.com/YadlaMani/wisk",
    desc: "Trustless background verification with DigiLocker + SNARK proofs.",
    longDesc:
      "Privacy-preserving document verification system enabling trustless background checks using DigiLocker certificates and SNARK proofs without exposing sensitive personal data. Built an entire PDF parser in pure Rust for ZK environment compatibility.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Rust",
      "Axum",
      "SP1",
      "Solidity",
      "Foundry",
      "MongoDB",
    ],
    category: "web3",
    award: "ETHGlobal 2025 Winner",
  },
  {
    name: "Wakey-Wakey",
    link: "https://github.com/YadlaMani/wakey-wakey",
    liveLink: "https://wakey-wakey.vercel.app",
    desc: "Decentralized uptime monitoring with <200ms latency across 50+ validators.",
    longDesc:
      "Decentralized uptime monitoring platform using a global network of validators to check website availability every 3 minutes worldwide. Validators earn SOL rewards, with real-time latency analytics and multi-channel alerting.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "Turborepo",
      "Solana",
    ],
    category: "web3",
    award: "$1,000 Solana x CoinDCX Grant",
  },
  {
    name: "Nekoma",
    link: "https://github.com/YadlaMani/Nekoma",
    desc: "AI agent platform on Base with programmable smart wallet flows.",
    longDesc:
      "AI-powered agent platform for programmable money on Base blockchain. Enables developers to manage funds through smart contracts with fine-grained spend permission delegation, USDC transfers, token swaps, and gasless transactions via an AI chat interface.",
    techStack: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Coinbase CDP SDK",
      "Gemini API",
      "Tailwind CSS",
    ],
    category: "web3",
  },
  {
    name: "Bob",
    link: "https://github.com/YadlaMani/bob",
    liveLink: "https://bob-v1.vercel.app",
    desc: "Solana data labeling marketplace with automated crypto rewards.",
    longDesc:
      "Data labeling marketplace on Solana connecting businesses with global contributors for high-quality labels, feedback, and insights. Features multiple quest types, real-time stats, PDF/CSV/JSON export, and automated Solana reward distribution.",
    techStack: [
      "React",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Solana",
      "shadcn/ui",
    ],
    category: "web3",
    award: "INNO-VA-THON 2.0 Winner",
  },
  {
    name: "Soteria",
    link: "https://github.com/YadlaMani/secret-vault-arcium",
    desc: "Decentralized document vault using Arcium MPC and Solana Anchor.",
    longDesc:
      "Decentralized document vault on Arcium's MPC network for storing and sharing sensitive personal data while maintaining full privacy. Features granular permission controls with time-limited access, zero-knowledge proofs, and on-chain audit trails.",
    techStack: ["Rust", "TypeScript", "Solana", "Anchor", "Arcium MPC"],
    category: "web3",
    award: "Arcium Fellowship",
  },
  {
    name: "ZK-Mixer",
    link: "https://github.com/YadlaMani/zk-mixer",
    desc: "Privacy-preserving Ethereum mixer using ZK proofs and Merkle trees.",
    longDesc:
      "Privacy-preserving Ethereum mixer leveraging zero-knowledge proofs and Merkle trees for unlinkable ETH deposits and withdrawals. Uses Noir ZK circuit language with Barretenberg backend and a nullifier system to prevent double-spending.",
    techStack: ["Noir", "Solidity", "Barretenberg", "TypeScript", "Poseidon2"],
    category: "web3",
  },
  {
    name: "Gible",
    link: "https://github.com/YadlaMani/gible",
    liveLink: "https://gible.vercel.app",
    desc: "DEX on Solana via Jupiter API - 1000+ tokens, slippage as low as 0.5%.",
    longDesc:
      "Comprehensive decentralized exchange on Solana leveraging Jupiter API for trading 1,000+ tokens. Features multi-chain transaction execution, real-time price comparison across DEXs, market trend analysis, and high-speed trade execution.",
    techStack: [
      "Next.js",
      "JavaScript",
      "Solana",
      "Jupiter API",
      "Wallet Adapter",
    ],
    category: "web3",
  },
  {
    name: "Opto",
    link: "https://github.com/YadlaMani/Opto",
    liveLink: "https://opto-yi2y.vercel.app",
    desc: "Anonymous blockchain-based posting for uncensorable stories and opinions.",
    longDesc:
      "Blockchain-based platform for secure anonymous posting with immutable IPFS storage, inspired by Aaron Swartz's vision for open internet. No personal data required - privacy-first design with on-chain content verification.",
    techStack: [
      "Solidity",
      "Next.js",
      "TypeScript",
      "Pinata",
      "Rainbow Kit",
      "Wagmi",
    ],
    category: "web3",
    award: "Onchain Summer Winner",
  },
  {
    name: "Avax50",
    link: "https://github.com/YadlaMani/avax50",
    liveLink: "https://avax50.vercel.app",
    desc: "Crypto index fund on Avalanche - like Nifty50, but for tokens.",
    longDesc:
      "Crypto investment platform lowering barriers for first-time investors in India through index-style curated token baskets. Features real-time price updates, interactive portfolio charts, smart wallet integration, and Google sign-up.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Avalanche",
      "Thirdweb",
      "Tailwind CSS",
    ],
    category: "web3",
  },
  {
    name: "Yokai",
    link: "https://github.com/YadlaMani/yokai",
    liveLink: "https://t.me/yokaiwallet_bot",
    desc: "Telegram bot for managing multiple Solana wallets with price alerts.",
    longDesc:
      "Telegram bot for efficient management of multiple Solana wallets with real-time token price updates, NFT holdings visualization, cross-wallet balance tracking, and token price subscription notifications.",
    techStack: [
      "TypeScript",
      "Node.js",
      "Prisma",
      "Telegraf",
      "@solana/web3.js",
    ],
    category: "web3",
  },
  {
    name: "Sakhi",
    link: "https://github.com/YadlaMani/sakhi",
    liveLink: "https://sakhi-v1.vercel.app",
    desc: "Women safety app with SOS alerts, safe routes, and AI threat detection.",
    longDesc:
      "Women safety platform with Travel Buddy peer-matching, community-rated Secure Places, SOS emergency alerts (shake/voice/button), fake call simulation, geofencing, taxi safety tracking, and NGO connectivity. Aligned with UN SDGs 5, 11, and 16.",
    techStack: [
      "React",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Tailwind CSS",
      "shadcn/ui",
    ],
    category: "web2",
    award: "Google Solution Challenge Winner",
  },
  {
    name: "test.ai",
    link: "https://github.com/YadlaMani/test.ai",
    desc: "AI-powered gamified quiz platform with leaderboards and learning paths.",
    longDesc:
      "Personalized knowledge testing platform with customizable quizzes, real-time scoring, collaborative group testing, AI-powered learning paths via Gemini, badge/achievement system, and global leaderboards. 7 contributors, 103 commits.",
    techStack: [
      "Next.js",
      "MongoDB",
      "Tailwind CSS",
      "Redux",
      "Gemini API",
      "Jest",
      "Cypress",
    ],
    category: "web2",
  },
  {
    name: "Hades",
    link: "https://github.com/YadlaMani/hades",
    liveLink: "https://hades.strawhats.tech",
    desc: "Unified REST API for LeetCode, Codeforces, and CodeChef - 16+ endpoints.",
    longDesc:
      "REST API service aggregating data from multiple competitive programming platforms with 16+ queryable endpoints. Provides unified access to user profiles, problem sets, contest information, submission calendars, and live ratings.",
    techStack: ["TypeScript", "Next.js", "REST API", "CSS"],
    category: "web2",
  },
  {
    name: "Ussop",
    link: "https://github.com/YadlaMani/Ussop",
    liveLink: "https://ussop-nu.vercel.app",
    desc: "Enterprise video conferencing with grid, speaker-left/right layouts.",
    longDesc:
      "Virtual meeting platform with real-time video conferencing supporting grid and speaker layout options, dynamic meeting room generation, modular component architecture, and Clerk authentication. 100% test coverage on core components.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Stream Video SDK",
      "Clerk",
      "Tailwind CSS",
    ],
    category: "web2",
  },
  {
    name: "Go-Quests",
    link: "https://github.com/YadlaMani/lite-quests/go-quests",
    desc: "Open-source Go exercise framework with 140+ GitHub stars.",
    longDesc:
      "Open-source Go exercise framework with 140+ GitHub stars. Features concept-scoped quests that target specific Go concepts using a solution.go + test suite workflow, reinforcing TDD from the ground up.",
    techStack: ["Go", "Unit Testing", "TDD", "Open Source"],
    category: "web2",
  },
  {
    name: "Not Your Type",
    link: "https://github.com/YadlaMani/not-your-type",
    desc: "Decentralized prediction market on Base with smart wallet support.",
    longDesc:
      "Decentralized prediction market on Base with smart wallet support. Features seamless on-chain betting with low fees and high performance. Won 1st place in Base Batch 001 International Hackathon.",
    techStack: ["Next.js", "Base", "Solidity", "Smart Wallet"],
    category: "web3",
    award: "1st Place - Base Batch 001",
  },
  {
    name: "Nomad",
    link: "https://github.com/YadlaMani/Nomad",
    desc: "Dynamic travel booking platform connecting travelers worldwide.",
    longDesc:
      "Dynamic travel booking platform connecting travelers worldwide with seamless search and booking flows. Built for scale with high-performance search and responsive design.",
    techStack: ["Next.js", "MongoDB", "Tailwind CSS"],
    category: "web2",
  },
  {
    name: "Chibi-Chat",
    link: "https://github.com/YadlaMani/Chibi-chat",
    desc: "Modern real-time messaging application with WebSocket support.",
    longDesc:
      "Modern real-time messaging application with WebSocket support for instant communication and modular UI. Supports multiple rooms and real-time state synchronization.",
    techStack: ["Socket.io", "React", "Node.js", "Tailwind CSS"],
    category: "web2",
  },
];
