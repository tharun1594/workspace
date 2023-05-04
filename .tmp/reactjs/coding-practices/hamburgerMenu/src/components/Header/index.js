// Write your code here
import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'
import {Link} from 'react-router-dom'

import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

import './index.css'

const overlayStyles = {
  backgroundColor: '#ffff',
}

const Header = () => (
  <nav className="navbar">
    <div>
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
          className="logo"
        />
      </Link>
    </div>
    <Popup
      modal
      trigger={
        <button data-testid="hamburgerIconButton">
          <GiHamburgerMenu />
        </button>
      }
      className="popup-content"
      overlayStyle={overlayStyles}
    >
      {close => (
        <div className="main-popup">
          <button
            onClick={() => close()}
            data-testid="closeButton"
            className="closeicon"
          >
            <IoMdClose />
          </button>

          <ul>
            <li>
              <Link to="/" className="nav-link">
                <AiFillHome />
                <h1>Home</h1>
              </Link>
            </li>

            <li>
              <Link to="/about" className="nav-link">
                <BsInfoCircleFill />
                <h1>About</h1>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </Popup>
  </nav>
)

export default Header
