import React from 'react';

const IconicEpisodes = () => {
  const episodes = [
    {
      id: "S01E09",
      title: "Baelor",
      desc: "The moment the world realized no one is safe. Ned Stark’s fate changes the trajectory of the Seven Kingdoms forever.",
      theme: "The Sacrifice"
    },
    {
      id: "S02E09",
      title: "Blackwater",
      desc: "A massive naval assault on King’s Landing illuminated by the haunting green glow of wildfire.",
      theme: "The Siege"
    },
    {
      id: "S03E09",
      title: "The Rains of Castamere",
      desc: "A wedding turned massacre. The North remembers the betrayal at House Frey that shattered the Stark rebellion.",
      theme: "The Betrayal"
    },
    {
      id: "S05E08",
      title: "Hardhome",
      desc: "Jon Snow witnesses the true power of the Night King as the dead rise in an overwhelming silent wave.",
      theme: "The Arrival"
    },
    {
      id: "S06E09",
      title: "Battle of the Bastards",
      desc: "The most cinematic clash in television history. Jon Snow and Ramsay Bolton fight for the soul of Winterfell.",
      theme: "The Reclamation"
    }
  ];

  const gold = '#D4AF37';

  return (
    <section style={{ padding: '60px 20px', backgroundColor: '#050505' }}>
      <h2 style={{ 
        textAlign: 'center', 
        color: gold, 
        fontFamily: 'serif', 
        fontSize: '2.5rem', 
        letterSpacing: '2px',
        marginBottom: '40px'
      }}>
        Legendary Chapters
      </h2>

      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        {episodes.map((ep, index) => (
          <div key={index} style={{
            display: 'flex',
            marginBottom: '30px',
            borderLeft: `3px solid ${gold}`,
            padding: '20px',
            backgroundColor: '#111',
            borderRadius: '0 12px 12px 0',
            boxShadow: '0 4px 10px rgba(0,0,0,0.5)',
            transition: 'transform 0.2s ease'
          }}>
            {/* Episode Tag */}
            <div style={{ 
              minWidth: '100px', 
              color: gold, 
              fontWeight: 'bold', 
              fontSize: '0.9rem',
              fontFamily: 'monospace' 
            }}>
              {ep.id}
            </div>

            {/* Content */}
            <div style={{ marginLeft: '20px' }}>
              <h3 style={{ 
                margin: '0 0 8px 0', 
                color: '#fff', 
                fontSize: '1.4rem', 
                fontFamily: 'serif' 
              }}>
                {ep.title} <span style={{ color: '#666', fontSize: '0.9rem', fontStyle: 'italic' }}>— {ep.theme}</span>
              </h3>
              <p style={{ margin: 0, color: '#ccc', lineHeight: '1.6', fontSize: '1.05rem' }}>
                {ep.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default IconicEpisodes;