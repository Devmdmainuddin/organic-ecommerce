import Image from 'next/image';
import React from 'react';
import Container from './Container';

const BanefitH2 = () => {
    return (
        <section className="Banefit-3  overflow-hidden mt-[130px]">
        <Container>
          <div className="flex flex-wrap gap-6">
            <div className="w-full md:w-[267px] px-12 py-[88px] border rounded-[25px]">
              <div className="relative mb-3 mx-auto  w-[51px] h-[51px]  flex items-center justify-center">
                <Image src='/b-1.png' alt='image' width={100} height={50}></Image>
              </div>
              <h2 className="font-semibold text-[25px] leading-[30px]  text-center">Discount</h2>
              <p className="text-[16px] font-normal leading-[28px] tracking-[0%] text-center text-[#676767] font-inter">Every week new sales</p>
            </div>
            <div className="w-full md:w-[267px] px-12 py-[88px] border rounded-[25px]">
              <div className="relative mb-3 mx-auto  w-[51px] h-[51px]  flex items-center justify-center">
                <Image src='/b-2.png' alt='image' width={100} height={50}></Image>
              </div>
              <h2 className="font-semibold text-[25px] leading-[30px]  text-center">Support 24/7</h2>
              <p className="text-[16px] font-normal leading-[28px] tracking-[0%] text-center text-[#676767] font-inter">Dedicated support</p>
            </div>
            <div className="w-full md:w-[267px] px-12 py-[88px] border rounded-[25px]">
              <div className="relative mb-3 mx-auto  w-[51px] h-[51px]  flex items-center justify-center">
                <Image src='/b-3.png' alt='image' width={100} height={50}></Image>
              </div>
              <h2 className="font-inter font-semibold text-[25px] leading-[30px] text-center">Free Delivery</h2>
              <p className="text-[16px] font-normal leading-[28px] tracking-[0%] text-center text-[#676767] font-inter">For all orders over $99</p>
            </div>
            <div className="w-full md:w-[267px] px-[35px] py-[88px] border rounded-[25px] ">
              <div className="relative mb-3 mx-auto  w-[51px] h-[51px]  flex items-center justify-center">
                <Image src='/b-4.png' alt='image' width={100} height={50}></Image>
              </div>
              <h2 className="font-inter font-semibold text-[25px] leading-[30px] text-center">Secure Payment</h2>
              <p className="text-[16px] font-normal leading-[28px] tracking-[0%] text-center text-[#676767] font-inter">100% Secure payment</p>
            </div>
          </div>
        </Container>
    </section>
    );
};

export default BanefitH2;