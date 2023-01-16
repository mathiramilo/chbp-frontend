import { ReactComponent as LogoSVG } from '../assets/chbp-logo.svg'

const Logo = ({ variant, width }) => {
  return (
    <LogoSVG
      style={
        variant === 'white'
          ? { ...styles.white, width: `${width}px` }
          : { ...styles.original, width: `${width}px` }
      }
    />
  )
}

const styles = {
  original: {
    fill: '#F20089'
  },
  white: {
    fill: '#FFFFFF'
  }
}

export default Logo
