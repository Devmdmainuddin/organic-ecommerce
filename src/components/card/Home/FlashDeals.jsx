import Image from 'next/image';
import React from 'react';

const FlashDeals = () => {
    return (
        <div className="w-full lg:h-[643px] relative rounded-[25px] mt-[130px]">
                <Image src='/banner.jpg' alt='' fill objectFit="content" ></Image>
        </div>
    );
};

export default FlashDeals;