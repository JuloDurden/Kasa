import { useState } from 'react';
import './Collapse.scss';
import Arrow from '../../assets/arrow.png';

function Collapse({ title, text }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <div className={`collapse__bar ${isOpen ? 'open' : ''}`} onClick={handleToggle}>
        <h2 className="collapse__bar--title">{title}</h2>
        <img className="collapse__bar--arrow" src={Arrow} alt="" />
      </div>
      <p className={`collapse__description ${isOpen ? 'open' : ''}`} >{text}</p>
    </div>
  );
}

export default Collapse;
