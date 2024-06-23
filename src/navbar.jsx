import { NavLink } from 'react-router-dom';
import logo from './assets/portfolio.png';
import menu from './assets/menu.png';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
function Navbar() {
  function toggle() {
    document.querySelector(".navbar").classList.toggle("responsive-nav"); 
  }
  return (
    <header>
      <nav className="navbar">
        <div className="logo" >
          <img src={logo} alt="logo" width="10" height="5"/>
        </div>
        <div className="menu">
          <ul>
            <li>
              <NavLink exact to="/" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="active">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/education" activeClassName="active">
                Education
              </NavLink>
            </li>
            <li>
              <button className="connect"><a href='https://www.linkedin.com/in/sreehari-sanjeev-a657551a9/' target='_blank'>Connect</a>
              
              </button>
            </li>
          </ul>
        </div>
        <a href="javascript:void(0);" className="icon" onClick={toggle}>
        <GiHamburgerMenu />
        </a>
        <a href="javascript:void(0);" className="iconx" onClick={toggle}>
        <IoMdClose />
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
