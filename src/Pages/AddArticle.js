import React, {useState} from 'react';

import PageHeader from '../Organisms/pageHeader';
import HeaderImage from '../assets/images/blog-header.JPG';
import Button from '../Atoms/Button';
import H1 from '../Atoms/H1';
import PersonalInfo from '../Molecules/Article/PersonalInfo';
import ArticleInfo from '../Molecules/Article/ArticleInfor';

import axios from '../axios/jsonPlaceHolder';
import Aux from '../hoc/Auxilary';

const AddArticle = () => {

    /*Personal Info*/
    const [name, setName] = useState("Dr Smikes");
    const [email, setEmail] = useState("abongsmike@gmail.com");

    /*Article Info*/
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const btnClickedHanler = () => {
        const newArticle = {
            id: Date.now(),
            author: name,
            email,
            date: Date.now(),
            title,
            body
        }
        console.log(newArticle)

        axios.post('/posts', newArticle)
            .then (response => {
                console.log("Wow, your article was successfully delivered to the server");
                console.log(response.data);
            }).catch ( error => {
                console.log("Error: your article could not be delivered. Please try again later");
            })
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
                <ArticleInfo 
                    title={title}
                    titleChanged={event => setTitle(event.target.value)}
                    body={body}
                    bodyChanged={event => setBody(event.target.value)}
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