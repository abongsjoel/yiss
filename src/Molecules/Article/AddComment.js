import React from 'react';

// import Para from '../../Atoms/Para';
import Button from '../../Atoms/Button';
import H2 from '../../Atoms/H2';

const AddComment = () => (
    <div className="mt-10"> 
        <H2 text="Leave a Reply" />
        <div className="my-5">
            <textarea 
                rows="4" 
                placeholder="Comments" 
                // defaultValue="Comments" 
                className="bg-gray-300 w-4/5 rounded-lg text-sm p-2 text-gray-600 outline-none focus:shadow-outline"
            ></textarea>
        </div>
        <Button text="Post Comment" btnColor="bg-main-500" link='' />
    </div>
);

export default AddComment;