import React from 'react'
import Link from 'next/link'
import MenuIcon from '@mui/icons-material/Menu';
const categories = [
    {name:'Anxiety', slug: 'anxiety'},
    {name:'Stress', slug: 'stress'},
    {name:'Depression', slug: 'depression'},

]

const Header = () => {
    return (
        <div className='container mx-auto px-1 md:mb-8'>

            <div className='w-full text-center  px-4  '>

                <div className='hidden md:float-left md:contents'>
                    <div className='float-left text-4xl text-white '>
                    Test
                    </div>
                </div>

                <div className='md:float-center mt-10'>
                    <Link href='/'>
                        <span className='cursor-pointer text-center font-bold text-4xl text-white'>
                            Mental Health Guide

                        </span>
                    </Link>

                </div>

                <div className='float-right bg-pink-300'>
                <div className='space-between'>
                    <span className='transition transform duration-1000 cursor-pointer hover:text-white'>Depression</span>
                    <span className='mx-4'>Anxiety</span>
                    <span className='mr-4'>Stress</span>
                    <span className=''>All</span>
                    </div>

    </div>
                

                <div className='border-b w-full text-center inline-block border-white-400 py-6 md:py-8'></div>
                

            </div>
            
        </div>
    )
}

export default Header
