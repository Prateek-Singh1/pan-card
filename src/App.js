import React, { useState } from 'react';
import './App.scss';
import Dashboard from './pages/dashboard';

const App = () => {

  const [shoeModal, setShoeModal] = useState(false);

  const handleShowModal = () => {
    setShoeModal(!shoeModal)
  }
  return (
    <div >
      <button onClick={handleShowModal}>Click me</button>
      {shoeModal ?
        <Dashboard closeModal={() => handleShowModal()} />
        :
        <></>
      }
    </div>
  );
}

export default App;
