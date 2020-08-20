import React from 'react'


const TimerHand = (props:any) => {
    const secondsStyle = {
        transform: `rotate(${props.seconds * 6}deg)`
    };
    return (
        <div className='Hand second' style={secondsStyle}></div>
    )
}

export default TimerHand
