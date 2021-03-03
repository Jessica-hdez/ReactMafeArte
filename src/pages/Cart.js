import React from 'react';
import NavHeader from '../components/NavHeader';
import ContainerProducts from '../containers/ContainerProducts';
import { product } from '../API/infoProducts.json';
import Product from '../components/Product';
import Container from '../containers/Container';
import Details from '../components/Details';

function Cart({order, setOrder, sort, setSort, generalCounter, setGeneralCounter}) {
    const showSection = false;

    let total = 0;

    order.forEach((item, idx) => {
        total += item.price * item.amount;
    });

    const products = [];

    order.forEach((item) => {
        if (item.amount !== 0){
            products.push(`---- PRODUCTO: ${item.title}. CANTIDAD: ${item.amount} --`);
        }
    });
    const message = `${products.join(``)} TOTAL: $${total+2}.000 (Envío incluido).`;



    return(
        
        <Container>
            <header>
                <NavHeader route={'/home'}
                           showSearch={'btns-header'}
                           showSection={showSection} />
            </header>
            <ContainerProducts>
                    {product.map((product) => (
                        <Product key={product.id}
                                id={product.id}
                                alt={product.alt}
                                srcImg={product.src}
                                title={product.title}
                                shortDescription={product.description}
                                price={product.price}
                                /* category={product.category} */
                                /* promo={product.promo} */
                                stateSort={sort}
                                generalCounter={generalCounter}
                                setGeneralCounter={setGeneralCounter}
                                order={order}
                                setOrder={setOrder}
                                cart={true} />
                    ))}
                </ContainerProducts>
            <Details message={message}
                     total={total} />
        </Container>
    );
}

export default Cart;