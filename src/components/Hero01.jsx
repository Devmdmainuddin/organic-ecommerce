import React from 'react';
import Container from './Container';
import Image from 'next/image';

const Hero01 = () => {
    return (
        <div>
            <Container>
                <div className='flex gap-6 flex-col lg:flex-row'>
                    <div>
                        <div className="relative w-full lg:w-[468px] xl:w-[558px]  md:h-[700px]">
                            {/*    */}
                            <Image src="/h1.jpeg" alt="" layout="fill"   objectFit="cover"  className='' />
                        </div>
                    </div>
                    <div>
                        <div className="relative w-full  xl:w-[558px] h-[338px]">
                            {/* w-full  xl:w-[558px] h-[338px] */}
                            <Image src="/h2.jpeg" alt="" layout="fill"  objectFit="cover" className='' />
                        </div>
                        <div className="flex gap-6 mt-6 flex-col sm:flex-row">
                            <div className="relative w-full lg:w-[267px] h-[338px]">
                                {/* w-full lg:w-[267px] h-[338px] */}
                                <Image  src="/h3.jpeg" alt="" layout="fill" objectFit="cover" className="rounded" />
                            </div>
                            <div className="relative w-full lg:w-[267px] h-[338px]">
                                <Image  src="/h4.jpeg"  alt=""  layout="fill"  objectFit="cover"  className="rounded"
                                />
                            </div>
                            {/* w-full lg:w-[267px] h-[338px] */}
                        </div>


                    </div>
                </div>
                {/* <div className="flex flex-col lg:flex-row gap-6">
                    <div className="relative w-full lg:max-w-[468px] xl:max-w-[558px]">
                        <Image src="/h1.jpeg" alt="Image 1" layout="fill" objectFit="cover" className="rounded-lg" />
                    </div>

                    <div className="flex flex-col gap-6">
                        <div className="relative w-full aspect-[16/9] xl:max-w-[558px]">
                            <Image src="/h2.jpeg" alt="Image 2" layout="fill" objectFit="cover" className="rounded-lg" />
                        </div>

                        <div className="flex gap-6 flex-col sm:flex-row">
                            <div className="relative w-full sm:max-w-[267px] aspect-[3/4]">
                                <Image src="/h3.jpeg" alt="Image 3" layout="fill" objectFit="cover" className="rounded-lg" />
                            </div>
                            <div className="relative w-full sm:max-w-[267px] aspect-[3/4]">
                                <Image src="/h4.jpeg" alt="Image 4" layout="fill" objectFit="cover" className="rounded-lg" />
                            </div>
                        </div>
                    </div>
                </div> */}
    
            </Container>
        </div>
    );
};

export default Hero01;