import React from 'react';
import Heading from './heading';

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
                                {products?.map((item, index) => <ProductCard key={index} item={item}></ProductCard>)}

                            </div>
                        </div>
                    </main>
                </div>


            </Container>


        </div>
    );
};

export default Trending;







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
 
