import { Rating } from '@smastrom/react-rating';
import Image from 'next/image';
import React from 'react';
import '@smastrom/react-rating/style.css'
import { FaInstagramSquare, FaPinterestSquare, FaRegHeart, FaTwitterSquare } from 'react-icons/fa';
import { IoGitCompareOutline } from 'react-icons/io5';
import { RiShoppingBagLine } from "react-icons/ri";
import { ImFacebook2 } from "react-icons/im";
import Container from '@/components/Container';
const page = ({ params }) => {
    console.log(params.slug);
    const singleProduct = products.find(product => product.slug === params.slug);
    console.log(singleProduct);
    return (
        <div className='mt-9'>

            <Container>
                <div className='flex gap-6 flex-wrap justify-center'>
                    <div className="image flex gap-6 items-center flex-col md:flex-row ">
                        <div className="relative w-[390px] md:w-[461px] h-[385px] md:h-[597px] ">
                            <Image src={singleProduct?.image} alt='product' fill objectFit="cover" className=' ' />
                        </div>
                        <div className='flex md:flex-col gap-2 md:gap-6 flex-row'>
                            <div className="relative w-[130px] h-[130px] md:w-[170px] md:h-[183px] ">
                                <Image src={singleProduct?.image} alt='product' fill objectFit="cover" className=' ' />
                            </div>
                            <div className="relative w-[130px] h-[130px] md:w-[170px] md:h-[183px]">
                                <Image src={singleProduct?.image} alt='product' fill objectFit="cover" className=' ' />
                            </div>
                            <div className="relative w-[130px] h-[130px] md:w-[170px] md:h-[183px]">
                                <Image src={singleProduct?.image} alt='product' fill objectFit="cover" className=' ' />
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        <h2 className='text-[#282828] font-inter text-[25px] font-semibold leading-[30px]'>{singleProduct.name}</h2>
                        <div className='flex gap-5 items-center mt-4'>

                            <Rating
                                style={{ maxWidth: 120 }}
                                value={singleProduct.rating}
                                readOnly
                            />

                            <p className='text-[#676767] font-inter text-[16px] font-normal leading-[30px] '> <span>{singleProduct.reviews}</span> Reviews</p>
                            <p className='text-[#282828] font-inter text-[16px] font-bold leading-[30px]'>Brand: <span className='text-[#676767]'>Organic</span></p>
                        </div>
                        <p className='text-[#676767] font-inter text-[16px] font-normal leading-[30px] mt-5'>{singleProduct.description}</p>
                        <p className='text-[#f47806] font-inter text-[25px] font-semibold leading-[30px] mt-[30px]'>${singleProduct.price}</p>
                        <div className='flex gap-5 items-center mt-5 justify-between'>
                            <button className='rounded-[10px] py-[14px] px-8 border '> <span>-</span> <span className='mx-6'>1 Kg</span>  <span>+</span> </button>
                            <button className="bg-[#F47606] rounded-[10px] py-[14px] px-8 text-white font-inter text-[20px] font-semibold leading-[28px] flex gap-2 items-center"><RiShoppingBagLine />  Add to cart</button>
                        </div>
                        <button className='bg-[#477018] w-full rounded-[10px] py-[14px] px-8 text-white font-inter text-[20px] font-semibold leading-[28px] mt-5'>Buy Now</button>
                        <div className='flex gap-5 items-center mt-5 justify-between'>
                            <button className='border  rounded-[10px] py-[13px] px-[22px]  text-[#676767] font-inter text-[16px] font-normal leading-[30px] flex gap-2 items-center'> <FaRegHeart /> Add to wishlist </button>
                            <button className="border  rounded-[10px] py-[13px] px-[22px]  text-[#676767] font-inter text-[16px] font-normal leading-[30px] flex gap-2 items-center"><IoGitCompareOutline />  Add to Compare</button>
                        </div>
                        <h3 className='text-[#282828] font-semibold text-[16px] leading-[30px] mt-4'>Category: <span className='font-normal text-[#676767]'>Organic</span> </h3>
                        <h3 className='text-[#282828] font-semibold text-[16px] leading-[30px] mt-4'>Tags: <span className='font-normal text-[#676767]'> Food,organic,vegetables,fresh</span> </h3>
                        <div className='flex gap-3 items-center mt-4 border-b pb-7'>
                            <h2 className='text-[#282828] font-semibold text-[16px] leading-[30px] '>Share: </h2>
                            <ul className='flex gap-3 items-center'>
                                <li ><ImFacebook2 className='text-[40px]' /></li>
                                <li><FaTwitterSquare className='text-[40px]' /></li>
                                <li><FaInstagramSquare className='text-[40px]' /></li>
                                <li><FaPinterestSquare className='text-[40px]' /></li>
                            </ul>
                        </div>
                        <div className='border-b py-4'>
                        <h2 className="text-[#282828] font-inter text-[20px] font-semibold leading-[30px] ">Sold by : <span>WPDISDB</span></h2>
                        <ul className='mt-5 custom-list list-disc list-inside'>
                            <li className="text-[#676767] font-inter text-[16px] font-normal leading-[30px]"> 100% Natural</li>
                            <li className="text-[#676767] font-inter text-[16px] font-normal leading-[30px]">Increases resistance</li>
                            <li className="text-[#676767] font-inter text-[16px] font-normal leading-[30px]">No growth hormones are used</li>
                            <li className="text-[#676767] font-inter text-[16px] font-normal leading-[30px]">No artificial Chemicals</li>
                        </ul>
                        </div>
                       
                    </div>
                </div>
            </Container>

        </div>
    );
};

