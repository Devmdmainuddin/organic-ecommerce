"use client"

import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard';
import Image from 'next/image';

const Offer = () => {
    const [items, setItems] = useState([]);
console.log(items);
    useEffect(() => {
      fetch('/fakeData.json')  // Fetch the JSON file from the public directory
        .then((res) => res.json())
        .then((data) => {
          setItems(data);
        })
        .catch((error) => console.error('Error fetching data:',error));
    }, []);
    return (
        <>
            <div className='flex gap-6 w-[1326px] mx-auto'>
                <aside className='w-[497px]'>
                    <div className="w-full h-[808px] relative rounded-lg ">
                        <Image src='/left.jpg' alt='' layout="fill" objectFit="cover" className=' rounded-[25px]'></Image>
                    </div>
                </aside>
                <main>
                    <ul className='flex gap-5'>
                        <li>Top Rated</li>
                        <li>Best Selling</li>
                        <li>On Sale</li>
                    </ul>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-[70px]'>
                       {items.slice(0,6).map((item,idx)=><ProductCard key={idx} item={item}></ProductCard>)}

                    </div>
                </main>
            </div>
            <div className='flex gap-6 w-[1326px] mx-auto mt-[130px]'>

                <main>
                    <ul className='flex gap-5'>
                        <li>Top Rated</li>
                        <li>Best Selling</li>
                        <li>On Sale</li>
                    </ul>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-[70px]'>
                    {items.slice(0,6).map((item,idx)=><ProductCard key={idx} item={item}></ProductCard>)}
                    </div>
                </main>
                <aside className='w-[497px]'>
                    <div className="w-full h-[808px] relative rounded-lg ">
                        <Image src='/left.jpg' alt='' layout="fill" objectFit="cover" className=' rounded-[25px]'></Image>
                    </div>
                </aside>
            </div>

        </>

    );
};

export default Offer;