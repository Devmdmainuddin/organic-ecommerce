import React from 'react';
import Heading from './heading';
import Image from 'next/image';
import ProductCard from './card/ProductCard';
import TrendingSidebar from './sidebar/TrendingSidebar';
import Container from './Container';
const Trending = () => {
    return (
        <div>
            <Heading text='Trending Products Category' className='mt-[130px]'></Heading>
<Container>
<div className='flex gap-6  mt-[50px]'>
                <aside>
                    <TrendingSidebar></TrendingSidebar>

                </aside>
                <main >
                    <div>
                        <div className='grid grid-cols-3 gap-4'>

                            <ProductCard></ProductCard>
                            <ProductCard></ProductCard>
                            <ProductCard></ProductCard>
                            <ProductCard></ProductCard>
                            <ProductCard></ProductCard>
                            <ProductCard></ProductCard>
                            <ProductCard></ProductCard>
                            <ProductCard></ProductCard>
                            <ProductCard></ProductCard>
                            <ProductCard></ProductCard>
                            <ProductCard></ProductCard>
                            <ProductCard></ProductCard>

                        </div>
                    </div>
                </main>
            </div>


</Container>
            

        </div>
    );
};

export default Trending;