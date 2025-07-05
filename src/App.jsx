import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [apis, setApis] = useState([]);
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    fetch("https://api.publicapis.org/entries")
      .then((res) => res.json())
      .then((data) => {
        setApis(data.entries.slice(0, 10)); // demo subset
        setLoading(false);
      });
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("light");
  };

  return (
    <div className={`App ${darkMode ? "dark" : "light"}`}>
      <header>
        <h1>🪦 DeadPixel by GeeksForCode</h1>
        <p>Tracking dying APIs, domains, and more — in real time.</p>
        <button onClick={toggleDarkMode}>
          {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>
      </header>

      {loading ? (
        <p className="loading">Loading APIs...</p>
      ) : (
        <main>
          <h2>Most Sus APIs</h2>
          <ul>
            {apis.map((api, idx) => (
              <li key={idx}>
                <strong>{api.API}</strong> — {api.Description}
                <br />
                <a href={api.Link} target="_blank" rel="noreferrer">
                  Visit API
                </a>
              </li>
            ))}
          </ul>
        </main>
      )}

      <footer>
        <p>
          Made with 💀 by <strong>GeeksForCode</strong> • 2025
        </p>
      </footer>
    </div>
  );
}

export default App;

