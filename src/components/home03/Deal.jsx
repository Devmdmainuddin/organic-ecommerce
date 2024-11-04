import Image from "next/image";
import Container from "../Container";


const Deal = () => {
    return (
        <div className="mt-[130px]">
            <Container>
                <div className="flex justify-between items-center flex-col md:flex-row">
                <h2 className="text-[#282828] font-inter text-[35px] font-bold leading-[42px]">Deal of the week</h2>
                <ul className="flex gap-3">
                    <li className="w-[70px] h-[70px] bg-[#f47606] rounded-[10px] p-[11px] text-white font-inter text-[20px] font-bold leading-[24px] flex flex-col justify-center items-center"><span>45</span> Days</li>
                    <li className="w-[70px] h-[70px] bg-[#F9F9F9] rounded-[10px] p-[11px] text-[#f47606] font-inter text-[20px] font-bold leading-[24px] flex flex-col justify-center items-center"><span>20</span>Hour</li>
                    <li className="w-[70px] h-[70px] bg-[#f47606] rounded-[10px] p-[11px] text-white font-inter text-[20px] font-bold leading-[24px] flex flex-col justify-center items-center"><span>30</span>Min</li>
                    <li className="w-[70px] h-[70px] bg-[#F9F9F9] rounded-[10px] p-[11px] text-[#f47606] font-inter text-[20px] font-bold leading-[24px] flex flex-col justify-center items-center"><span>30</span>Sec</li>
                </ul>
                </div>
                <div className="relative w-full h-[300px] md:h-[350px] lg:h-[450px] mt-[50px]">
                <Image src='/H3BAN.jpeg' alt='product' fill objectFit="cover" className=' ' />
            </div>
                
            </Container>
        </div>
    );
};

export default Deal;