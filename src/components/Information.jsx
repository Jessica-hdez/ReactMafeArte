import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Information = ({stateShow, clickClose}) => {
    return(
        <div className={stateShow}>
            <div className="about-title-container">
                <h3 className="about-title">Acerca de Mafe Arte</h3>
                <FontAwesomeIcon icon="times" className="btn-close" onClick={clickClose} />
            </div>
            <p className="about-content">Joyería artesanal elaborada por mujeres colombianas, innovando
                en diseños y personalizando tus productos para que siempre te identifiques con
                tus accesorios.<br /><br />Encuéntranos en instagram como mafe.arte para conocer más de
                nuestros productos.<span>Copyright &copy; 2020 Mafe Arte</span></p>
        </div>
    )
}

export default Information;