import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/PlayDetails.css';

function PlayDetails() {
  const location = useLocation();
  const img = location.state.image;
  const name = location.state.name;
  const content = location.state.content;
  const genre = location.state.genre;

  return (
    <div>
      <h2 style={{ color: 'white' }}>{name}</h2>
      <p>{img}</p>
      <p>{content}</p>
      <p>{genre}</p>
      <Link to={`/plays/${name}/seat-select`}>
        <button className="inspect-button">Koltuk Seç</button>
      </Link>
    </div>
    
  );
}

export default PlayDetails;
