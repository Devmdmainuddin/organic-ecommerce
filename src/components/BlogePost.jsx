import React from 'react';
import BlogCard from './card/BlogCard';

const BlogePost = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-[130px]'>
            <BlogCard></BlogCard>
            <BlogCard></BlogCard>
            <BlogCard></BlogCard>
        </div>
    );
};

export default BlogePost;