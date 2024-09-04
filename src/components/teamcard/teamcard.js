import React from 'react';
import './teamcard.css'
import github from'./github.svg'
import linkedin from'./linkedin.svg'

const TeamCard = ({ imageSrc, title, role, description }) => {
  return (
    <div className="card-team" data-testid="card-team">
      <img src={imageSrc} alt={title} className="card-team-image" />
      <div className="card-team-redes">
        <img src={github}/>
        <img src={linkedin}/>
      </div>
      <h2 className="card-team-title">{title}</h2>
      <h2 className="card-team-role">{role}</h2>
      <p className="card-team-description">{description}</p>
    </div>
  );
};

export default TeamCard;