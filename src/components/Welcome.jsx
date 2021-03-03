import React, { useEffect, useState } from 'react';
import logopq from '../assets/img/logo.png';

const Welcome = () => {
    const [time, setTime] = useState()

    useEffect(() => {
        functionTime()
    }, [])

    function functionTime() {
        var dt = new Date();
        var hrs = dt.getHours();
        if (7 <= hrs && hrs < 20) {
            setTime(true)
        } else {
            setTime(false)
        }
    }

    return (
        <div className="welcome">
            <div className="info">
                <h1 className="info-title">¡Bienvenida!</h1>
                <p className="info-schedule">Horario: Lunes - Domingo</p>
                <p className="info-time">7:00am - 8:00pm</p>
            </div>
            <div className="logo-container">
                <img src={logopq} alt="logo" className="logo" />
                <p className={time ? "logo-text" : "logo-text closed"}>
                    {time ? 'Abierto' : 'Cerrado'}</p>
            </div>
        </div>
    );
}

export default Welcome;