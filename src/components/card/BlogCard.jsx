import Image from 'next/image';
import React from 'react';

const BlogCard = () => {
    return (
        <div>
            <div className="image">
                <Image src='/c-2.png' alt="" width='300' height='300' />
            </div>
            <div className="content">
                <div>
                    <h4>  by <span>admin</span></h4>
                    <h4>  vegetable</h4>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;