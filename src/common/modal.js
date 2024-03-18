import React from 'react'
import { CloseIcon } from '../assets/svg/svg'
import './modal.scss'

const Modal = ({ children, closeIcon }) => {
    return (
        <section id='modal-layout' className='modal-wrapper'>
            <div className='modal-container'>
                <div className='modal-close-icon' onClick={closeIcon}>
                    <CloseIcon />
                </div>
                {children}
            </div>
        </section>
    )
}

export default Modal