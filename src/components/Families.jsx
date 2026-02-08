import React from 'react';

const Families = () => {
  const houses = [
    { name: "Stark", words: "Winter is Coming", img: "/families/stark.jpg" },
    { name: "Lannister", words: "Hear Me Roar!", img: "/families/lannister.jpg" },
    { name: "Targaryen", words: "Fire and Blood", img: "/families/targaryen.jpg" },
    { name: "Baratheon", words: "Ours is the Fury", img: "/families/baratheon.jpg" },
    { name: "Greyjoy", words: "We Do Not Sow", img: "/families/greyjoy.jpg" },
    { name: "Tyrell", words: "Growing Strong", img: "/families/tyrell.jpg" },
  ];

  // Golden Color Constants
  const gold = '#D4AF37'; 
  const darkGold = '#996515';

  return (
    <div style={{ padding: '40px', backgroundColor: '#0a0a0a', minHeight: '100vh' }}>
      <h2 style={{ 
        textAlign: 'center', 
        color: gold, 
        fontSize: '2.5rem', 
        fontFamily: 'serif',
        textTransform: 'uppercase',
        letterSpacing: '4px',
        marginBottom: '40px',
        borderBottom: `2px solid ${gold}`,
        display: 'inline-block',
        width: '100%'
      }}>
        Great Houses of Westeros
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '30px'
      }}>
        {houses.map((house) => (
          <div key={house.name} className="card" style={{
            border: `2px solid ${gold}`,
            borderRadius: '12px',
            overflow: 'hidden',
            textAlign: 'center',
            backgroundColor: '#111',
            color: 'white',
            boxShadow: `0 4px 15px rgba(212, 175, 55, 0.2)`, // Subtle gold glow
            transition: 'transform 0.3s ease'
          }}>
            <img 
              src={house.img} 
              alt={house.name} 
              style={{ 
                width: '100%', 
                height: '250px', 
                objectFit: 'cover',
                borderBottom: `1px solid ${gold}` 
              }} 
            />
            <div style={{ padding: '20px' }}>
              <strong style={{ 
                fontSize: '1.5rem', 
                display: 'block', 
                color: gold, 
                fontFamily: 'serif',
                marginBottom: '10px'
              }}>
                {house.name}
              </strong>
              <p style={{ 
                fontStyle: 'italic', 
                color: '#e0e0e0',
                fontSize: '1.1rem',
                borderTop: `1px solid ${darkGold}`,
                paddingTop: '10px'
              }}>
                "{house.words}"
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Families;