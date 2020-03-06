import React from 'react';

import H1 from '../Atoms/H1';
import Img from '../Atoms/Img';
import Button from '../Atoms/Button';
import GalaryImg from '../Atoms/GalaryImg'

import pic1 from '../assets/galleryImages/pic1.jpg';
import pic2 from '../assets/galleryImages/pic2.jpg';
import pic3 from '../assets/galleryImages/pic3.jpg';
import pic4 from '../assets/galleryImages/pic4.jpg';
import pic5 from '../assets/galleryImages/pic5.jpg';

const Galary = () => (
    <div className="w-full bg-gallery flex px-1/10 py-8 md:py-12">
        <div className="w-full text-center">
            <H1
                part1="YISS 2"
                part2=" In Pictures" 
            />
            <div className="flex my-8 md:my-12">
                <div className="w-1/4 hidden sm:block">
                    <GalaryImg src={pic1}/>
                </div>
                <div className="sm:w-1/2 px-1 sm:px-2">
                    <div className="w-full h-1/2 pb-2px sm:pb-1">
                        <GalaryImg src={pic3} />
                    </div>
                    <div className="w-full h-1/2 pt-px sm:pt-1 flex">
                        <div className="w-1/2 h-full pr-2px sm:pr-1">
                            <GalaryImg src={pic4} />
                        </div>
                        <div className="w-1/2 h-full pl-2px sm:pl-1">
                            <GalaryImg src={pic5} />
                        </div>
                    </div>
                </div>
                <div className="w-1/4 hidden sm:block">
                    <GalaryImg src={pic2}/>
                </div>
            </div>
            <div className="mt-8">
                <Button link="about-us" text="View All" btnColor="blue" />
            </div>
        </div>
    </div>
);

export default Galary;