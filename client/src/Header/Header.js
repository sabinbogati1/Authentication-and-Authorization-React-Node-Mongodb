import React from 'react'
import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/signup/admin'>SignUp For Admin</Link></li>
        <li><Link to='/signup/client'>SignUp for Client</Link></li>
        <li><Link to='/signup/serviceProvider'>SignUp for Service Provider </Link></li>
        <li><Link to='/login'>LOGIN</Link></li>

      </ul>


    </nav>
  </header>
)

export default Header