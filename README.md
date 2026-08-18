# 💰 FinliT — Gamified Financial Literacy & Micro-Investing

> **Learn Money. Play Smart. Grow Slowly.**

FinliT is a modern **FinTech platform designed for Gen Z** that combines financial education, gamification, and micro-investing into one interactive experience.

The platform makes learning about money engaging through **bite-sized lessons, quizzes, challenges, XP, streaks, and achievements**, while introducing users to the concept of micro-investing through simulated transaction round-ups and student-friendly investment portfolios.

---

## 🚀 Why FinliT?

Many students and young adults want to understand investing and personal finance but face two major problems:

* Financial concepts can be difficult and intimidating.
* Investing is often perceived as something that requires significant capital.

**FinliT addresses both problems by turning financial education into a game and demonstrating how small amounts can build investing habits over time.**

### The core idea

```text
Learn → Play → Earn XP → Track Spending → Round Up → Invest → Grow
```

---

## ✨ Features

### 🎓 Gamified Financial Learning

Learn important financial concepts through short, easy-to-understand lessons covering topics such as:

* Budgeting
* Saving
* Inflation
* Investing
* Stocks & Bonds
* Risk & Return
* Financial Safety

Users earn **XP** for completing lessons and quizzes.

---

### 🎮 Interactive Finance Games

Make financial education engaging through interactive challenges such as:

* **Money Map** — Build and manage a monthly budget.
* **Risk or Reward** — Understand investment risk.
* **Scam Detector** — Identify common financial scams.

---

### 🔥 XP & Streak System

Users can build consistent financial-learning habits through:

* XP
* Levels
* Daily streaks
* Challenges
* Achievements
* Progress tracking

Example progression:

```text
Level 1 → Money Beginner
Level 2 → Smart Saver
Level 3 → Budget Master
Level 4 → Investment Explorer
Level 5 → Finance Pro
```

---

### 💳 Transaction Round-Ups

FinliT demonstrates how everyday transactions can generate small investment amounts.

For example:

```text
Coffee          ₹87
Round-up        ₹90
Micro-investment ₹3
```

Another example:

```text
Metro           ₹43
Round-up        ₹45
Micro-investment ₹2
```

The accumulated amount can then be allocated to simulated investment portfolios.

> **Note:** The current implementation uses simulated/demo transactions and investments. It does not execute real financial transactions.

---

### 🌱 Student-Friendly Investment Portfolios

Users can explore simulated portfolios such as:

| Portfolio       | Risk   | Expected Return | ESG Score |
| --------------- | ------ | --------------: | --------: |
| Green Future    | Low    |            6.5% |        92 |
| Student Growth  | Medium |            9.0% |        82 |
| Balanced Future | Medium |            8.0% |        75 |

These are **educational simulations**, not real investment products or financial recommendations.

---

### 📊 Portfolio Tracking

Users can monitor:

* Portfolio value
* Investment allocation
* Simulated returns
* Investment performance
* Portfolio distribution

Interactive charts provide a simple visual representation of portfolio growth.

---

### ❤️ Financial Health Score

FinliT evaluates financial-learning and money-management progress using a simulated financial health score.

Example:

```text
Financial Health
78 / 100

Saving            82
Budgeting         75
Investing         64
Financial Safety  91
Knowledge         78
```

The system can then suggest the user's next learning challenge.

---

### 🤖 AI Financial Coach

An AI-powered financial assistant can explain concepts in simple language and answer questions such as:

> "What is inflation?"

> "What's the difference between stocks and bonds?"

> "Why should I diversify?"

The goal is to make financial concepts understandable for beginners.

---

## 🎨 Design

FinliT uses a **premium dark FinTech aesthetic** designed specifically for a younger audience.

The interface combines:

* 🌑 Dark futuristic UI
* 🔴 Red/coral accent colors
* 🪟 Glassmorphism
* ✨ Smooth animations
* 📈 Interactive financial visualizations
* 🎮 Gamified elements
* 📱 Responsive design
* 🧩 Modular UI components

The design focuses on making financial information feel **simple, visual, interactive, and approachable**.

---

## 🛠️ Tech Stack

### Frontend

* **React**
* **TypeScript**
* **Vite**
* **Tailwind CSS**
* **Framer Motion**
* **Recharts**
* **Lucide React**

### Planned Backend

* **Node.js**
* **Express.js**
* **MongoDB**

### Planned Integrations

* Mock Banking API
* Simulated transaction system
* AI Financial Coach
* Payment/investment simulation APIs

---

## 📁 Project Structure

```text
FinliT/
│
├── src/
│   ├── components/
│   ├── sections/
│   ├── data/
│   ├── assets/
│   ├── App.tsx
│   ├── main.tsx
│   └── ...
│
├── public/
│
├── index.html
├── package.json
├── package-lock.json
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Sarvagya-24-chaturvedi/FinliT.git
```

### 2. Navigate to the project

```bash
cd FinliT
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

---

## 🏗️ Production Build

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## 🔮 Future Roadmap

### Phase 1 — Frontend

* [x] FinTech landing page
* [x] Gamified UI
* [x] Financial dashboard concepts
* [x] Portfolio visualization
* [x] Responsive design

### Phase 2 — Gamification

* [ ] User authentication
* [ ] XP system
* [ ] Levels
* [ ] Streaks
* [ ] Achievements
* [ ] Leaderboards

### Phase 3 — Financial Simulation

* [ ] Mock bank API
* [ ] Transaction categorization
* [ ] Automated round-up engine
* [ ] Simulated investments
* [ ] Portfolio management

### Phase 4 — AI

* [ ] AI Financial Coach
* [ ] Personalized learning recommendations
* [ ] Adaptive difficulty
* [ ] Financial-literacy assessment

### Phase 5 — Advanced Features

* [ ] ESG-focused investment simulations
* [ ] Personalized financial health score
* [ ] Spending insights
* [ ] Notifications
* [ ] Advanced analytics

---

## 🔐 Financial Safety

FinliT is an **educational project**.

The investment functionality is intended for **simulation and financial-literacy education** and does not currently execute real investments, provide financial advice, or manage real user funds.

Any future financial integrations would require appropriate security, compliance, authentication, and regulatory considerations.

---

## 🎯 Target Users

FinliT is primarily designed for:

* College students
* Young adults
* First-time investors
* Gen Z users
* Financial-literacy beginners

---

## 💡 Core Concept

FinliT is built around one simple idea:

> **Financial education shouldn't feel like studying.**

Instead of asking users to read complicated financial documents, FinliT turns learning into an interactive cycle:

```text
             ┌─────────────┐
             │    LEARN    │
             └──────┬──────┘
                    ↓
             ┌─────────────┐
             │    PLAY     │
             └──────┬──────┘
                    ↓
             ┌─────────────┐
             │  EARN XP    │
             └──────┬──────┘
                    ↓
             ┌─────────────┐
             │   ROUND UP  │
             └──────┬──────┘
                    ↓
             ┌─────────────┐
             │    INVEST   │
             └──────┬──────┘
                    ↓
             ┌─────────────┐
             │    TRACK    │
             └──────┬──────┘
                    │
                    └──────→ LEARN
```

---

## 👨‍💻 Author

**Sarvagya Chaturvedi**

---

## 📜 License

This project is intended for educational, demonstration, and hackathon purposes.

Add an appropriate open-source license before distributing the project publicly.
