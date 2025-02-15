import BanefitH2 from '@/components/BanefitH2';
import BannerH2 from '@/components/banner/BannerH2';
import CategoryProdects from '@/components/CategoryProdects';
import CategorySlider from '@/components/CategorySlider';
import Choose from '@/components/Choose';
import FeaturedProducts from '@/components/FeaturedProducts';
import Blog from '@/components/home03/Blog';
import Deal from '@/components/home03/Deal';
import Products from '@/components/home03/Products';
import Testimonial from '@/components/home03/Testimonial';
import TopProducts from '@/components/home03/TopProducts';
import SingleBanner from '@/components/SingleBanner';
import React from 'react';

const page = () => {
    return (
        <div>
           <BannerH2></BannerH2>
           <BanefitH2></BanefitH2>
            <CategorySlider></CategorySlider>
            <FeaturedProducts></FeaturedProducts>
        <Choose></Choose>
        <SingleBanner></SingleBanner>
        <CategoryProdects></CategoryProdects>
        <Deal></Deal>
        <TopProducts></TopProducts>
        <Products></Products>
        <Testimonial></Testimonial>
        <Blog></Blog>
        </div>
    );
};

export default page;