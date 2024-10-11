
"use client"
import Link from 'next/link';
import { useState } from 'react';
import Container from './Container';
import { CiSearch, CiShoppingBasket } from "react-icons/ci";
const Navber = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    return (
        <header className=" bg-white shadow-md" >
            <div className=" bg-[#477018]">
                <Container>

                    <div className=" px-4 py-2">
                        <p className="text-sm text-center text-white">Free shipping for all order of $105</p>
                    </div>

                </Container>
            </div>
            {/* Top bar */}
            <Container>
                <div className='flex justify-between items-center'>
                    {/* Logo */}
                    <h1 className="text-2xl font-bold">
                        <Link href="./index.html" className="logo">Organ<span className="text-green-600">ica</span></Link>
                    </h1>


                    {/* Navbar */}
                    <nav className={` bg-white  py-8 hidden md:block`}>
                        <ul className="flex gap-6">
                            <li><Link href="/"><p className="hover:text-green-600 transition-all duration-700">Home</p></Link></li>
                            <li><Link href="/about"><p className="hover:text-green-600 transition-all duration-700">About</p></Link></li>
                            <li><Link href="/shop"><p className="hover:text-green-600 transition-all duration-700">Shop</p></Link></li>
                            <li><Link href="/blog"><p className="hover:text-green-600 transition-all duration-700">Blog</p></Link></li>
                            <li><Link href="/products"><p className="hover:text-green-600 transition-all duration-700">Products</p></Link></li>
                            <li><Link href="/contact"><p className="hover:text-green-600 transition-all duration-500">Contact</p></Link></li>
                        </ul>
                    </nav>
                    <div>
                        <ul className='flex items-center gap-6'>
                            <li><CiShoppingBasket /></li>
                            <li><CiSearch /></li>
                        </ul>


                    </div>
                </div>




            </Container>

            {/* Navbar wrapper */}

        </header>
    );
};

export default Navber;