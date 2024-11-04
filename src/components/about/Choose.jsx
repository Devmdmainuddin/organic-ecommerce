import Link from "next/link";

import Image from "next/image";
import Container from "../Container";

const Choose = () => {
    return (
        <div className="mt-[130px]">
        <Container>
           
            <div className="mt-[50px] flex flex-wrap gap-1 justify-center relative">
                <div className=" bg-[url('/gb.png')] absolute top-0 left-0 w-full h-[157px] px-6">
               
                
                </div>
                <div className="w-[274px]">
                    <div className="image">
                        <div className="relative mx-auto w-[142.46px] h-[141.84px] ">
                            <Image src="/g1.png" alt="" fill objectFit="cover"  />
                        </div>
                    </div>
                    <div className="content mt-[30px]">
                        <h2 className="text-black font-inter text-lg font-semibold leading-6 tracking-normal text-center">100% Natural</h2>
                        <p className="mt-3 text-gray-600 font-inter text-base font-normal leading-7 tracking-normal text-center">Donec sollicitudin molestie malesuada. Lorem ipsum dolor sit amet,consectetur.</p>
                    </div>

                </div>
                <div className="w-[274px] mt-6">
                    <div className="image">
                        <div className="relative mx-auto w-[142.46px] h-[141.84px] ">
                            <Image src="/g2.png" alt="" fill objectFit="cover" className='' />
                        </div>
                    </div>
                    <div className="content mt-[30px]">
                        <h2 className="text-black font-inter text-lg font-semibold leading-6 tracking-normal text-center">100% Natural</h2>
                        <p className="mt-3 text-gray-600 font-inter text-base font-normal leading-7 tracking-normal text-center">Donec sollicitudin molestie malesuada. Lorem ipsum dolor sit amet,consectetur.</p>
                    </div>

                </div>
                <div className="w-[274px]">
                    <div className="image">
                        <div className="relative mx-auto w-[142.46px] h-[141.84px] ">
                            <Image src="/g3.png" alt="" fill objectFit="cover"  />
                        </div>
                    </div>
                    <div className="content mt-[30px]">
                        <h2 className="text-black font-inter text-lg font-semibold leading-6 tracking-normal text-center">100% Natural</h2>
                        <p className="mt-3 text-gray-600 font-inter text-base font-normal leading-7 tracking-normal text-center">Donec sollicitudin molestie malesuada. Lorem ipsum dolor sit amet,consectetur.</p>
                    </div>

                </div>
                <div className="w-[274px] mt-6">
                    <div className="image">
                        <div className="relative mx-auto w-[142.46px] h-[141.84px] ">
                            <Image src="/g4.png" alt="" fill objectFit="cover"  />
                        </div>
                    </div>
                    <div className="content mt-[30px]">
                        <h2 className="text-black font-inter text-lg font-semibold leading-6 tracking-normal text-center">100% Natural</h2>
                        <p className="mt-3 text-gray-600 font-inter text-base font-normal leading-7 tracking-normal text-center">Donec sollicitudin molestie malesuada. Lorem ipsum dolor sit amet,consectetur.</p>
                    </div>

                </div>
            </div>
        </Container>
    </div>
    );
};

export default Choose;