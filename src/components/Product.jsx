import React, { useState, useEffect } from 'react';
/* import { Link } from 'react-router-dom'; */

const Product = (props) => {
    const {id, srcImg, alt, title, shortDescription, price, category, promo, stateSort, generalCounter, setGeneralCounter, order, setOrder, cart} = props;

    const [counter, setCounter] = useState(0)

    const addCounter = () => {
        setCounter(counter+1)
        setGeneralCounter(generalCounter+1)
        if (order.some(product => product.id === id)) {
            order.forEach(element => {
                if (element.id === id) {
                    element.amount = element.amount + 1
                }
            });
        } else {
            setOrder([
                ...order,
                {
                    id:id,
                    amount:counter + 1,
                    price:price,
                    title:title
                }
            ])
        }
    }

    const removeCounter = () => {
        if (counter > 0) {
            setCounter(counter-1);
            setGeneralCounter(generalCounter-1);
            order.forEach(product => {
                if (product.id === id) {
                    product.amount = product.amount - 1
                }
            });
        }
    }

    useEffect(() => {
        valid()
    },[])

    const valid = () => {
        if (order.some(product => product.id === id)) {
            order.forEach(element => {
                if (element.id === id) {
                    setCounter(element.amount)
                }
            });
        }
    }

    return (
        <div className={category === stateSort || ('Promociones' === stateSort && promo === 'Si') || (cart && order.some(product => product.id === id && product.amount !== 0)) ? 'product show-product' : 'product'}>
            <img src={srcImg} alt={alt} />
            <div className="product-text">
                <h4 className="product-title">{title}</h4>
                <p className="product-description">{shortDescription}</p>
                <p className="product-price">{`$${price}`}</p>
                <div className="counter">
                    <button className="less" onClick={removeCounter}>-</button>
                    <p>{counter}</p>
                    <button className="plus" onClick={addCounter}>+</button>
                </div>
            </div>
        </div>
    );
}

export default Product;