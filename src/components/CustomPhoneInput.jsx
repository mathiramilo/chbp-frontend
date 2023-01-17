import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import './CustomPhoneInput.css'

const CustomPhoneInput = ({ value, setValue }) => {
  return (
    <PhoneInput
      country={'us'}
      regions={['america', 'europe']}
      value={value}
      onChange={setValue}
      containerClass="phone-input__container"
      inputClass="phone-input__field"
      buttonClass="phone-input__button"
      dropdownClass="phone-input__dropdown"
    />
  )
}

export default CustomPhoneInput
