# 🧠 DeadPixel — Real-Time Internet Death Tracker with AI Assistance
 “DeadPixel lets you know what’s broken on the web — and explains *why* using AI. All in one click, no backend, and retro vibes. It’s internet observability with attitude.”
 “Even the internet has a pulse. DeadPixel is the stethoscope.”

DeadPixel is a **real-time API failure tracker and visual monitor** built for developers, hackers, and sysadmins who want to know — *what’s alive and what’s dying?* With **zero backend**, 26+ APIs, blazing performance, and a toggleable **AI Assistant powered by GPT**, this app is your sleek one-page monitoring radar.

---

## 🔥 Live UI Screenshots

### 💻 Dashboard Preview

![DeadPixel Screenshot 1](https://github.com/Chinmayykashyap-git/DeadPixel/blob/c7d46e0f6c686d412e465b75b9b8a959759f8bba/Screenshot%202025-07-05%20225300.png)

### 📊 API Status Cards

![DeadPixel Screenshot 2](https://github.com/Chinmayykashyap-git/DeadPixel/blob/06b5394507fbb73bd9c2019b55eb41f4e944eea1/Screenshot%202025-07-05%20225425.png)

### 🧠 AI Insights for API Errors

![DeadPixel Screenshot 3](https://github.com/Chinmayykashyap-git/DeadPixel/blob/06b5394507fbb73bd9c2019b55eb41f4e944eea1/Screenshot%202025-07-05%20225448.png)



## 📌 Problem Statements

### ✅ Round 1: Ideation + Early Prototype

> **Challenge**: “Solve a real-world problem using at least 3 public APIs.”  
> We were asked to ideate, prototype, and explain a solution that uses real-world API data in a novel and meaningful way.

### ✅ Round 2: Feature Expansion + Final Deployment

> **Challenge**: “Add creative features like dark mode, multilingual support, animated UI, fallback systems, etc., and present the final polished app.”

---

## 💡 Our Solution: DeadPixel

**DeadPixel** is a real-time internet death tracker that constantly monitors the health/status of popular public APIs. It checks if an API is "Alive" or "Dead", logs results on a glitchy animated timeline, and even provides multilingual feedback in Hindi and English — making API monitoring accessible, fun, and functional for developers and enthusiasts alike.

---

## ✨ Features Implemented

| Feature                         | Description                                                                 |
|----------------------------------|-----------------------------------------------------------------------------|
| ✅ **API Monitoring**           | Checks 25+ public APIs every 15 seconds using `axios`.                      |
| ✅ **Live Status Cards**        | Visually display which APIs are alive (✅) or dead (❌).                     |
| ✅ **Manual Refresh**           | Button to instantly re-check all APIs.                                     |
| ✅ **Multilingual Support**     | Toggle between English and Hindi in real-time (localization from `translations.js`). |
| ✅ **Dynamic Theming**          | Toggle between Dark Mode (default) and Light Mode via a custom switch.     |
| ✅ **Glitchy Animated UI**      | Old-school terminal vibes with glitchy messages changing every few seconds.|
| ✅ **Timeline Logging**         | Logs all major user actions (theme switch, API check, language toggle) with timestamps. |
| ✅ **Responsive UI**            | Fully responsive layout for desktop and mobile devices.                     |
| ✅ **Creative 404-ready logic** | Designed to plug into custom routing for future expansions.                |

---

### ✅ No Backend Required

* Entirely powered by **React + Axios**
* Makes real-time API calls **client-side only**
* Uses `.env` for secure API keys like `REACT_APP_OPENAI_KEY`
* No server, database, or hosting cost. Deploy instantly to **Vercel**, **Netlify**, or GitHub Pages

### ✅ Pixel-Perfect Retro UI

* Styled with **Press Start 2P** pixel font (Google Fonts)
* Minimal, terminal-inspired UI
* Optional particle background
* Designed for readability, hacker nostalgia, and fun ⚡

---

## 🧪 API Sources

Some of the APIs monitored:

| API                 | Type           |
| ------------------- | -------------- |
| OpenWeatherMap      | Weather        |
| NewsAPI             | News           |
| NASA APOD           | Astronomy      |
| CoinGecko           | Crypto Ping    |
| Public APIs         | Meta           |
| Cat Facts / Dog API | Fun            |
| IPify               | IP address     |
| Agify / Genderize   | Demographics   |
| Bored API           | Activity ideas |
| Giphy               | GIF search     |

All APIs are monitored for liveness every **60 seconds**.

---

## 🔄 Refresh + Toggle

* Hit the **"Refresh Now"** button to manually recheck all APIs
---

## 🛠️ Tech Stack

| Frontend    | AI                            | Styling                     |
| ----------- | ----------------------------- | --------------------------- |
| React.js    | OpenAI API (GPT-3.5)          | Pure CSS + Google Fonts     |
| Axios       | GPT chat completions endpoint | Pixel font (Press Start 2P) |
| tsparticles |                               | Particle.js (optional)      |

---

## 🤯 Why This Project Wins Without a Backend

* ✅ Purely **client-side**: works from GitHub, Vercel, or even a zip file
* ✅ Makes **live HTTP requests** to real services — no simulation or mock
* ✅ Uses **AI to explain errors** like a support engineer would
* ✅ Fully responsive, intuitive, and interactive
* ✅ **Lightweight**: loads in seconds, works in browser, no deployment complexity

---

## 📦 How to Run Locally

```bash
npm install
REACT_APP_OPENAI_KEY=your_openai_key_here  # add in .env
npm start
```

---

## 🌐 Deployment Ready

You can deploy it on:

* ✅ Vercel (CURRENTLY DEPLOYED ON IT)
* ✅ Netlify (CURRENTLY DEPLOYED ON IT)
* ✅ GitHub Pages (via `gh-pages` branch)


## 👨‍💻 Built By

**GeeksForCode**
Call2Code Hackathon 2025 Finalist
AI-Enhanced Monitoring Champion 🧠