export default page;

export const products = [
    {
        "id": 1,
        "name": "Wireless Headphones",
        "slug": "wireless-headphones",
        "description": "Bluetooth-enabled noise-cancelling headphones with a 10-hour battery life.",
        "price": 59.99,
        "category": "Electronics",
        "stock": 120,
        "image": "https://picsum.photos/200/300?random=1",
        "rating": 4.5,
        "reviews": 234
    },
    {
        "id": 2,
        "name": "Smartphone",
        "slug": "5g-smartphone",
        "description": "5G smartphone with 128GB storage, 48MP camera, and AMOLED display.",
        "price": 699.99,
        "category": "Mobile",
        "stock": 45,
        "image": "https://picsum.photos/200/300?random=2",
        "rating": 4.7,
        "reviews": 1542
    },
    {
        "id": 3,
        "name": "Laptop Backpack",
        "slug": "laptop-backpack",
        "description": "Water-resistant laptop backpack with padded compartments for extra protection.",
        "price": 29.99,
        "category": "Accessories",
        "stock": 75,
        "image": "https://picsum.photos/200/300?random=3",
        "rating": 4.3,
        "reviews": 567
    },
    {
        "id": 4,
        "name": "Smart Watch",
        "slug": "smart-watch",
        "description": "Fitness tracking smartwatch with heart rate monitor and GPS.",
        "price": 149.99,
        "category": "Wearables",
        "stock": 30,
        "image": "https://picsum.photos/200/300?random=4",
        "rating": 4.6,
        "reviews": 822
    },
    {
        "id": 5,
        "name": "Gaming Mouse",
        "slug": "gaming-mouse",
        "description": "High-precision gaming mouse with customizable RGB lighting and 6 programmable buttons.",
        "price": 49.99,
        "category": "Gaming",
        "stock": 200,
        "image": "https://picsum.photos/200/300?random=5",
        "rating": 4.8,
        "reviews": 1320
    },
    {
        "id": 6,
        "name": "4K TV",
        "slug": "4k-tv",
        "description": "55-inch 4K UHD Smart TV with HDR and built-in streaming apps.",
        "price": 499.99,
        "category": "Home Entertainment",
        "stock": 18,
        "image": "https://picsum.photos/200/300?random=6",
        "rating": 4.7,
        "reviews": 2104
    },
    {
        "id": 7,
        "name": "Bluetooth Speaker",
        "slug": "bluetooth-speaker",
        "description": "Portable Bluetooth speaker with deep bass, 360-degree sound, and 12-hour battery life.",
        "price": 79.99,
        "category": "Audio",
        "stock": 80,
        "image": "https://picsum.photos/200/300?random=7",
        "rating": 4.4,
        "reviews": 640
    },
    {
        "id": 8,
        "name": "Fitness Tracker",
        "slug": "fitness-tracker",
        "description": "Waterproof fitness tracker with heart rate monitor and sleep tracking.",
        "price": 59.99,
        "category": "Wearables",
        "stock": 150,
        "image": "https://picsum.photos/200/300?random=8",
        "rating": 4.2,
        "reviews": 742
    },
    {
        "id": 9,
        "name": "Mechanical Keyboard",
        "slug": "mechanical-keyboard",
        "description": "Mechanical keyboard with customizable RGB lighting and blue switches.",
        "price": 89.99,
        "category": "Gaming",
        "stock": 90,
        "image": "https://picsum.photos/200/300?random=9",
        "rating": 4.9,
        "reviews": 1034
    },
    {
        "id": 10,
        "name": "Portable Charger",
        "slug": "portable-charger",
        "description": "10000mAh portable charger with dual USB output and fast charging support.",
        "price": 24.99,
        "category": "Accessories",
        "stock": 300,
        "image": "https://picsum.photos/200/300?random=10",
        "rating": 4.6,
        "reviews": 423
    }
];