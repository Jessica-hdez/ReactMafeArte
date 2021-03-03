import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const IndexTextButton = () => {
    return (
        <>
            <div className="text-index">
                <h3>Aquí encontrarás</h3>
                <p>hermosos diseños para<br />tus accesorios.</p>
            </div>
            <div className="btn-index">
                <Link to="/home">
                    <button>
                        {'Descubre '}
                        <FontAwesomeIcon icon="chevron-right" />
                    </button>
                </Link>
            </div>
        </>
    );
}

export default IndexTextButton;