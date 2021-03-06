import React, {useState, useEffect} from 'react';

import PageHeader from '../Organisms/pageHeader';
import HeaderImage from '../assets/images/blog-header.JPG';
import Button from '../Atoms/Button';
import H1 from '../Atoms/H1';
import PersonalInfo from '../Molecules/Article/AddArticle/PersonalInfo';
import ArticleInfo from '../Molecules/Article/AddArticle/ArticleInfor';
import Modal from '../Atoms/Modal/Modal';

// import axios from '../axios/jsonPlaceHolder';
import axios from '../axios/firebase';
import Aux from '../hoc/Auxilary';
import withErrorHandler from '../hoc/withErrorHandler';

const AddArticle = () => {

    console.log("AddArticle runs")

    /*Personal Info*/
    const [name, setName] = useState("Dr Smikes");
    const [email, setEmail] = useState("abongsmike@gmail.com");

    /*Article Info*/
    const [title, setTitle] = useState("");
    const [preview, setPreview] = useState("");
    const [body, setBody] = useState("");
    const [articles, setArticles] = useState(null);

    const [refresh, setRefresh] = useState(false);
    const [show, setShow] = useState(false); //Show Modal when article is submitted successfully
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
            axios.get('/articles.json')
                .then(response => {
                    console.log("got it: ", response.data);
                    if(articles === null || refresh){
                        setArticles(response.data);
                        setRefresh(false);
                        setTitle("");
                        setBody("");
                        setPreview("");
                    }
                })
                .catch(error => {
                    console.log("Error: ", error);
                })
       
    }, [articles, refresh])

    const btnClickedHanler = () => {
        setSubmitting(true);
        const d = new Date();
        
        const newArticle = [{
            articleId: Date.now(),
            author: name,
            email,
            date: d.toDateString(),
            title,
            preview,
            body
        }]
        console.log(newArticle)

        let articleToPost = [];

        if(!articles) {
            articleToPost = newArticle.concat();
        } else {
            articleToPost = articles.concat(newArticle);
        }

        console.log("Article to Post: ", articleToPost);

        axios.put('/articles.json', articleToPost)
            .then (response => {
                console.log("Wow, your article was successfully delivered to the server");
                console.log(response.data);
                setRefresh(true);
                setShow(true);
                setSubmitting(false);
            }).catch ( error => {
                setSubmitting(false);
                console.log("Error: your article could not be delivered. Please try again later. ", error);
            })
    }

    const modalClickdedHandler = () => {
        setShow(false);
    }

    return (
        <Aux>
            <Modal show={show} modalClicked={modalClickdedHandler}>
                <p className="text-green-500 text-center font-bold" >Your Article was submitted successfully</p>
            </Modal>
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
                    preview={preview}
                    previewChanged={event => setPreview(event.target.value)}
                    body={body}  
                    bodyChanged={event => setBody(event.target.value)}
                />
                <Button 
                    text={submitting ? "Submitting" : "Post Article"} 
                    btnColor="bg-main-500" 
                    type="submit" 
                    btnClicked={btnClickedHanler} 
                />
            </div>
        </Aux>  
    );
}

export default withErrorHandler(AddArticle, axios);