import React from 'react';

const Details = ({message, total}) => {
    return(
        <div className="detail">
            <div className="detail-text">
                <h4>Sub Total</h4>
                <h4>{total <= 0 ? `$0` : `$${total}.000`}</h4>
            </div>
            <div className="detail-text last">
                <h4>Costo envío</h4>
                <h4>$2.000</h4>
            </div>
            <div className="detail-text">
                <h4>Total</h4>
                <h4>{total <= 0 ? `$2.000` : `$${total + 2}.000`}</h4>
            </div>
            <a href={`https://api.whatsapp.com/send?phone=573102905194&text=${message}`} target="_blank" rel="noopener noreferrer">
                <button>Enviar pedido</button>
            </a>
        </div>
    )
}

export default Details;