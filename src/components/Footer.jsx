import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Footer = ({clickInfo, generalCounter}) => {
    return(
        <footer>
            <Link to='/cart' >
                <div className="btn-cart-container">
                    <FontAwesomeIcon icon="shopping-cart" />
                    <span className="quantity">{generalCounter}</span>
                </div>
            </Link>
            
            <div className="inner-btn-menu">
                <FontAwesomeIcon icon="home"
                                 className="icon-home" />
                <FontAwesomeIcon icon="info-circle"
                                 className="icon-information"
                                 onClick={clickInfo} />
            </div>
        </footer>
    )
}

export default Footer;