import About from '@/components/About';
import Choose from '@/components/about/Choose';
import HeroShop from '@/components/banner/HeroShop';

import Blog from '@/components/home03/Blog';
import Testimonial from '@/components/home03/Testimonial';
import React from 'react';

const page = () => {
    return (
        <div>
           <HeroShop />
           <About></About>
           <Choose></Choose>
           <Testimonial></Testimonial>
           <Blog></Blog>
        </div>
    );
};

export default page;