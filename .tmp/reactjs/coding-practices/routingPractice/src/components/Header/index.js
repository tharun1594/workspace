import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="bg">
    <div className="nav-header">
      <div className="nav-title">
        <img
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png "
          className="image"
          alt="wave"
        />
        <h1 className="title">Wave</h1>
      </div>
      <ul className="nav-items">
        <li>
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </div>
)

export default Header
