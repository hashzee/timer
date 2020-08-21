import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faPlayCircle, faStopCircle, faRedo } from '@fortawesome/free-solid-svg-icons';

const Bottom = (props:any) => {
    return (
        <nav className="nav">
            <a href="/#" className="nav__link startTimer" onClick={props.hStart}>
            <i className="material-icons nav__icon"><FontAwesomeIcon icon={faPlayCircle} /></i>Start
            </a>
            <a href="/#" className="nav__link stopTimer" onClick={props.hStop}>
            <i className="material-icons nav__icon"><FontAwesomeIcon icon={faStopCircle} /></i>Stop
            </a>
            <a href="/#" className="nav__link resetTimer" onClick={props.hReset}>
            <i className="material-icons nav__icon" ><FontAwesomeIcon icon={faRedo} /></i>Reset
            </a>
            <a href="/#" className="nav__link handleAbout" onClick={props.hAbout}>
            <i className="material-icons nav__icon"><FontAwesomeIcon icon={faInfoCircle} /></i>About
            </a>
        </nav> 
    )
}

export default Bottom
