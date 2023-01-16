import './Input.css'

const Input = ({ icon, ...props }) => {
  return (
    <div className="input-container">
      <span class="material-symbols-rounded input-icon">{icon}</span>
      <input className="input-field" {...props} />
    </div>
  )
}

export default Input
