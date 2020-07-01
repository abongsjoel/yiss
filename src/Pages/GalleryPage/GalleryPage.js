import React from 'react'

import PageHeader from '../../Organisms/pageHeader';

import HeaderImage from '../../assets/images/communities.jpg';
import GalaryImg from '../../Atoms/GalaryImg/GalaryImg'

import pic1 from '../../assets/galleryImages/pic1.jpg';
import pic2 from '../../assets/galleryImages/pic2.jpg';
import pic3 from '../../assets/galleryImages/pic3.jpg';
import pic4 from '../../assets/galleryImages/pic4.jpg';
import pic5 from '../../assets/galleryImages/pic5.jpg';

import Aux from '../../hoc/Auxilary';
import classes from './GalleryPage.module.css';

const GalleryPage = () => {
    return (
        <Aux>
            <PageHeader pageName="Yiss in Pictures" headerImage={HeaderImage} />

            <div className="tj-container">
                <div className={classes.Galery}>
                    <GalaryImg src={pic1}/>
                    <GalaryImg src={pic2}/>
                    <GalaryImg src={pic3}/>
                    <GalaryImg src={pic4}/>
                    <GalaryImg src={pic5}/>
                </div>
            </div>


            {/* <p className={classes.Galery}>This is the GalleryPage</p> */}
        </Aux>
    )
}

export default GalleryPage;
