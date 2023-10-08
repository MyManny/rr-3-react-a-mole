import React, { useState } from 'react';
import Mole from './Mole'; 
import EmptySlot from './EmptySlot'; 
import './App.css';

function MoleContainer({ score, setScore }) {
  
  const [displayMole, setMoleDisplay] = useState(false);

  
  const handleClick = () => {
    setScore(score + 1); 
    setMoleDisplay(false); 
  };

  
  return (
    <div className="mole-container" onClick={handleClick}>
      {displayMole ? <Mole /> : <EmptySlot />}
    </div>
  );
}

export default MoleContainer;
