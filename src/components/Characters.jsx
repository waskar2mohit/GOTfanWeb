import React from 'react';
import '../styles/Characters.css';

// Place portrait stills in public/characters with these filenames
// e.g., public/characters/jon.jpg, public/characters/daenerys.jpg, etc.
const characters = [
  {
    name: 'Eddard (Ned) Stark',
    title: 'Lord of Winterfell',
    house: 'House Stark',
    img: '/characters/ned.jpg',
  },
  {
    name: 'Daenerys Targaryen',
    title: 'Mother of Dragons',
    house: 'House Targaryen',
    img: '/characters/daenerys.jpg',
  },
  {
    name: 'Tyrion Lannister',
    title: 'Hand of the Queen',
    house: 'House Lannister',
    img: '/characters/tyrion.jpg',
  },
  {
    name: 'Jon Snow',
    title: 'Lord Commander',
    house: 'Night\'s Watch',
    img: '/characters/jon.jpg',
  },
  {
    name: 'Cersei Lannister',
    title: 'Queen Regent',
    house: 'House Lannister',
    img: '/characters/cersei.jpg',
  },
  {
    name: 'Jaime Lannister',
    title: 'Ser of the Kingsguard',
    house: 'House Lannister',
    img: '/characters/jaime.jpg',
  },
  {
    name: 'Ramsay Bolton',
    title: 'Lord of Winterfell',
    house: 'House Bolton',
    img: '/characters/ramsay.jpg',
  },
  {
    name: 'Arya Stark',
    title: 'No One (Faceless Student)',
    house: 'House Stark',
    img: '/characters/arya.jpg',
  },
  {
    name: 'Jorah Mormont',
    title: 'Exiled Knight, Advisor to Daenerys',
    house: 'House Mormont',
    img: '/characters/jorah.jpg',
  },
];

const Characters = () => {
  return (
    <div className="characters-grid">
      {characters.map((c) => (
        <article key={c.name} className="character-card">
          <div className="card-header">
            <h3 className="card-name">{c.name}</h3>
            <div className="card-meta">
              <span className="card-title">{c.title}</span>
              <span className="card-house">{c.house}</span>
            </div>
          </div>
          <img className="card-image" src={c.img} alt={c.name} />
        </article>
      ))}
    </div>
  );
};

export default Characters;



