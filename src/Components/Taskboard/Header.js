import React from 'react';
import {Link} from 'react-router-dom'
const Header = () => {
    const randomNumber = Math.floor(Math.random()*101);
    return (
        <div className="navbar">
      <div className="navbar-logo">TASK BOARD</div>
      <div className="navbar-links">
        <Link to={"/calculator"}>
        <p className='nav-links-text'>Calculator</p>
        </Link>
        <Link to={"/taskboard"}>
        <p className='nav-links-text'>Taskboard</p>
        </Link>
        <Link to={"/weather"}>
        <p className='nav-links-text'>Weather</p>
        </Link>
      </div>
      <div className="profile-photo">
        <img src={`https://picsum.photos/id/${randomNumber}/1631/1102`} alt="Profile" />
      </div>
    </div>
    )
}

export default Header;