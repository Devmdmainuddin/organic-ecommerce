import React from 'react';
import Container from './Container';
import Image from 'next/image';

const Hero01 = () => {
    return (
        <div>
            <Container>
                <div className='flex gap-6 flex-col lg:flex-row'>
                    <div>
                        <div className="relative w-full lg:w-[468px] xl:w-[558px] h-[700px]">
                            <Image src="/h1.jpeg" alt="" layout="fill"  objectFit="cover"  className='' />
                        </div>
                    </div>
                    <div>
                        <div className="relative w-full    xl:w-[558px] h-[338px]">
                            <Image src="/h2.jpeg" alt="" layout="fill"  objectFit="cover" className='' />
                        </div>
                        <div className="flex gap-6 mt-6 flex-col sm:flex-row">
                            <div className="relative w-full lg:w-[267px] h-[338px]">
                                <Image
                                    src="/h3.jpeg"
                                    alt=""
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded"
                                />
                            </div>
                            <div className="relative w-full lg:w-[267px] h-[338px]">
                                <Image
                                    src="/h4.jpeg"
                                    alt=""
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded"
                                />
                            </div>
                        </div>


                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Hero01;