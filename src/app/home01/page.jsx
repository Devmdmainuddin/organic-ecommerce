import BanefitH2 from '@/components/BanefitH2';
import BannerH2 from '@/components/banner/BannerH2';
import CategorySlider from '@/components/CategorySlider';
import React from 'react';

const page = () => {
    return (
        <div>
           <BannerH2></BannerH2>
           <BanefitH2></BanefitH2>
            <CategorySlider></CategorySlider>
        </div>
    );
};

export default page;