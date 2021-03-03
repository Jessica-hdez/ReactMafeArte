import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const NavHeader = ({route, clickSearch, showSearch, showSection}) => {
    return (
        <div className={showSearch}>
            <Link to={route}>
                <button>
                    <FontAwesomeIcon icon="chevron-left" />
                </button>
            </Link>
            <input type="text" className={showSection ? 'input' : 'noshow-section-nav'} placeholder="Buscar" />
            <button className={showSection ? '' : 'noshow-section-nav'}>
                <FontAwesomeIcon icon="search" onClick={clickSearch} />
            </button>
            <h3 className={showSection ? '' : 'show-section-nav'}>Mi pedido</h3>
        </div>
    );
}

export default NavHeader;