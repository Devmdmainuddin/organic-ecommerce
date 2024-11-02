import Link from "next/link";
import Container from "./Container";
import Image from "next/image";


const Choose = () => {
    return (
        <div className="mt-[130px]">
            <Container>
                <h2 className="text-[#282828] text-center font-inter text-[35px] font-bold leading-[42px]">Why Choose Us</h2>
                <div className="mt-[50px] flex flex-wrap gap-6 justify-center">
                    <div className="w-[356px]">
                        <div className="image">
                            <div className="relative mx-auto w-[52px]  h-[53px]">
                                <Image src="/c1.png" alt="" layout="fill" objectFit="cover" className='' />
                            </div>
                        </div>
                        <div className="content mt-[30px]">
                            <h2 className="text-black font-inter text-lg font-semibold leading-6 tracking-normal text-center">100% Natural</h2>
                            <p className="mt-3 text-gray-600 font-inter text-base font-normal leading-7 tracking-normal text-center">Donec sollicitudin molestie malesuada. Lorem ipsum dolor sit amet,consectetur.</p>
                        </div>

                    </div>
                    <div className="w-[356px]">
                        <div className="image">
                            <div className="relative mx-auto w-[52px]  h-[53px]">
                                <Image src="/c2.png" alt="" layout="fill" objectFit="cover" className='' />
                            </div>
                        </div>
                        <div className="content mt-[30px]">
                            <h2 className="text-black font-inter text-lg font-semibold leading-6 tracking-normal text-center">100% Natural</h2>
                            <p className="mt-3 text-gray-600 font-inter text-base font-normal leading-7 tracking-normal text-center">Donec sollicitudin molestie malesuada. Lorem ipsum dolor sit amet,consectetur.</p>
                        </div>

                    </div>
                    <div className="w-[356px]">
                        <div className="image">
                            <div className="relative mx-auto w-[52px]  h-[53px]">
                                <Image src="/c3.png" alt="" layout="fill" objectFit="cover" className='' />
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