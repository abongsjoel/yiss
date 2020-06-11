import { useState, useEffect } from 'react';

// import axios from '../../axios/jsonPlaceHolder';
import axios from '../../axios/firebase';

export const useHttp = (url, dependencies) => {
    // console.log("this is the dependency", dependencies);
    const [ blogPosts, setBlogPosts ] = useState([]);
    const [ err, setErr] = useState(false);

    useEffect(() => {

        /* Using the Fetch API */
        // fetch('https://jsonplaceholder.typicode.com/posts')
        //      .then(response => {
        //           if (response.status !== 200) {
        //                console.log('Looks like there was a problem. Status Code: ' +
        //                  response.status);
        //                  setErr(true);
        //                return;
        //           }
        //           response.json().then(data => {
        //                setBlogPosts(data);
        //           })
        //      })
        //      .catch(error => {
        //           setErr(true);
        //           console.log("Network error most probably: ", error)
        //      });


        /* Using the axios library */

        axios.get(url)
            .then(response => {
                setBlogPosts(response.data);
                console.log(blogPosts)
            })
            .catch(err => {
                setErr(true);
            });
    }, dependencies);

    return [blogPosts, err]
}