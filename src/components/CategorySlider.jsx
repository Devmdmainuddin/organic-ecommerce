"use client"
import Image from "next/image";
import Container from "./Container";
import category from "@/app/httpActions/category/data";


const CategorySlider = () => {
  return (
    <div className="mt-[130px]">
      <Container>
      <div className="flex flex-wrap justify-center gap-6">
        {category?.map((item,idx)=><div key={idx} className="w-[170px] group rounded-[10px] hover:bg-[#632D2D]  transition-all duration-500">
          <div className="relative  w-[170px] h-[141px]  ">
            <Image src={item.image}
              alt={item.title}
              fill
              objectFit="cover"
              className="w-full h-full rounded-[10px]"></Image>
          </div>
          <h2 className="text-lg font-semibold leading-6 text-center text-gray-800 group-hover:text-white py-3">{item.title}</h2>
        </div>)}
        
      </div>
      </Container>
      
    </div>
  );
};

export default CategorySlider;