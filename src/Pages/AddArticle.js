import React, {useState} from 'react';

import PageHeader from '../Organisms/pageHeader';
import HeaderImage from '../assets/images/blog-header.JPG';
import H1 from '../Atoms/H1';
import H2 from '../Atoms/H2';
import Input from '../Atoms/Input';
import Button from '../Atoms/Button';

import Aux from '../hoc/Auxilary';

const AddArticle = () => {

    const [name, setName] = useState("Dr Smikes");
    const [email, setEmail] = useState("abongsmike@gmail.com");

    const btnClickedHanler = () => {
        const article = {
            author: name,
            email,
        }
        console.log(article)
    }

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
                            initialValue={name}
                            textChanged={event => setName(event.target.value)}
                        />
                    </div>
                    <div className="w-1/2 ml-2">
                        <Input 
                            type = "text"
                            placeholder = "Enter your email address"
                            label = "Email"
                            hint = "Your email address will not be published"
                            initialValue={email}
                            textChanged={event => setEmail(event.target.value)}
                        />
                    </div>
                </div>
                <Button 
                    text="Post Article" 
                    btnColor="bg-main-500" 
                    type="submit" 
                    btnClicked={btnClickedHanler} 
                />
            </div>
        </Aux>  
    );
}

export default AddArticle;