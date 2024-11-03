"use client";

import React, { useState } from 'react';
import HeroShop from '@/components/banner/HeroShop';
import FilterBar from '@/components/shop/FilterBar';
import Container from '@/components/Container';

const ShopPage = () => {
    const [sortOrder, setSortOrder] = useState('new');
    const [number, setNumber] = useState(6);
    const [activeMulti, setActiveMulti] = useState(true);

    const handleByNew = () => setSortOrder('new');
    const handleByOld = () => setSortOrder('old');

    const selectNumber = (event) => {
        const numberConverted = Number(event.target.value);
        setNumber(numberConverted);
    };

    return (
        <div>
            <HeroShop />
            <FilterBar
                setActiveMulti={setActiveMulti}
                handleByNew={handleByNew}
                handleByOld={handleByOld}
                selectNumber={selectNumber}
            />
            <Container>
                <div class=" min-h-screen grid grid-cols-1 md:grid-cols-[250px_1fr] mt-[50px]">

                    <aside class="">
                        <nav class="space-y-4 border p-4">
                            <a href="#" class="block text-lg font-semibold">Home</a>
                            <a href="#" class="block text-lg font-semibold">About</a>
                            <a href="#" class="block text-lg font-semibold">Services</a>
                            <a href="#" class="block text-lg font-semibold">Contact</a>
                        </nav>
                    </aside>
                    <main class="p-4">
                        <h1 class="text-2xl font-bold mb-4">Main Content</h1>
                        <p>Your main content goes here.</p>
                    </main>
                </div>
            </Container>


        </div>
    );
};

export default ShopPage;
