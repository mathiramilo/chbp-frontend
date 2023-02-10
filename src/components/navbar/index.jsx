import React from 'react'

import Logo from '../logo'
import './styles.css'

const Navbar = () => {
  return (
    <header className="navbar-container">
      <div className="navbar">
        <div className="navbar__top">
          <div className="navbar__logo">
            <Logo width={144} />
          </div>
          <div className="navbar__links">
            <button className="navbar-links__item">Nike</button>
            <button className="navbar-links__item">Adidas</button>
            <button className="navbar-links__item">Puma</button>
          </div>
          <div className="navbar__buttons">
            <button className="navbar-buttons__item">
              <span className="material-symbols-rounded">shopping_cart</span>
            </button>
            <button className="navbar-buttons__item">
              <span className="material-symbols-rounded">account_circle</span>
            </button>
            <button className="navbar-buttons__item">
              <span className="material-symbols-rounded">logout</span>
            </button>
          </div>
        </div>
        <div className="navbar__links mobile">
          <button className="navbar-links__item">Nike</button>
          <button className="navbar-links__item">Adidas</button>
          <button className="navbar-links__item">Puma</button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
