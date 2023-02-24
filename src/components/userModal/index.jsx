import React from 'react'
import { Link } from 'react-router-dom'

import Modal from '../modal'

import './styles.css'

const UserModal = ({ open, setOpen, user, handleLogout }) => {
  return (
    <Modal open={open} setOpen={setOpen} modalStyle={{ width: '75%', maxWidth: '386px' }}>
        <div className="modal-content">
          <button className="modal__close-btn">
            <span className="material-symbols-rounded" onClick={() => setOpen(false)}>
              close
            </span>
          </button>
          <div className="modal__full-name">
            <span className="material-symbols-rounded">account_circle</span>
            <span>{user?.fullName}</span>
          </div>
          <div className="modal__info">
            <div className="modal-info__item">
              <span className="material-symbols-rounded">person_2</span>
              <span>Email: {user?.email}</span>
            </div>
            <div className="modal-info__item">
              <span className="material-symbols-rounded">phone_iphone</span>
              <span>Phone: {user?.phone}</span>
            </div>
          </div>

          <div className="modal__btns">
            <Link to="/orders">
              <button className="modal__orders-btn" onClick={() => setOpen(false)}>
                <span>My Orders</span>
                <span className="material-symbols-rounded">room_service</span>
              </button>
            </Link>

            <button className="modal__btn" onClick={handleLogout}>
              <span>Logout</span>
              <span className="material-symbols-rounded">logout</span>
            </button>
          </div>
        </div>
      </Modal>
  )
}

export default UserModal