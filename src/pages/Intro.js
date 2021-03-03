import React from 'react';
import ContainerIndex from '../containers/ContainerIndex';
import IndexCurve from '../components/IndexCurve';
import IndexTextButton from '../components/IndexTextButton';

function Intro() {
    return(
        <ContainerIndex>
            <IndexCurve />
            <IndexTextButton />
        </ContainerIndex>
    );
}

export default Intro;