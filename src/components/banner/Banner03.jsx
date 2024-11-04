import React from 'react';
import Container from '../Container';
import Image from 'next/image';

const Banner03 = () => {
    return (
        <div className='mt-[130px]'>
            <Container>
                <div className='flex flex-wrap justify-center  gap-6'>
                    <div className="relative  w-[364px] h-[250px]">
                        <Image src="/h4.jpeg" alt="" fill objectFit="cover" className=""
                        />
                    </div>
                    <div className="relative  w-[364px] h-[250px]">
                        <Image src="/h4.jpeg" alt="" fill objectFit="cover" className=""
                        />
                    </div>
                    <div className="relative  w-[364px] h-[250px]">
                        <Image src="/h4.jpeg" alt="" fill objectFit="cover" className=""
                        />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Banner03;