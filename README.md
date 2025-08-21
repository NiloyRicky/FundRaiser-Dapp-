# FundRaiser-Dapp-

Objective: It allows users to create and manage campaigns for various causes, such as health, education, and animal welfare.

# Decentralized Crowdfunding Platform — Fundraiser dApp

A full-stack **Web3 crowdfunding** application built with **Next.js**, **ethers.js**, and **Hardhat**, using **IPFS (Pinata)** for decentralized asset storage and **MetaMask** for wallet connectivity. Deployed on the **Ethereum Sepolia** test network.

> Create campaigns, upload images/stories to IPFS, accept on-chain donations, and explore campaigns with category filters, search, and dark/light mode.

---

## ✨ Features

- **Create & Manage Campaigns**
  - Title, description (story), goal target, deadline, category, cover image.
- **On-Chain Donations**
  - MetaMask-powered ETH transactions on Sepolia.
- **Decentralized Storage**
  - IPFS uploads via Pinata (images & campaign story).
- **Modern UX**
  - Dynamic routing, category filter, search, dark/light theme toggle.
- **Real-Time Data**
  - Read contract state via ethers.js, show donors & totals.

---

## 🏗️ Architecture

Next.js (App Router)
├─ UI pages & components
├─ Hooks (wallet, theme, contract interactions)
└─ API routes (server-side helpers for IPFS/Pinata)

Hardhat
├─ Solidity contracts (Crowdfunding.sol)
├─ Deploy scripts (deploy.js)
└─ Tests (unit/integration)

Storage
└─ IPFS via Pinata SDK (metadata & images)

Wallet
└─ MetaMask (BrowserProvider)



---

## 🛠️ Tech Stack

- **Frontend:** Next.js 13+/14, React, TypeScript, Tailwind (optional), App Router
- **Web3:** ethers.js v6, MetaMask
- **Contracts/Tooling:** Solidity, Hardhat, Sepolia
- **Storage:** IPFS, Pinata SDK
- **Linting/Formatting:** ESLint, Prettier

---

## 📂 Directory Structure

root
├─ contracts/
│ └─ Crowdfunding.sol
├─ scripts/
│ └─ deploy.ts
├─ test/
│ └─ crowdfunding.test.ts
├─ app/ # Next.js App Router
│ ├─ page.tsx
│ ├─ create/page.tsx
│ ├─ campaign/[address]/page.tsx
│ ├─ api/
│ │ └─ ipfs/route.ts # (optional) server helper for Pinata
│ └─ globals.css
├─ components/
│ ├─ CampaignCard.tsx
│ ├─ DonateModal.tsx
│ ├─ ThemeToggle.tsx
│ └─ WalletButton.tsx
├─ hooks/
│ ├─ useWallet.ts
│ └─ useContract.ts
├─ lib/
│ ├─ ipfs.ts
│ └─ config.ts
├─ hardhat.config.ts
├─ next.config.js
├─ package.json
└─ README.md

<img width="1910" height="863" alt="Screenshot 2025-05-10 171138" src="https://github.com/user-attachments/assets/f0579584-7471-487a-9d02-37bea777ba29" />
<img width="1920" height="1008" alt="Screenshot 2025-05-10 171019" src="https://github.com/user-attachments/assets/b90293d9-c283-434f-9da4-2d74570dda4d" />
<img width="1894" height="874" alt="Screenshot 2025-05-10 170915" src="https://github.com/user-attachments/assets/0ca2a32a-4499-4b4e-bb0a-6beb92a4349f" />



