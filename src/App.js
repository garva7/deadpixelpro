import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import './App.css';
import translations from './translations';

const glitchyScript = [
  "Welcome to DeadPixel — Real-time internet death tracker.",
  "Check back often — things die fast around here.",
  "Each dead API gets a status code.",
];

const monitoredAPIs = [
  { name: 'OpenWeatherMap', url: 'https://api.openweathermap.org/data/2.5/weather?q=London&appid=INVALID_KEY' },
  { name: 'NewsAPI', url: 'https://newsapi.org/v2/top-headlines?country=us&apiKey=INVALID_KEY' },
  { name: 'HTTPBin', url: 'https://httpbin.org/status/200' },
  { name: 'Example Domain', url: 'https://example.com' },
  { name: 'CoinGecko', url: 'https://api.coingecko.com/api/v3/ping' },
  { name: 'Public APIs', url: 'https://api.publicapis.org/entries' },
  { name: 'Nager.Date', url: 'https://date.nager.at/api/v3/PublicHolidays/2025/US' },
  { name: 'IPify', url: 'https://api.ipify.org?format=json' },
  { name: 'Cat Facts', url: 'https://catfact.ninja/fact' },
  { name: 'JokeAPI', url: 'https://v2.jokeapi.dev/joke/Any' },
  { name: 'BoredAPI', url: 'https://www.boredapi.com/api/activity' },
  { name: 'Advice Slip', url: 'https://api.adviceslip.com/advice' },
  { name: 'Genderize', url: 'https://api.genderize.io?name=luc' },
  { name: 'Agify', url: 'https://api.agify.io?name=luc' },
  { name: 'Nationalize', url: 'https://api.nationalize.io?name=luc' },
  { name: 'The Cat API', url: 'https://api.thecatapi.com/v1/images/search' },
  { name: 'Dog API', url: 'https://dog.ceo/api/breeds/image/random' },
  { name: 'PokeAPI', url: 'https://graphql-pokeapi.vercel.app/api/graphql' },
  { name: 'Giphy API', url: 'https://api.giphy.com/v1/gifs/search?q=funny&api_key=INVALID_KEY' },
  { name: 'Open Trivia', url: 'https://opentdb.com/api.php?amount=1' },
  { name: 'TacoFancy API', url: 'https://taco-randomizer.herokuapp.com/random/' },
  { name: 'NASA APOD', url: 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY' },
  { name: 'Kanye Rest', url: 'https://api.kanye.rest' },
  { name: 'YesNo API', url: 'https://yesno.wtf/api' },
  { name: 'IP GeoLocation', url: 'https://ipwho.is/' },
  { name: 'Deck of Cards', url: 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1' },
];

const getCurrentTime = () =>
  new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

export default function App() {
  const [apiStatus, setApiStatus] = useState([]);
  const [glitchyStep, setGlitchyStep] = useState(0);
  const [lang, setLang] = useState('en');
  const [timeline, setTimeline] = useState([]);

  // ✅ Memoize translation function
  const t = useCallback((key) => translations[lang][key] || key, [lang]);

  const toggleTheme = () => {
    document.body.classList.toggle('light');
  };

  const toggleLanguage = () => {
    setLang((prevLang) => (prevLang === 'en' ? 'hi' : 'en'));
  };

  // ✅ Memoized API checker
  const checkAPIs = useCallback(async () => {
    setTimeline(prev => [...prev, {
      time: getCurrentTime(),
      event: `${t('checking')} ${monitoredAPIs.length} APIs...`,
    }]);

    const results = await Promise.all(
      monitoredAPIs.map(async (api) => {
        try {
          const res = await axios.get(api.url);
          return { name: api.name, status: 'Alive', code: res.status };
        } catch (err) {
          return {
            name: api.name,
            status: 'Dead',
            code: err.response?.status || 'No Response',
          };
        }
      })
    );

    setApiStatus(results);

    setTimeline(prev => [...prev, {
      time: getCurrentTime(),
      event: t('apiCheckComplete'),
    }]);
  }, [t]);

  useEffect(() => {
    checkAPIs();
    const interval = setInterval(() => checkAPIs(), 15000);
    return () => clearInterval(interval);
  }, [checkAPIs]);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchyStep((prev) => (prev + 1) % glitchyScript.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <h1 className="title-glow">DeadPixel</h1>
      <p className="chat-box">Glitchy: {glitchyScript[glitchyStep]}</p>

      <div className="btn-group">
        <button onClick={checkAPIs}>{t('manualRefresh')}</button>
        <button onClick={toggleLanguage}>
          🌐 {lang === 'en' ? 'हिंदी' : 'EN'}
        </button>
      </div>

      <label className="theme-switch">
        <input type="checkbox" onChange={toggleTheme} />
        <span className="slider"></span>
      </label>

      <div className="status">
        {apiStatus.map((api) => (
          <div
            key={api.name}
            className={`card ${api.status === 'Dead' ? 'dead' : 'alive'}`}
          >
            <h3>{api.name}</h3>
            <p>{api.status === 'Dead' ? t('dead') : t('alive')}</p>
            <small>{t('code')}: {api.code}</small>
          </div>
        ))}
      </div>

      <div className="timeline">
        <h3>🕒 {t('timelineLog')}</h3>
        {timeline.map((item, index) => (
          <div key={index} className="timeline-item">
            <span className="time">{item.time}</span>
            <span className="event">{item.event}</span>
          </div>
        ))}
      </div>

      <footer>
        <p>{t('builtBy')} <strong>GeeksForCode</strong> • 2025</p>
      </footer>
    </div>
  );
}































