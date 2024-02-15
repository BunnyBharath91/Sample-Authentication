import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="header-container">
    <ul className="header-list">
      <Link to="/">
        <li className="header-item">Home</li>
      </Link>
      <Link to="/about">
        <li className="header-item">About</li>
      </Link>
    </ul>
  </nav>
)

export default Header
