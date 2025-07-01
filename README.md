# 🚀 CryptoVerse - Cryptocurrency Dashboard

CryptoVerse is a modern cryptocurrency dashboard built using **React + Vite**. It allows users to track real-time cryptocurrency data, view interactive charts, and (soon) read the latest crypto-related news.

---

## 🚧 In Progress: News Feature

Currently working on integrating the **crypto news** feature.

The backend service for fetching news articles (via NewsAPI) is being deployed separately, since the frontend currently attempts to fetch from `localhost:5000`, which doesn’t work on production (Vercel).

✅ **Fix in progress**:
- Backend will be deployed to a cloud platform (e.g., Render)
- Frontend will fetch news from the new production API endpoint

---

## 🔧 Tech Stack

- **Frontend**: React, Vite, Tailwind CSS
- **State Management**: React Hooks
- **APIs**: Coinranking API (for crypto data), NewsAPI (for news)
- **Hosting**: Vercel (Frontend)

---

## ⚙️ Features

- 🌐 View top cryptocurrencies with price, market cap, and volume
- 📈 Detailed coin information and interactive price history charts
- 📰 News section with latest crypto articles *(in progress)*
- 🔍 Search functionality for quick coin lookup

---

## 📌 Status

> The core dashboard is live and functional.  
> News integration backend is under development.

---

## 📄 License

MIT
