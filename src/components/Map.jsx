import React, { useMemo, useState } from 'react';
import '../styles/Map.css';
import Slideshow from './Slideshow';

const markersData = [
  {
    id: 'kings-landing',
    name: "King's Landing",
    description: 'Capital of the Seven Kingdoms, seat of the Iron Throne.',
    top: 70,
    left: 61,
  },
  {
    id: 'winterfell',
    name: 'Winterfell',
    description: 'Ancestral seat of House Stark in the North.',
    top: 28,
    left: 52,
  },
  {
    id: 'the-wall',
    name: 'The Wall',
    description: 'A colossal wall of ice protecting the realms of men.',
    top: 10,
    left: 33,
  },
  {
    id: 'braavos',
    name: 'Braavos',
    description: 'Free City famed for the Iron Bank and the Faceless Men.',
    top: 38,
    left: 82,
  },
  {
    id: 'meereen',
    name: 'Meereen',
    description: 'Great city in Slaver\'s Bay, ruled by Daenerys for a time.',
    top: 80,
    left: 86,
  },
  {
    id: 'iron-islands',
    name: 'Iron Islands',
    description: 'Harsh islands home to the seafaring Ironborn.',
    top: 56,
    left: 30,
  },
];

const Map = () => {
  const [activeId, setActiveId] = useState(null);
  const [hoverId, setHoverId] = useState(null);
  const [slideshowFor, setSlideshowFor] = useState(null);
  const hover = useMemo(() => markersData.find(m => m.id === hoverId), [hoverId]);

  const galleries = {
    'winterfell': [
      '/locations/winterfell/1.jpg',
      '/locations/winterfell/2.jpg',
      '/locations/winterfell/3.jpg',
    ],
    'kings-landing': [
      '/locations/kings-landing/1.jpg',
      '/locations/kings-landing/2.jpg',
    ],
    'the-wall': [
      '/locations/the-wall/1.jpg',
      '/locations/the-wall/2.jpg',
    ],
    'braavos': [
      '/locations/braavos/1.jpg',
      '/locations/braavos/2.jpg',
    ],
    'meereen': [
      '/locations/meereen/1.jpg',
      '/locations/meereen/2.jpg',
    ],
    'iron-islands': [
      '/locations/iron-islands/1.jpg',
      '/locations/iron-islands/2.jpg',
    ],
  };

  const handleMapClick = (e) => {
    const img = e.currentTarget.querySelector('.map-image');
    if (!img) return;
    const rect = img.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    // eslint-disable-next-line no-console
    console.log(`Clicked at top: ${y.toFixed(1)}%, left: ${x.toFixed(1)}%`);
  };

  return (
    <div>
      <div className="map-container" onClick={handleMapClick}>
        <img
          className="map-image"
          src="/maps/westeros.jpg"
          alt="Map of Westeros"
          onError={(e) => {
            e.currentTarget.style.background = 'linear-gradient(135deg,#1a1a1a,#2a211a)';
            e.currentTarget.style.minHeight = '360px';
          }}
        />

        {markersData.map((m) => (
          <button
            key={m.id}
            className="map-marker"
            style={{ top: m.top + '%', left: m.left + '%' }}
            onClick={() => {
              setActiveId(m.id);
              if ((galleries[m.id] || []).length > 0) setSlideshowFor(m.id);
            }}
            onMouseEnter={() => setHoverId(m.id)}
            onMouseLeave={() => setHoverId(null)}
            aria-expanded={hoverId === m.id}
            title={m.name}
          >
            {m.name}
          </button>
        ))}

        {hover && (
          <div
            className="map-tooltip"
            style={{ top: hover.top + '%', left: hover.left + '%' }}
          >
            <strong>{hover.name}</strong>
            <div style={{ marginTop: 6 }}>{hover.description}</div>
          </div>
        )}
      </div>

      <div className="map-legend">
        {markersData.map((m) => (
          <span key={m.id} className="legend-item">{m.name}</span>
        ))}
      </div>

      <Slideshow
        isOpen={Boolean(slideshowFor)}
        onClose={() => setSlideshowFor(null)}
        images={galleries[slideshowFor] || []}
        title={markersData.find(m => m.id === slideshowFor)?.name || 'Gallery'}
      />
    </div>
  );
};

export default Map;



