import React from 'react'
import './index.scss'
import { SecureLockDesktop, SecureLockMobile } from '../../assets/svg/svg'

const PanTitle = () => {
    return (
        <section id='panTitle' className='pan-title-wrapper'>
            <div className='secure-icon-desktop'><SecureLockDesktop /></div>
            <div className='pan-title'>
                <div>PAN Verification</div>
                <div>
                    <div className='secure-icon-mobile'><SecureLockMobile /></div>
                    <p> As per regulations, it is mandatory to verify your PAN details.</p>
                </div>
            </div>
        </section>
    )
}

export default PanTitle