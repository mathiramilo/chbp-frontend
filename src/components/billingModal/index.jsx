import React, { useState } from 'react'

import { Button, Input, Logo, Modal } from '../../components'

import './styles.css'

const BillingModal = ({ open, setOpen, address, setAddress }) => {
  const [error, setError] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    const { address, city, country } = e.target

    if (!address || !city || !country) {
      setError('Please check that all fields are filled in correctly')
      setTimeout(() => setError(null), 5000)
      return
    }

    setAddress({
      address: address.value,
      city: city.value,
      country: country.value
    })
    setOpen(false)
  }

  return (
    <Modal
      open={open}
      setOpen={setOpen}
      modalStyle={{ width: '95%', maxWidth: '512px' }}
      disableClickOutsideClose
    >
      <div className="modal-billing">
        <header className="modal-billing__header">
          <Logo width={144} />
          <p>Enter your address information in order to checkout successfully</p>
        </header>
        <form onSubmit={handleSubmit}>
          <div className="modal-billing__address">
            <Input
              icon="home_pin"
              placeholder="Address"
              name="address"
              defaultValue={address.address}
            />
            <Input
              icon="location_city"
              placeholder="City"
              name="city"
              defaultValue={address.city}
            />
            <Input
              icon="public"
              placeholder="Country"
              name="country"
              defaultValue={address.country}
            />
          </div>

          {error && (
            <div className="rs-left-error">
              <span className="material-symbols-rounded">error</span>
              <p className="rs-left-error__text">{error}</p>
            </div>
          )}

          <Button
            type="submit"
            text="Continue"
          />
        </form>
      </div>
    </Modal>
  )
}

export default BillingModal
