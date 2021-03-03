import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../assets/img/logo-index.png';

const IndexCurve = () => {
    return (
        <div className="curve">
            <div className="social-media">
                <a href='http://www.instagram.com/mafe.arte/?hl=es-la' rel="noreferrer" target='_blank'>
                    <FontAwesomeIcon icon={['fab', 'instagram']} />
                </a>
                <a href='https://api.whatsapp.com/send?phone=573102905194&text=¡Hola! Quiero conocer más de tus productos.' rel="noreferrer" target='_blank'>
                    <FontAwesomeIcon icon={['fab', 'whatsapp']} />
                </a>
            </div>
            <div className="logo-index">
                <img src={logo} alt="logo Mafe Arte" />
            </div>
        </div>
    );
}

export default IndexCurve;