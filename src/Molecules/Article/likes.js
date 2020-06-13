import React from 'react'

import { useHttp } from '../../Hooks/useHttp';

const Likes = ({articleId, likesValue}) => {

    const [likes, likesErr] = useHttp('/likes/'+articleId+'.json', []);

    let valueShown = likesValue;

    if(likesErr) {
        console.log("Error with likes");
    } else if(likes) {
        valueShown = likes;
    }

    return (
        <p className="bg-gray-300 text-xs p-1">{valueShown}</p>
    )
}

export default Likes;
