import React from 'react'

const TimerDigitsDisplay = (props:any) => {
    return (
        <div className="Time-Display">
            {props.seconds < 10 ? `0${props.seconds}` : props.seconds}
        </div>
    )
}

export default TimerDigitsDisplay
