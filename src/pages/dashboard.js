import React from 'react'
import Modal from '../common/modal'
import PanTitle from '../components/panTitle'
import PanCardContent from '../components/panCardContent'

const Dashboard = ({closeModal}) => {
  return (
    <div>
        <Modal closeIcon={closeModal}>
            <PanTitle/>
            <PanCardContent onVerify={closeModal}/>
        </Modal>
    </div>
  )
}

export default Dashboard