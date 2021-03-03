import React, { useState } from 'react';

const Categories = ({sortCategory, stateSort}) => {

    const [isActive, setIsActive] = useState('Promociones');

    return (
        <div className="categories">
            <h1 className="categories-title">Categorías</h1>
            <div className="categories-buttons">
                <button className={isActive === 'Promociones' ? "btn-categories active" : "btn-categories"}
                        onClick={function() {
                            sortCategory('Promociones')
                            setIsActive('Promociones')
                            /* scrollSetUp() */
                        }}
                        >Promociones</button>
                <button className={isActive === 'Collares' ? "btn-categories active" : "btn-categories"}
                        onClick={function() {
                            sortCategory('Collares')
                            setIsActive('Collares')
                            /* scrollSetUp() */
                        }}
                        >Collares</button>
                <button className={isActive === 'Aretes' ? "btn-categories active" : "btn-categories"}
                        onClick={function() {
                            sortCategory('Aretes')
                            setIsActive('Aretes')
                            /* scrollSetUp() */
                        }}
                        >Aretes</button>
                <button className={isActive === 'Pulseras' ? "btn-categories active" : "btn-categories"}
                        onClick={function() {
                            sortCategory('Pulseras')
                            setIsActive('Pulseras')
                            /* scrollSetUp() */
                        }}
                        >Pulseras</button>
                <button className={isActive === 'Anillos' ? "btn-categories active" : "btn-categories"}
                        onClick={function() {
                            sortCategory('Anillos')
                            setIsActive('Anillos')
                            /* scrollSetUp() */
                        }}
                        >Anillos</button>
                <button className={isActive === 'Sets' ? "btn-categories active" : "btn-categories"}
                        onClick={function() {
                            sortCategory('Sets')
                            setIsActive('Sets')
                            /* scrollSetUp() */
                        }}
                        >Sets</button>
            </div>
            <h3>{stateSort}</h3>
        </div>
    );
}

export default Categories;