
"use client"
import Link from 'next/link';
import { useState } from 'react';
import Container from './Container';
import { CiSearch, CiShoppingBasket } from "react-icons/ci";
import Image from 'next/image';
import {
    SignInButton,
    SignedIn,
    SignedOut,
    UserButton
} from '@clerk/nextjs'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { IoMenuOutline } from 'react-icons/io5';
import { usePathname, useRouter } from 'next/navigation';


const Navber = () => {
    // const [isNavOpen, setIsNavOpen] = useState(false);
    // const [isSearchOpen, setIsSearchOpen] = useState(false);
    // const router=useRouter()
    const pathName=usePathname()
    const links = [
        {
            title: 'Home',
            path: '/'
        },
        {
            title: 'about',
            path: '/about'
        },
        {
            title: 'shop',
            path: '/shop'
        },
        {
            title: 'blog',
            path: '/blog'
        },
        {
            title: 'products',
            path: '/products'
        },
        {
            title: 'contact',
            path: '/contact'
        }
    ]
    // const handlelogin=()=>{
    //     router.push('/login')
    // }
    return (
        <header className=" bg-white shadow-md" >
            <div className=" bg-[#477018]">
                <Container>

                    <div className=" px-4 py-2">
                        <p className="text-sm  text-white">Free shipping for all order of $105</p>


                    </div>

                </Container>
            </div>
            {/* Top bar */}
            <Container>
                <div className='flex justify-between items-center py-8'>
                    {/* Logo */}
                    <h1 className="text-2xl font-bold">
                        <Link href="/" className="logo"> <Image src='/logo.png' alt='logo' width={100} height={100} priority></Image></Link>
                    </h1>


                    {/* Navbar */}
                    <nav className={` bg-white   hidden md:block`}>
                        <ul className="flex gap-6">
                            {links.map((link, idx) => (
                                <li key={idx}>
                                    <Link href={link.path}><p className={`${pathName===link.path && 'text-green-600'} hover:text-green-600 transition-all duration-700 capitalize`}>{link.title}</p></Link>
                                </li>
                            ))}

                        </ul>
                    </nav>

                    <div>
                        <ul className='flex items-center gap-6'>
                            <li><CiSearch /></li>
                            <li><CiShoppingBasket /></li>

                            <div>
                                <SignedOut>
                                    <SignInButton />
                                </SignedOut>
                                <SignedIn>
                                    <UserButton />
                                </SignedIn>
                            </div>
                            <div className='md:hidden'>
                                <Sheet>
                                    <SheetTrigger><IoMenuOutline /></SheetTrigger>
                                    <SheetContent side='right'>
                                        <SheetHeader>
                                            <SheetTitle>
                                                <div className='flex gap-6 justify-between mt-6'>
                                                    <h1 className="text-2xl font-bold">
                                                        <Link href="./index.html" className="logo"> <Image src='/logo.png' alt='logo' width={100} height={100} priority></Image></Link>
                                                    </h1> <div>
                                                        {/* <button onClick={handlelogin}>login</button> */}
                                                        <SignedOut>
                                                            <SignInButton />
                                                        </SignedOut>
                                                        <SignedIn>
                                                            <UserButton />
                                                        </SignedIn>
                                                    </div>
                                                </div> </SheetTitle>
                                            <div>
                                                <nav className={` bg-white  py-8 `}>
                                                    <ul className="flex gap-6 flex-col">
                                                        {links.map((link, idx) => (
                                                            <li key={idx}>
                                                                <Link href={link.path}><p className={`${pathName===link.path && 'text-green-600'} hover:text-green-600 transition-all duration-700 capitalize`}>{link.title}</p></Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </nav>

                                            </div>
                                        </SheetHeader>
                                    </SheetContent>
                                </Sheet>
                            </div>
                        </ul>


                    </div>
                </div>




            </Container>

            {/* Navbar wrapper */}

        </header>
    );
};

export default Navber;