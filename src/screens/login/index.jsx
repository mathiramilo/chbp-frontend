import { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { useAuth } from '../../hooks'
import { AuthorGithub, Button, Input, Logo } from '../../components'
import { authServices } from '../../services'

import './styles.css'

const Login = () => {
  const { setUser, setToken } = useAuth()

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const form = useRef(null)

  const navigate = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault()

    const email = form.current.email.value
    const password = form.current.password.value

    if (!email || !password) {
      setError('Please check that all fields are filled in correctly')
      setTimeout(() => setError(null), 5000)
      return
    }

    setLoading(true)

    try {
      const { data } = await authServices.login(email, password)
      setUser(data.user)
      setToken(data.token)
      navigate('/')
    } catch (error) {
      setError(error.message)
      setTimeout(() => setError(null), 5000)
    }

    setLoading(false)
  }

  return (
    <div className="login-screen">
      <div className="ls-container">
        <div className="ls-left">
          <div className="ls-left-container">
            <header className="ls-left-header">
              <h2 className="ls-left-header__heading">Welcome to</h2>
              <Logo width="168" />
              <p className="ls-left-header__text">Log in to see all the amazing shoes that we offer</p>
            </header>

            <form ref={form} className="ls-left-form" onSubmit={handleSubmit}>
              <div className="ls-left-form__input-group">
                <Input name="email" icon="person_2" type="email" placeholder="Email" />
                <Input name="password" icon="lock" type="password" placeholder="Password" />
              </div>

              {error && (
                <div className="rs-left-error">
                  <span className="material-symbols-rounded">error</span>
                  <p className="rs-left-error__text">{error}</p>
                </div>
              )}

              <Button text={loading ? 'Wait a second please...' : 'Sign In'} variant="principal" />
            </form>

            <div className="ls-left-footer">
              <span className="ls-left-footer__text">Don't have an account?</span>
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
                  <i className="fa-brands fa-facebook-f facebook-icon"></i>
                </button>
                <button className="ls-left-social__item">
                  <i className="fa-brands fa-twitter twitter-icon"></i>
                </button>
                <button className="ls-left-social__item">
                  <i className="fa-brands fa-google google-icon"></i>
                </button>
                <button className="ls-left-social__item">
                  <i className="fa-brands fa-linkedin-in linkedin-icon"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="ls-right">
          <div className="ls-right-container">
            <div className="ls-right-content">
              <Logo variant="white" width="216" />
              <p className="ls-right-content__text">
                At CHBP we look for footwear that is fashionable for you, so our customers know that buying here they
                will not be disappointed. We invite you to look at our catalog!
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer className="ls-footer">
        <AuthorGithub />
      </footer>
    </div>
  )
}

export default Login
