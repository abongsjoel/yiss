import React from 'react';

import Input from '../../../Atoms/Input';

const ArticleBody = () => {
    return (
        <div>
            <p className="pl-1">Article Body <span className="text-red-700"> *</span></p>                    
            
            <Input
                type="textarea"
                labelStyle = "text-xs text text-gray-400"
                placeholder="Type or paste a paragraph of the body of your article here"
                label="Paragraph"
                rows="8"
                // initialValue={body}
                // textChanged={bodyChanged}
            />
        </div>
    )
}

export default ArticleBody;
