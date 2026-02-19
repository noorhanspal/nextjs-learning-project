'use client';

import { useEffect, useState } from "react";
import "./style.css";

const RandomJokes = () => {
  const [randomJokes, setRandomJokes] = useState({});
  const [showPunchline, setShowPunchline] = useState(false);
  const [loading, setLoading] = useState(true);

  const URL = "https://official-joke-api.appspot.com/random_joke";

  const fetchRandomJokes = async () => {
    try {
      setLoading(true);
      const res = await fetch(URL);
      const data = await res.json();
      setRandomJokes(data);
      setShowPunchline(false);
      setLoading(false);
    } catch (error) {
      console.log("Error fetching joke:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomJokes();
  }, []);

  return (
    <div className="joke-page">
      <div className="joke-card">
        <h2 className="joke-title">😂 Random Joke Generator</h2>

        {loading ? (
          <p className="loading-text">Loading joke...</p>
        ) : (
          <>
            <p className="joke-setup">{randomJokes.setup}</p>

            {showPunchline && (
              <p className="joke-punchline">
                {randomJokes.punchline}
              </p>
            )}
          </>
        )}

        <div className="btn-group">
          {!showPunchline ? (
            <button onClick={() => setShowPunchline(true)}>
              Reveal
            </button>
          ) : (
            <button onClick={() => setShowPunchline(false)}>
              Hide
            </button>
          )}

          <button onClick={fetchRandomJokes}>
            New Joke
          </button>
        </div>
      </div>
    </div>
  );
};

export default RandomJokes;
