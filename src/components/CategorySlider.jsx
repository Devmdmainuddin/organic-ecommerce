import Image from "next/image";
import Container from "./Container";


const CategorySlider = () => {
  return (
    <div className="mt-[130px]">
      <Container>
      <div className="flex flex-wrap justify-center gap-6">
        <div className="w-[170px]  rounded-[10px] hover:bg-[#632D2D] transition-all duration-500">
          <div className="relative  w-[170px] h-[141px]  ">
            <Image src='/ca1.jpg'
              alt='image'
              fill
              objectFit="cover"
              className="w-full h-full rounded-[10px]"></Image>
          </div>
          <h2 className="text-lg font-semibold leading-6 text-center text-gray-800  py-3">Secure Payment</h2>

        </div>
        <div className="w-[170px] hover:bg-[#632D2D] rounded-[10px] transition-all duration-500">
          <div className="relative  w-[170px] h-[141px]  ">
            <Image src='/ca2.jpg'
              alt='image'
              fill
              objectFit="cover"
              className="w-full h-full rounded-[10px]"></Image>
          </div>
          <h2 className="text-lg font-semibold leading-6 text-center text-gray-800 py-3">Secure Payment</h2>

        </div>
        <div className="w-[170px] hover:bg-[#632D2D] rounded-[10px] transition-all duration-500">
          <div className="relative  w-[170px] h-[141px]  ">
            <Image src='/ca4.jpg'
              alt='image'
              fill
              objectFit="cover"
              className="w-full h-full rounded-[10px]"></Image>
          </div>
          <h2 className="text-lg font-semibold leading-6 text-center text-gray-800 py-3">Secure Payment</h2>

        </div>
        <div className="w-[170px] hover:bg-[#632D2D] rounded-[10px] transition-all duration-500">
          <div className="relative  w-[170px] h-[141px]  ">
            <Image src='/ca5.jpg'
              alt='image'
              fill
              objectFit="cover"
              className="w-full h-full rounded-[10px]"></Image>
          </div>
          <h2 className="text-lg font-semibold leading-6 text-center text-gray-800 py-3">Secure Payment</h2>

        </div>
        <div className="w-[170px] hover:bg-[#632D2D] rounded-[10px] transition-all duration-500">
          <div className="relative  w-[170px] h-[141px]  ">
            <Image src='/ca3.jpg'
              alt='image'
              fill
              objectFit="cover"
              className="w-full h-full rounded-[10px]"></Image>
          </div>
          <h2 className="text-lg font-semibold leading-6 text-center text-gray-800 py-3">Secure Payment</h2>

        </div>
        <div className="w-[170px] hover:bg-[#632D2D] rounded-[10px] transition-all duration-500">
          <div className="relative  w-[170px] h-[141px]  ">
            <Image src='/ca6.jpg'
              alt='image'
              fill
              objectFit="cover"
              className="w-full h-full rounded-[10px]"></Image>
          </div>
          <h2 className="text-lg font-semibold leading-6 text-center text-gray-800 py-3">Secure Payment</h2>

        </div>
      
      </div>
      </Container>
      
    </div>
  );
};

export default CategorySlider;