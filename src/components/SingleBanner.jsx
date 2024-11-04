import React from 'react';
import Container from './Container';
import Image from 'next/image';

const SingleBanner = () => {
    return (
        <div className='mt-[130px]'>
            <div className="relative max-w-full h-[300px] md:h-[400px]">
                <Image
                    src="/sin.jpeg"
                    alt="banner image"
                    fill
                    objectFit="cover"
                    priority={true}
                />
            </div>
        </div>
    );
};

export default SingleBanner;