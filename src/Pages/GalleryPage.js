import React from 'react'

import PageHeader from '../Organisms/pageHeader';

import HeaderImage from '../assets/images/communities.jpg';

import Aux from '../hoc/Auxilary';

const GalleryPage = () => {
    return (
        <Aux>
            <PageHeader pageName="Yiss in Pictures" headerImage={HeaderImage} />
            <p>This is the GalleryPage</p>
        </Aux>
    )
}

export default GalleryPage;
