import React, { useEffect, useState } from 'react';
import VideoBackground from './components/VideoBackground';
import './App.css';
import Navbar from './components/Navbar';
import Characters from './components/Characters';
import Map from './components/Map';
import Families from './components/Families';
import IconicEpisodes from './components/IconicEpisodes';

function App() {
  const [route, setRoute] = useState(() => {
    const hash = window.location.hash || '#/';
    return hash.replace('#/', '') || '';
  });

  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash || '#/';
      setRoute(hash.replace('#/', '') || '');
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const renderPage = () => {
    switch (route) {
      case 'characters':
        return (
          <section className="section">
            <h2>Notable Characters</h2>
            <Characters />
          </section>
        );
      case 'maps':
        return (
          <section className="section">
            <h2>Maps</h2>
            <Map />
          </section>
        );
      case 'families':
        return (
          <section className="section">
            <Families />
          </section>
        );
      case 'episodes':
        return (
          <section className="section">
            <IconicEpisodes/>
          </section>
        );
      case 'about':
        return (
          <section className="section about-section">
            <h2>About Westeros</h2>
            <p>
              Step into the world of <span>Game of Thrones</span> — a land shaped by
              power, loyalty, betrayal, and fire. This fan-made website brings together
              the most unforgettable characters, noble houses, and legendary locations
              that defined the battle for the Iron Throne.
            </p>
            <p>
              Explore detailed sections on characters, families, maps, and episodes,
              and relive the moments that made the realm of Westeros unforgettable.
              Choose your path using the navigation above and let the story unfold.
            </p>
          </section>

        );
      default:
        return (
          <section className="section home-hero">

              {/* Floating embers */}
              <div className="embers" aria-hidden="true">
                {Array.from({ length: 12 }).map((_, i) => (
                  <span key={i}></span>
                ))}
              </div>

              {/* Title */}
              <h1 className="ancient-title">Game of Thrones</h1>

              {/* Quote */}
              <div className="hero-quote">
                <blockquote>
                  “A mind needs books as a sword needs a whetstone,
                  if it is to keep its edge.”
                </blockquote>
                <cite>— Tyrion Lannister</cite>
              </div>

          </section>

        );
    }
  };

  return (
    <div className="App">
      <VideoBackground />
      <Navbar />
      <main className="content">{renderPage()}</main>
    </div>
  );
}

export default App;
