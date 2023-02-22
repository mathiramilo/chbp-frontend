import React, { useEffect, useRef } from 'react'

import './styles.css'

const Modal = ({ open, setOpen, children, containerStyle, modalStyle, ...props }) => {
  const modal = useRef(null)

  useEffect(() => {
    const handleClick = e => {
      if (modal.current.contains(e.target)) {
        return
      }

      setOpen(false)
    }

    if (open) {
      document.addEventListener('mousedown', handleClick)
    }

    return () => {
      document.removeEventListener('mousedown', handleClick)
    }
  }, [modal, open, setOpen])

  return (
    <div className={open ? 'modal-container open' : 'modal-container'} style={containerStyle} {...props}>
      <div ref={modal} className={open ? 'modal open' : 'modal'} style={modalStyle}>
        {children}
      </div>
    </div>
  )
}

export default Modal
