import React, {useState} from 'react'

import axios from '../../axios/firebase';

import { useHttp } from '../../Hooks/useHttp';

import Para from '../../Atoms/Para';
import Spinner from '../../Atoms/Spinner/Spinner';
import ErrorMessage from '../../Atoms/ErrorMessage';
import Likes from './likes';

import likeIcon from '../../assets/icons/like.svg';

const ArticleComments = ({articleId}) => {

    const [comments, commentsErr] = useHttp('/comments/'+articleId+'.json', []);

    let articleComments = <Spinner />

    if(commentsErr) {
        articleComments = <ErrorMessage>Sorry, comments could not be loaded for some reason </ErrorMessage>
    } else if(comments) {
        articleComments = Object.entries(comments).reverse().map(comment => {

            /*These 3 lines constitute a working version that does not show day for today and shows full date for other days*/
            // const d = comment[1].date;
            const today = new Date();
            // const day = (d === today.toDateString()) ? "" : d;

            const t = new Date(comment[1].time);

            const dayInMs = t.getTime();
            const todayInMs = today.getTime();
            const oneDayInMs = 86400000;
            const timeNowInMs = todayInMs % oneDayInMs;
            const midniteTodayInMs = todayInMs - (timeNowInMs + 3600000);

            let dayShown = '';

            if(dayInMs > midniteTodayInMs) {
                dayShown = 'Today';
            } else if(dayInMs < midniteTodayInMs && dayInMs > (midniteTodayInMs + oneDayInMs)) {
                dayShown = 'Yesterday';
            } else {
                dayShown = comment[1].date; //dateString from server
            }
    
            const hours = t.getHours();
            const minutes = t.getMinutes();
            const time = `${(hours <= 9) ? '0' + hours : hours}:${(minutes <= 9) ? '0' + minutes : minutes} ${(hours < 12 ? 'am' : 'pm')}`;

            const date = `${dayShown} at ${time}`;

            return (
                <div className="flex items-start my-5" key={comment[1].name}>
                    <div className="h-12 w-12 rounded-full bg-gray-300 mr-2">

                    </div>
                    <div className="w-3/5"> 
                <p className="text-sm font-bold"> {comment[1].name}  <span className=" font-normal text-gray-400"> | {date}</span></p>
                        <Para  text={comment[1].body} styles="text-sm mt-2 text-gray-400" />
                        {/* <a href="/"><p className="text-sm text-gray-900">Reply</p></a> */}
                    </div>
                </div>
            );
        })
    } else {
        articleComments = <p className="text-main-200 font-semibold text-sm">Be the first to leave a comment</p>
    }


    /*Now we handle the likes*/
    /*
        Here, we get the value of like from server and when likes is click, we just increment the value and sent it back to the server.
        The likes component then gets the value from the server using its own axios and then shows it. 
        However, the way this element is implemented for the moment, a client can like the article each time the page refreshes thus
        one person can like the article multiple times.
    */

    const [liked, setLiked] = useState(false);
    const [showLike, setShowLike] = useState(true);

    const [likes, likesErr] = useHttp('/likes/'+articleId+'.json', []);

    let likesValue = 0;

    if(likesErr) {
        console.log("Error with likes");
    } else if(likes) {
        likesValue = likes;
    }
    

    const likeClickHandler = () => {
        if(!liked) {
            setShowLike(false);
        
            axios.put('/likes/'+articleId+'.json', ++likesValue)
            .then (response => {
                setShowLike(true);
                console.log("Your like was sent to server")
            }).catch ( error => {
                console.log("Error: your like could not be sent to server");
                setShowLike(true);
            })
        }

        setLiked(true);
        
    }

    return (
        <div>
            <div className="mt-8 flex items-center">
                <p className="text-gray-700 text-base font-bold pr-4">{comments ? Object.entries(comments).length : '0'} comment(s)</p>
                <div className="flex items-center cursor-pointer" onClick={likeClickHandler}> 
                    <img src={likeIcon} alt="" className="w-4 h-4" />
                    <p className="text-main-200 text-sm px-1 font-bold">Likes</p>
                </div>
                {showLike ? <Likes articleId={articleId} likesValue={likesValue} liked={liked} /> : null}
            </div>
            <hr className="mt-1 mb-4" />
            {articleComments}
        </div>
    )
}

export default ArticleComments
