import Image from 'next/image';
import React from 'react';

const BannerH2 = () => {
    return (
        <div>
            <div className="relative w-full h-[300px] md:h-[350px] lg:h-[450px] ">
                <Image src='/h2ban.jpeg' alt='product' layout="fill" objectFit="cover" className=' ' />
            </div>
        </div>
    );
};

export default BannerH2;