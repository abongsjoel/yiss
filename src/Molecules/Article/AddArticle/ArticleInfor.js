import React from 'react'

import H2 from '../../../Atoms/H2';
import Input from '../../../Atoms/Input';
import ArticleBody from './ArticleBody';

import Aux from '../../../hoc/Auxilary';

const ArticleInfo = ({title, titleChanged,preview, previewChanged, body, bodyChanged}) => {
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
                    placeholder="A short part of your article (about 3 or 4 lines) that should appear in the blog listings"
                    label="Preview"
                    required
                    rows="4"
                    initialValue={preview}
                    textChanged={previewChanged}
                />
                <br />
                <ArticleBody />
            </div>
        </Aux>
    )
}

export default ArticleInfo;