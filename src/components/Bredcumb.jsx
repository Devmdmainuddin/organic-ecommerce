"use client"
import Link from "next/link";
import Container from "./Container";
import { useState, useEffect } from 'react';

const Bredcumb = () => {
    const [path, setPath] = useState('');

  useEffect(() => {
    // Only runs in the browser
    setPath(window.location.pathname.split("/")[1]);
  }, []);

    return (
        <div>
        <Container className='h-full'>
            <div className=''>
                <h2 className='text-[#262626] text-2xl md:text-5xl font-bold capitalize'>{path}</h2>
                <p></p>
                <ul className='flex items-center gap-2 mt-3'>
                    <li className='text-xl font-normal text-[#6D6D60] flex items-center'><Link href='/'>Home  </Link><span>{` - ${path}`}</span></li>

                </ul>
            </div>
        </Container>
    </div>
    );
};

export default Bredcumb;