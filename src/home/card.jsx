
import React from 'react';

function Card({ title, details, link}) {
  return (
    <div className="card">
      <div className="details">
        <h2>{title}</h2>
        <p>{details}</p>
      </div>
      <button className="checkbutton"><a href={link} target='_blank'>Check Out!</a></button>
    </div>
  );
}

export default Card;
