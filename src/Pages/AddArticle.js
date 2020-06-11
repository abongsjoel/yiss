import React, {useState} from 'react';

import PageHeader from '../Organisms/pageHeader';
import HeaderImage from '../assets/images/blog-header.JPG';
import Button from '../Atoms/Button';
import H1 from '../Atoms/H1';
import PersonalInfo from '../Molecules/Article/PersonalInfo';

import Aux from '../hoc/Auxilary';
import ArticleInfo from '../Molecules/Article/ArticleInfor';

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
                <H1 part1="Post A New " part2="Article" />
                <PersonalInfo 
                    name={name}
                    nameChanged={event => setName(event.target.value)}
                    email={email}
                    emailChanged={event => setEmail(event.target.value)}
                />
                <ArticleInfo />
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