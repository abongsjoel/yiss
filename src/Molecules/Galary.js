import React from 'react';

import H1 from '../Atoms/H1';
import Img from '../Atoms/Img';

import pic1 from '../assets/galleryImages/pic1.jpg';
import pic2 from '../assets/galleryImages/pic2.jpg';

const Galary = () => (
    <div className="w-full bg-blue-100 py-8 flex">
        <div className="w-full text-center">
            <H1
                part1="YISS"
                part2=" In Pictures" 
            />
            <div className="flex">
                <div className="w-1/4">
                    <Img src={pic1}/>
                </div>
                <div className="w-1/2">

                </div>
                <div className="w-1/4">
                    <Img src={pic2}/>
                </div>
            </div>
        </div>
    </div>
);

export default Galary;