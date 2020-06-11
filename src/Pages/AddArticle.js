import React, {useState} from 'react';

import PageHeader from '../Organisms/pageHeader';
import HeaderImage from '../assets/images/blog-header.JPG';
import Button from '../Atoms/Button';

import Aux from '../hoc/Auxilary';
import PersonalInfo from '../Molecules/Article/PersonalInfo';

const AddArticle = () => {

    const [name, setName] = useState("Dr Smikes");
    const [email, setEmail] = useState("abongsmike@gmail.com");

    const btnClickedHanler = () => {
        const article = {
            author: name,
            email,
            date: Date.now()
        }
        console.log(article)
    }

    return (
        <Aux>
            <PageHeader pageName="Blog" headerImage={HeaderImage} className=' object-bottom'  />
            
            <div className="tj-container">
                <PersonalInfo 
                    name={name}
                    nameChanged={event => setName(event.target.value)}
                    email={email}
                    emailChanged={event => setEmail(event.target.value)}
                />
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