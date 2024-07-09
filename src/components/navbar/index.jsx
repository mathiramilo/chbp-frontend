import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { useAuth, useCart } from '../../hooks'
import Button from '../button'
import UserModal from '../userModal'
import Logo from '../logo'

import './styles.css'

const Navbar = () => {
  const { productsQty } = useCart()
  const { user, setUser, setToken } = useAuth()

  const [modalOpen, setModalOpen] = useState(false)

  const handleLogout = () => {
    setUser(null)
    setToken(null)
  }

  return (
    <>
      <header className="navbar-container">
        <div className="navbar">
          <div className="navbar__top">
            <div className="navbar__logo">
              <Link to="/">
                <Logo width={144} />
              </Link>
            </div>
            <div className="navbar__links">
              <Link to="/nike">
                <button className="navbar-links__item">Nike</button>
              </Link>
              <Link to="/adidas">
                <button className="navbar-links__item">Adidas</button>
              </Link>
              <Link to="/puma">
                <button className="navbar-links__item">Puma</button>
              </Link>
            </div>
            <div className="navbar__buttons">
              {user ? (
                <>
                  <Link to="/cart">
                    <button className="navbar-buttons__item">
                      <small>{productsQty}</small>
                      <span className="material-symbols-rounded">shopping_cart</span>
                    </button>
                  </Link>
                  <button
                    className="navbar-buttons__item"
                    onClick={() => setModalOpen(true)}
                  >
                    <span className="material-symbols-rounded">account_circle</span>
                  </button>
                  <button
                    className="navbar-buttons__item"
                    onClick={handleLogout}
                  >
                    <span className="material-symbols-rounded">logout</span>
                  </button>
                </>
              ) : (
                <Link to="/login">
                  <Button text="Login/Signup" />
                </Link>
              )}
            </div>
          </div>
          <div className="navbar__links mobile">
            <Link to="/nike">
              <button className="navbar-links__item">Nike</button>
            </Link>
            <Link to="/adidas">
              <button className="navbar-links__item">Adidas</button>
            </Link>
            <Link to="/puma">
              <button className="navbar-links__item">Puma</button>
            </Link>
          </div>
        </div>
      </header>

      <UserModal
        open={modalOpen}
        setOpen={setModalOpen}
        user={user}
        handleLogout={handleLogout}
      />
    </>
  )
}

export default Navbar
