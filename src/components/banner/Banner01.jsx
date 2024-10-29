import React from 'react';
import Container from '../Container';
import Image from 'next/image';

const Banner01 = () => {
    return (
        <div>
            <Container>
                <div className="mt-[50px] flex flex-wrap gap-[18px] justify-center">
                    <div className="image">
                        <div className="relative w-[558px]  h-[300px]">
                            <Image src="/ban1.jpeg" alt="" layout="fill" objectFit="cover" className="" />
                        </div>
                    </div>
                    <div className="image">
                    <div className="relative w-[558px]  h-[300px]">
                            <Image src="/ban1.jpeg" alt="" layout="fill" objectFit="cover" className="" />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Banner01;