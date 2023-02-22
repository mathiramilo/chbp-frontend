import React, { useState } from 'react'
import { Button, Input, Logo, Modal } from '../../components'
import { ReactComponent as MasterIcon } from '../../assets/master-icon.svg'
import { ReactComponent as VisaIcon } from '../../assets/visa-icon.svg'

import './styles.css'

const BillingModal = ({ open, setOpen, address, card, setAddress, setCard }) => {
  const cardType = card.number ? (['0', '1', '2', '3', '4'].includes(card.number[0]) ? 'visa' : 'master') : 'none'

  const cardNumberWithSpaces = number => {
    const arr = number.match(/.{1,4}/g)
    return arr ? arr.join(' ') : ''
  }

  const validateExpDate = date => {
    const re = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/
    return re.test(date)
  }

  const [error, setError] = useState(null)

  const handleAddressChange = e => {
    const { name, value } = e.target
    setAddress(prevState => ({ ...prevState, [name]: value }))
  }

  const handleCardChange = e => {
    const { name, value } = e.target
    setCard(prevState => ({ ...prevState, [name]: value }))
  }

  const handleChangeNumber = e => {
    const { name, value } = e.target
    const number = value.replace(/\D/g, '')
    setCard(prevState => ({ ...prevState, [name]: number }))
  }

  const handleChangeDate = e => {
    const { name, value } = e.target
    const re = /^[\d/]*$/
    const valid = re.test(value)
    if (!valid) return
    setCard(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (
      !address.fullName ||
      !address.address ||
      !address.city ||
      !address.country ||
      !card.number ||
      !card.fullName ||
      !card.expDate ||
      !card.cvv
    ) {
      setError('Please check that all fields are filled in correctly')
      setTimeout(() => setError(null), 5000)
      return
    }

    if (card.number.length < 16) {
      setError('Please enter a valid card number')
      setTimeout(() => setError(null), 5000)
      return
    }

    if (!validateExpDate(card.expDate)) {
      setError('Please enter a valid expiration date (MM/YY)')
      setTimeout(() => setError(null), 5000)
      return
    }

    setOpen(false)
  }

  return (
    <Modal open={open} setOpen={setOpen} modalStyle={{ width: '95%', maxWidth: '512px' }} disableClickOutsideClose>
      <div className="modal-billing">
        <header className="modal-billing__header">
          <Logo width={144} />
          <p>Enter your billing information in order to checkout successfully</p>
        </header>
        <form onSubmit={handleSubmit}>
          <div className="modal-billing__address">
            <Input
              icon="badge"
              placeholder="Full Name"
              name="fullName"
              value={address.name}
              onChange={handleAddressChange}
            />
            <Input
              icon="home_pin"
              placeholder="Address"
              name="address"
              value={address.address}
              onChange={handleAddressChange}
            />
            <Input
              icon="location_city"
              placeholder="City"
              name="city"
              value={address.city}
              onChange={handleAddressChange}
            />
            <Input
              icon="public"
              placeholder="Country"
              name="country"
              value={address.country}
              onChange={handleAddressChange}
            />
          </div>
          <hr />
          <div className="modal-billing__payment">
            <div className="modal-billing-payment__info">
              <span className="material-symbols-rounded">info</span>
              <p>Please enter a fake card, this website is for educational purposes, no payment will be made.</p>
            </div>
            <div className="modal-billing-payment__card" data-type={cardType}>
              <div className="mbp-card__top">
                {cardType !== 'none' ? (
                  cardType === 'visa' ? (
                    <VisaIcon className="cart-right-payment__icon" />
                  ) : (
                    <MasterIcon className="cart-right-payment__icon" />
                  )
                ) : (
                  <span className="mbp-card-top__default-card"></span>
                )}
                <span className="material-symbols-rounded">rss_feed</span>
              </div>
              <div className="mbp-card__middle">
                <span>Card Number</span>
                <span>{cardNumberWithSpaces(card.number)}</span>
              </div>
              <div className="mbp-card__bottom">
                <span>{card.fullName}</span>
                <span>{card.expDate}</span>
              </div>
            </div>
            <div className="modal-billing-payment__input-group">
              <Input
                icon="credit_card"
                placeholder="Card Number"
                name="number"
                value={card.number}
                onChange={handleChangeNumber}
                maxLength={16}
                autoComplete="off"
              />
              <Input
                icon="badge"
                placeholder="Full Name"
                name="fullName"
                value={card.fullName}
                onChange={handleCardChange}
                maxLength={32}
                autoComplete="off"
              />
              <Input
                icon="event"
                placeholder="Exp Date"
                name="expDate"
                value={card.expDate}
                onChange={handleChangeDate}
                maxLength={5}
                autoComplete="off"
              />
              <Input
                icon="vpn_key"
                placeholder="CVV"
                name="cvv"
                value={card.cvv}
                onChange={handleChangeNumber}
                maxLength={3}
                autoComplete="off"
              />
            </div>
          </div>

          {error && (
            <div className="rs-left-error">
              <span className="material-symbols-rounded">error</span>
              <p className="rs-left-error__text">{error}</p>
            </div>
          )}

          <Button type="submit" text="Save Billing Info" />
        </form>
      </div>
    </Modal>
  )
}

export default BillingModal
