# 🧠 DeadPixel — Real-Time Internet Death Tracker with AI Assistance
 “DeadPixel lets you know what’s broken on the web — and explains *why* using AI. All in one click, no backend, and retro vibes. It’s internet observability with attitude.”
 “Even the internet has a pulse. DeadPixel is the stethoscope.”

DeadPixel is a **real-time API failure tracker and visual monitor** built for developers, hackers, and sysadmins who want to know — *what’s alive and what’s dying?* With **zero backend**, 26+ APIs, blazing performance, and a toggleable **AI Assistant powered by GPT**, this app is your sleek one-page monitoring radar.

---

## 🔥 Live UI Screenshots

### 💻 Dashboard Preview

![DeadPixel Screenshot 1](https://github.com/Chinmayykashyap-git/DeadPixel/blob/4ebd567ef11a8ee50b8ecf1478df75f80fee5eb9/Screenshot%202025-07-05%20032938.png)

### 📊 API Status Cards

![DeadPixel Screenshot 2](https://github.com/Chinmayykashyap-git/DeadPixel/blob/4ebd567ef11a8ee50b8ecf1478df75f80fee5eb9/Screenshot%202025-07-05%20032955.png)

### 🧠 AI Insights for API Errors

![DeadPixel Screenshot 3](https://github.com/Chinmayykashyap-git/DeadPixel/blob/4ebd567ef11a8ee50b8ecf1478df75f80fee5eb9/Screenshot%202025-07-05%20033009.png)

---

## 🚀 Features

### ✅ Real-Time API Monitoring

* Pings **26+ live APIs** from different services: weather, news, IP, holidays, cats, NASA, jokes, tacos, and more.
* Tracks:

  * ✅ Status (`Alive` or `Dead`)
  * ⏱️ Response Time
  * 🔢 HTTP Code

### ✅ AI Assistance via OpenAI

* Toggle **AI Assistance** to analyze errors in real time using `GPT-3.5 Turbo`
* If an API fails, the AI gives a plain-language explanation and fix (e.g. invalid API key, endpoint expired, etc.)
* Uses **OpenAI’s chat completions endpoint** directly from frontend — no server needed

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
* Use the **"Use AI Assistance"** checkbox to enable/disable GPT explanations

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

* ✅ Vercel (Recommended)
* ✅ Netlify
* ✅ GitHub Pages (via `gh-pages` branch)


## 👨‍💻 Built By

**GeeksForCode**
Call2Code Hackathon 2025 Finalist
AI-Enhanced Monitoring Champion 🧠
