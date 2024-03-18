import React, { useState, useRef, useEffect } from 'react';
import { PanImage } from '../../assets/svg/svg';
import './index.scss';

const PanCardContent = ({ onVerify }) => {
    const inputRef = useRef(null);
    const [cardNumberEntered, setCardNumberEntered] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [isInputClicked, setIsInputClicked] = useState(false);

    const handleCardInput = (e) => {
        const regX = /[^A-Z0-9]/g
        const input = e.toUpperCase().replace(regX, '').substring(0, 10);
        setCardNumberEntered(input);
        setIsValid(input.length === 10);
    };

    const onSubmit = () => {
        if (isValid) {
            onVerify();
        }
    }

    const handleInputClicked = () => {
        setIsInputClicked(true);
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (inputRef.current && !inputRef.current.contains(event.target)) {
                setIsInputClicked(false)
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleCardEnter = () => {
        setIsInputClicked(true);
    }

    return (
        <section id='pan-card-title' className='pan-card-wrapper'>
            <div className='pan-card-image'>
                <PanImage />
            </div>
            <div className='pan-card-details'>
                <input
                    placeholder=''
                    value={cardNumberEntered}
                    onChange={(e) => handleCardInput(e.target.value)}
                    onClick={handleCardEnter}
                    ref={inputRef}
                />
                <span className={`${isInputClicked ? 'input-label-clicked' : 'input-label-notClicked'}`}
                    onClick={handleInputClicked}
                >
                    Enter 10-digit PAN</span>
                <div className='check-validation'>{cardNumberEntered.length}/10</div>
                <button className={`${isValid ? 'valid-button' : 'inValid-button'}`} onClick={onSubmit}>VERIFY</button>
            </div>
        </section>
    );
};

export default PanCardContent;
