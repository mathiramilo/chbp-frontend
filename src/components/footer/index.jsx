import React from 'react'
import { Link } from 'react-router-dom'

import AuthorGithub from '../authorGithub'
import Logo from '../logo'

import './styles.css'

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer">
        <div className="footer-border"></div>

        <div className="footer-content">
          <div className="footer-content__brand">
            <Logo width={124} />
            <p>
              At CHBP we look for footwear that is fashionable for you, so our customers know that buying here they will
              not be disappointed. We invite you to look at our catalog!
            </p>
          </div>

          <div className="footer-content__item project-info">
            <h3>Project Information</h3>
            <p>
              Final project of the Coderhouse backend course. The backend is developed in Node JS and Express, using
              MongoDB as a database. Frontend with React.
            </p>
          </div>

          <div className="footer-content__item">
            <h3>Find Shoes</h3>
            <ul>
              <Link to="/">
                <li>All Shoes</li>
              </Link>
              <Link to="/nike">
                <li>Nike</li>
              </Link>
              <Link to="/adidas">
                <li>Adidas</li>
              </Link>
              <Link to="/puma">
                <li>Puma</li>
              </Link>
            </ul>
          </div>

          <div className="footer-content__item">
            <h3>More Info</h3>
            <ul>
              <li>
                <a href="https://github.com/mathiramilo/CHBP-Frontend" target="_blank" rel="noreferrer">
                  Github
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/mathias-ramilo" target="_blank" rel="noreferrer">
                  Linkedin
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-author">
          <AuthorGithub />
        </div>
      </div>
    </footer>
  )
}

export default Footer
