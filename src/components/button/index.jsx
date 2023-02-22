import { useEffect, useState } from 'react'
import './styles.css'

const Button = ({ text, variant, ...props }) => {
  const [type, setType] = useState('principal')

  useEffect(() => {
    switch (variant) {
      case 'principal':
        setType('principal')
        break

      case 'secondary':
        setType('secondary')
        break

      case 'disabled':
        setType('disabled')
        break

      default:
        setType('principal')
        break
    }
  }, [variant])

  return (
    <button className={`btn btn--${type}`} {...props}>
      {text}
    </button>
  )
}

export default Button
