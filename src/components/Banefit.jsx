import Image from 'next/image';
import React from 'react';

const Banefit = () => {

    return (
        <section className="Banefit-3 relative overflow-hidden py-6">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap">
            <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
            <div className="mb-3 mx-auto  w-[51px] h-[51px]  flex items-center justify-center">
                <Image src='/b-1.png' alt='image' width={100} height={50}></Image>
              </div>
              <h2 className="text-[25px] font-semibold leading-[30px] tracking-[0%] text-center text-[rgb(40,40,40)] font-inter">Discount</h2>
              <p className="text-[16px] font-normal leading-[28px] tracking-[0%] text-center text-[#676767] font-inter">Every week new sales</p>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
            <div className="mb-3 mx-auto  w-[51px] h-[51px]  flex items-center justify-center">
                <Image src='/b-2.png' alt='image' width={100} height={50}></Image>
              </div>
              <h2 className="text-[25px] font-semibold leading-[30px] tracking-[0%] text-center text-[rgb(40,40,40)] font-inter">Support 24/7</h2>
              <p className="text-[16px] font-normal leading-[28px] tracking-[0%] text-center text-[#676767] font-inter">Dedicated support</p>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
            <div className="mb-3 mx-auto  w-[51px] h-[51px]  flex items-center justify-center">
                <Image src='/b-3.png' alt='image' width={100} height={50}></Image>
              </div>
              <h2 className="text-[25px] font-semibold leading-[30px] tracking-[0%] text-center text-[rgb(40,40,40)] font-inter">Free Delivery</h2>
              <p className="text-[16px] font-normal leading-[28px] tracking-[0%] text-center text-[#676767] font-inter">For all orders over $99</p>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 p-4">
              <div className="mb-3 mx-auto  w-[51px] h-[51px]  flex items-center justify-center">
                <Image src='/b-4.png' alt='image' width={100} height={50}></Image>
              </div>
              <h2 className="text-[25px] font-semibold leading-[30px] tracking-[0%] text-center text-[rgb(40,40,40)] font-inter">Secure Payment</h2>
              <p className="text-[16px] font-normal leading-[28px] tracking-[0%] text-center text-[#676767] font-inter">100% Secure payment</p>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Banefit;