import React, { useState } from 'react';
import Categories from '../components/Categories';
import NavHeader from '../components/NavHeader';
import Welcome from '../components/Welcome';
import Container from '../containers/Container';
import ContainerProducts from '../containers/ContainerProducts';
import { product } from '../API/infoProducts.json';
import Product from '../components/Product';
import Footer from '../components/Footer';
import Information from '../components/Information';

function Home({order, setOrder, sort, setSort, generalCounter, setGeneralCounter}) {
    const [showSearch, setShowSearch] = useState('btns-header');
    const [showInfo, setShowInfo] = useState('section-about-us');
    /* const [order, setOrder] = useState([]); */
    const showSection = true;

    const clickSearch = () => {
        if (showSearch === 'btns-header') {
            setShowSearch('btns-header active')
        } else {
            setShowSearch('btns-header')
        }
    }

    const sortCategory = (category) => {
        setSort(category)
    }

    const clickInfo = () => {
        console.log('click in')
        setShowInfo('section-about-us show-about');
    }

    const clickClose = () => {
        console.log('click out')
        setShowInfo('section-about-us');
    }


    return(
        <>
            <Container>
                <header>
                    <NavHeader route={'/'}
                               clickSearch={clickSearch}
                               showSearch={showSearch}
                               showSection={showSection} />
                    <Welcome />
                </header>
                <Categories sortCategory={sortCategory}
                            stateSort={sort} />
                <ContainerProducts>
                    
                    {product.map((product) => (
                        <Product key={product.id}
                                id={product.id}
                                alt={product.alt}
                                srcImg={product.src}
                                title={product.title}
                                shortDescription={product.description}
                                price={product.price}
                                category={product.category}
                                promo={product.promo}
                                stateSort={sort}
                                generalCounter={generalCounter}
                                setGeneralCounter={setGeneralCounter}
                                order={order}
                                setOrder={setOrder} />
                    ))}
                </ContainerProducts>
                <Footer clickInfo={clickInfo}
                        generalCounter={generalCounter} />
            </Container>
            <Information stateShow={showInfo}
                         clickClose={clickClose} />
        </>
    );
}

export default Home;