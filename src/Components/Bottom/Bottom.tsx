import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faUser } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const Bottom = (props:any) => {
    return (
        <nav className="nav">
            <a href="/#" className="nav__link startTimer" onClick={props.hStart}>
            <i className="material-icons nav__icon"><FontAwesomeIcon icon={faUser} /></i>Start
            </a>
            <a href="/#" className="nav__link stopTimer" onClick={props.hStop}>
            <i className="material-icons nav__icon"><FontAwesomeIcon icon={faUserCircle} /></i>Stop
            </a>
            <a href="/#" className="nav__link resetTimer" onClick={props.hReset}>
            <i className="material-icons nav__icon" ><FontAwesomeIcon icon={faAddressCard} /></i>Reset
            </a>
            <a href="/#" className="nav__link handleAbout" onClick={props.hAbout}>
            <i className="material-icons nav__icon"><FontAwesomeIcon icon={faAddressCard} /></i>About
            </a>
        </nav> 
    )
}

export default Bottom
