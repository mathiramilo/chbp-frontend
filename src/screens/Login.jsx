import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Logo from '../components/Logo'
import Input from '../components/Input'

const Login = () => {
  return (
    <div className="login-screen">
      <div className="ls-container">
        <div className="ls-left">
          <div className="ls-left-container">
            <header className="ls-left-header">
              <h2 className="ls-left-header__heading">Welcome to</h2>
              <Logo width="256" />
              <p className="ls-left-header__text"></p>
            </header>

            <form className="ls-left-form">
              <div className="ls-left-form__input-group">
                <Input icon="person_2" type="email" placeholder="Email" />
                <Input icon="lock" type="password" placeholder="Password" />
              </div>
              <Button text="Sign In" variant="principal" />
            </form>

            <div className="ls-left-footer">
              <span className="ls-left-footer__text">
                Don't have an account?
              </span>
              <Link to="/register">
                <span className="ls-left-footer__link">Sign Up Now</span>
              </Link>
            </div>

            <div className="ls-left-separator">
              <div className="ls-left-separator__bar"></div>
              <span className="ls-left-separator__text">Or</span>
              <div className="ls-left-separator__bar"></div>
            </div>

            <div className="ls-left-social">
              <p className="ls-left-social__text">Continue with social media</p>
              <div className="ls-left-social__options">
                <button className="ls-left-social__item">
                  <i className="fa-brands fa-facebook-f"></i>
                </button>
                <button className="ls-left-social__item">
                  <i className="fa-brands fa-twitter"></i>
                </button>
                <button className="ls-left-social__item">
                  <i className="fa-brands fa-google"></i>
                </button>
                <button className="ls-left-social__item">
                  <i className="fa-brands fa-linkedin-in"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="ls-right">
          <div className="ls-right-container">
            <div className="ls-right-content">
              <Logo variant="white" width="512" />
              <p className="ls-right-content__text">
                At CHBP we look for footwear that is fashionable for you, so our
                customers know that buying here they will not be disappointed.
                We invite you to look at our catalog!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
