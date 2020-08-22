import React from 'react'


const TimerHand = (props:any) => {
    const secondsStyle = {
        transform: `rotate(${props.seconds * 12}deg)`
    };
    return (
        <div className='HandSmall second' style={secondsStyle}></div>
    )
}

export default TimerHand
