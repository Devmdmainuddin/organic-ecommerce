import BanefitH2 from '@/components/BanefitH2';
import BannerH2 from '@/components/banner/BannerH2';
import CategoryProdects from '@/components/CategoryProdects';
import CategorySlider from '@/components/CategorySlider';
import Choose from '@/components/Choose';
import FeaturedProducts from '@/components/FeaturedProducts';
import Deal from '@/components/home03/Deal';
import Products from '@/components/home03/Products';
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
        </div>
    );
};

export default page;