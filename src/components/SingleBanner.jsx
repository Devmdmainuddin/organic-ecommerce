import React from 'react';
import Container from './Container';
import Image from 'next/image';

const SingleBanner = () => {
    return (
        <div className='mt-[130px]'>
            <div className="relative w-full h-[400px]">
                <Image
                    src="/sin.jpeg"
                    alt="banner image"
                    layout="fill"
                    objectFit="cover"
                    priority={true}
                />
            </div>
        </div>
    );
};

export default SingleBanner;