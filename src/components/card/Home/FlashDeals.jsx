import Image from 'next/image';
import React from 'react';

const FlashDeals = () => {
    return (
        <div className="w-full h-[643px] relative rounded-[25px] my-16">
                <Image src='/banner.jpg' alt='' layout="fill" objectFit="content" ></Image>
        </div>
    );
};

export default FlashDeals;