import BanefitH2 from '@/components/BanefitH2';
import BannerH2 from '@/components/banner/BannerH2';
import CategoryProdects from '@/components/CategoryProdects';
import CategorySlider from '@/components/CategorySlider';
import Choose from '@/components/Choose';
import FeaturedProducts from '@/components/FeaturedProducts';
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
        </div>
    );
};

export default page;