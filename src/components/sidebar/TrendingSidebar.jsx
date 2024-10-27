import Image from "next/image";


const TrendingSidebar = () => {
    return (
        <div>
            <div className="w-[267px]   ">
                <ul className="p-[22px] bg-[#FAFAFA] rounded-[25px]">
                    <li className="text-[#282828] font-inter text-[18px] font-semibold leading-[28px] flex gap-3 items-center hover:text-[#F47606] transition-all duration-500 "> <Image src='/c-1.png' alt='' width='47' height='50'></Image>Vegetable</li>
                    <li className="text-[#282828] font-inter text-[18px] font-semibold leading-[28px] mt-[15px] flex gap-3 items-center hover:text-[#F47606] transition-all duration-500 "> <Image src='/c-2.png' alt='' width='47' height='50'></Image>Fruits</li>
                    <li className="text-[#282828] font-inter text-[18px] font-semibold leading-[28px] mt-[15px] flex gap-3 items-center hover:text-[#F47606] transition-all duration-500"> <Image src='/c-3.png' alt='' width='47' height='50'></Image>Green Vegetable</li>
                    <li className="text-[#282828] font-inter text-[18px] font-semibold leading-[28px] mt-[15px] flex gap-3 items-center hover:text-[#F47606] transition-all duration-500"> <Image src='/c-4.png' alt='' width='47' height='50'></Image>Onion</li>
                    <li className="text-[#282828] font-inter text-[18px] font-semibold leading-[28px] mt-[15px] flex gap-3 items-center hover:text-[#F47606] transition-all duration-500"> <Image src='/c-5.png' alt='' width='47' height='50'></Image>Vegetable</li>
                    <li className="text-[#282828] font-inter text-[18px] font-semibold leading-[28px] mt-[15px] flex gap-3 items-center hover:text-[#F47606] transition-all duration-500"> <Image src='/c-6.png' alt='' width='47' height='50'></Image>Lemon</li>
                </ul>

                <div className="w-full h-[447px] relative rounded-[25px] mt-10">
                <Image src='/t-1.jpg' alt='' layout="fill" objectFit="cover" className=' rounded-[25px]'></Image>
                </div>
                <div className="w-full h-[447px] relative rounded-[25px] mt-10">
                <Image src='/t-2.jpg' alt='' layout="fill" objectFit="cover" className=' rounded-[25px]'></Image>
                </div>

            </div>
        </div>
    );
};

export default TrendingSidebar;