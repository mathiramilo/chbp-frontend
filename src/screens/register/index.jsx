import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { authServices } from '../../services'
import { PhoneInput, AuthorGithub, Button, Input, Logo } from '../../components'
import { validEmail } from '../../utils'

import './styles.css'

const Register = () => {
  const [user, setUser] = useState({
    fullName: '',
    email: '',
    password: '',
    repeatPassword: ''
  })
  const [phone, setPhone] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const navigate = useNavigate()

  const handleRegister = async e => {
    e.preventDefault()

    const { fullName, email, password, repeatPassword } = user
    const userPhone = '+' + phone

    if (!(fullName && phone && email && password && repeatPassword)) {
      setError('Please check that all fields are filled in correctly')
      setTimeout(() => setError(null), 5000)
      return
    }

    if (userPhone.length < 8) {
      setError('Please check that your phone number is correct')
      setTimeout(() => setError(null), 5000)
      return
    }

    if (!validEmail(email)) {
      setError('Please check that your email is correct')
      setTimeout(() => setError(null), 5000)
      return
    }

    if (password.length < 6) {
      setError('Your password must be at least 6 characters long')
      setTimeout(() => setError(null), 5000)
      return
    }

    if (password !== repeatPassword) {
      setError('Please check that the passwords match')
      setTimeout(() => setError(null), 5000)
      return
    }

    setLoading(true)

    try {
      const { data } = await authServices.register(fullName, email, password, userPhone)
      console.log(data)
      navigate('/')
    } catch (error) {
      setError(error.message)
      setTimeout(() => setError(null), 5000)
    }

    setLoading(false)
  }

  return (
    <div className="register-screen">
      <div className="rs-container">
        <div className="rs-left">
          <div className="rs-left-container">
            <header className="rs-left-header">
              <h2 className="rs-left-header__heading">Welcome to</h2>
              <Logo width="168" />
              <p className="rs-left-header__text">Create an account to start looking for fashionable footwear</p>
            </header>

            <form className="rs-left-form">
              <div className="rs-left-form__input-group">
                <Input
                  icon="badge"
                  type="text"
                  placeholder="Full Name"
                  value={user.fullName}
                  onChange={e => setUser(prev => ({ ...prev, fullName: e.target.value }))}
                />
                <PhoneInput value={phone} setValue={setPhone} />
                <Input
                  icon="person_2"
                  type="email"
                  placeholder="Email"
                  value={user.email}
                  onChange={e => setUser(prev => ({ ...prev, email: e.target.value }))}
                />
                <Input
                  icon="lock"
                  type="password"
                  placeholder="Password"
                  value={user.password}
                  onChange={e => setUser(prev => ({ ...prev, password: e.target.value }))}
                />
                <Input
                  icon="repeat"
                  type="password"
                  placeholder="Repeat Password"
                  value={user.repeatPassword}
                  onChange={e => setUser(prev => ({ ...prev, repeatPassword: e.target.value }))}
                />
              </div>

              {error && (
                <div className="rs-left-error">
                  <span className="material-symbols-rounded">error</span>
                  <p className="rs-left-error__text">{error}</p>
                </div>
              )}

              <Button
                text={loading ? 'Wait a second please...' : 'Sign Up'}
                variant="principal"
                onClick={handleRegister}
              />
            </form>

            <div className="rs-left-footer">
              <span className="rs-left-footer__text">Already have an account?</span>
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
                At CHBP we look for footwear that is fashionable for you, so our customers know that buying here they
                will not be disappointed. We invite you to look at our catalog!
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
