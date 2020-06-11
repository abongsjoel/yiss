import React from 'react'

import H2 from '../../Atoms/H2';
import Input from '../../Atoms/Input';

import Aux from '../../hoc/Auxilary';

const ArticleInfo = ({title, titleChanged, body, bodyChanged}) => {
    return (
        <Aux>
            <hr className="my-5" />
            <H2 text="Article Information" />
            
            <div className="my-5 w-full">
                <Input 
                    type="text"
                    placeholder="Type or paste the title of your article"
                    label="Title"
                    required
                    initialValue={title}
                    textChanged={titleChanged}
                />
                <br />
                <Input
                    type="textarea"
                    placeholder="Type or paste the body of your article here"
                    label="Body"
                    required
                    rows="10"
                    initialValue={body}
                    textChanged={bodyChanged}
                />
            </div>
        </Aux>
    )
}

export default ArticleInfo;