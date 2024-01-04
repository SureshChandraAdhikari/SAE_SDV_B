import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Make sure your CSS file path is correct
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'; // Import individual icons
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faImages } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'; 
const Navbar = () => {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (position) => {
    const margin = 37;
    const containerWidth = document.querySelector('.bottom-nav').getBoundingClientRect().width;
    const maxLeftPosition = containerWidth - 50; // Assuming slider width is 50px
    const left = Math.min(position.left + margin, maxLeftPosition);
    setActiveItem(left);
  };

  return (
    <div>
      <ul className="bottom-nav">
        <div className="slider" style={{ left: activeItem }}></div>
        <li>
          <Link to="/" onClick={(e) => handleItemClick(e.target.getBoundingClientRect())}>
            <FontAwesomeIcon icon={faHome} />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link to="/About" onClick={(e) => handleItemClick(e.target.getBoundingClientRect())}>
            <FontAwesomeIcon icon={faInfoCircle} />
            <span>About</span>
          </Link>
        </li>
        <li>
          <Link
            to="/components"
            className={activeItem === null ? 'active-icon' : ''}
            onClick={(e) => handleItemClick(e.target.getBoundingClientRect())}
          >
            <FontAwesomeIcon icon={faCheckSquare} />
            <span>Components</span>
          </Link>
        </li>
        <li>
          <Link to="/Gallery" onClick={(e) => handleItemClick(e.target.getBoundingClientRect())}>
            <FontAwesomeIcon icon={faImages} />
            <span>Gallery</span>
          </Link>
        </li>
        <li>
          <Link to="/Team" onClick={(e) => handleItemClick(e.target.getBoundingClientRect())}>
            <FontAwesomeIcon icon={faUsers} />
            <span>Team</span>
          </Link>
        </li>
        
      </ul>
    </div>
  );
};

export default Navbar;
