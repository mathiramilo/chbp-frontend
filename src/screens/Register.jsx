import { useState } from 'react'
import { Link } from 'react-router-dom'
import { PhoneInput, AuthorGithub, Button, Input, Logo } from '../components'
import './Register.css'

const Register = () => {
  const [user, setUser] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    repeatPassword: ''
  })
  const [phone, setPhone] = useState()

  return (
    <div className="register-screen">
      <div className="rs-container">
        <div className="rs-left">
          <div className="rs-left-container">
            <header className="rs-left-header">
              <h2 className="rs-left-header__heading">Welcome to</h2>
              <Logo width="168" />
              <p className="rs-left-header__text">
                Create an account to start looking for fashionable footwear
              </p>
            </header>

            <form className="rs-left-form">
              <div className="rs-left-form__input-group">
                <Input icon="badge" type="text" placeholder="Full Name" />
                <PhoneInput value={phone} setValue={setPhone} />
                <Input icon="person_2" type="email" placeholder="Email" />
                <Input icon="lock" type="password" placeholder="Password" />
                <Input
                  icon="repeat"
                  type="password"
                  placeholder="Repeat Password"
                />
              </div>
              <Button text="Sign Up" variant="principal" />
            </form>

            <div className="rs-left-footer">
              <span className="rs-left-footer__text">
                Already have an account?
              </span>
              <Link to="/login">
                <span className="rs-left-footer__link">Sign In Now</span>
              </Link>
            </div>

            <div className="rs-left-separator">
              <div className="rs-left-separator__bar"></div>
              <span className="rs-left-separator__text">Or</span>
              <div className="rs-left-separator__bar"></div>
            </div>

            <div className="rs-left-social">
              <p className="rs-left-social__text">Continue with social media</p>
              <div className="rs-left-social__options">
                <button className="rs-left-social__item">
                  <i className="fa-brands fa-facebook-f facebook-icon"></i>
                </button>
                <button className="rs-left-social__item">
                  <i className="fa-brands fa-twitter twitter-icon"></i>
                </button>
                <button className="rs-left-social__item">
                  <i className="fa-brands fa-google google-icon"></i>
                </button>
                <button className="rs-left-social__item">
                  <i className="fa-brands fa-linkedin-in linkedin-icon"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="rs-right">
          <div className="rs-right-container">
            <div className="rs-right-content">
              <Logo variant="white" width="216" />
              <p className="rs-right-content__text">
                At CHBP we look for footwear that is fashionable for you, so our
                customers know that buying here they will not be disappointed.
                We invite you to look at our catalog!
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer className="rs-footer">
        <AuthorGithub />
      </footer>
    </div>
  )
}

export default Register
