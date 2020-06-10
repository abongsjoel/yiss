import React from 'react';

import PageHeader from '../Organisms/pageHeader';
import HeaderImage from '../assets/images/blog-header.JPG';

import Aux from '../hoc/Auxilary';
import H1 from '../Atoms/H1';
import H2 from '../Atoms/H2';
import Input from '../Atoms/Input';

const AddArticle = () => {
    return (
        <Aux>
            <PageHeader pageName="Blog" headerImage={HeaderImage} className=' object-bottom'  />
            
            <div className="tj-container">
                <H1 part1="Post A New " part2="Article" />
                <hr className="my-5" />
                <H2 text="Personal Information" />
                <div className="my-5 w-full flex">
                    <div className="w-1/2 mr-2">
                        <Input 
                            type = "text"
                            placeholder = "Enter your name"
                            label = "Name"
                            required
                        />
                    </div>
                    <div className="w-1/2 ml-2">
                        <Input 
                            type = "text"
                            placeholder = "Enter your email address"
                            label = "Email"
                            hint = "Your email address will not be published"
                        />
                    </div>
                </div>
            </div>
        </Aux>  
    );
}

export default AddArticle;