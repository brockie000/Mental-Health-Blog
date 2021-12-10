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
            <div className='w-full text-center inline-block px-4  '>

                <div className='hidden md:float-left md:contents'>
                    <div className='float-left text-4xl text-white mt-8'>
                    Test
                    </div>
                </div>

                <div className='md:float-center mt-8 block'>
                    <Link href='/'>
                        <span className='cursor-pointer text-center font-bold text-4xl text-white'>
                            Mental Health Guide

                        </span>
                    </Link>

                </div>
                

                <div className='border-b w-full text-center inline-block border-white-400 py-6 md:py-8'></div>
                <div className='hidden md:float-center md:contents'>
                    {categories.map((category) => (
                        <Link key={category.slug} href={`/category/${category.slug}`} passHref>
                            <span className="md:float-center mt-2 align-middle text-white ml-4 font-semmibold cursor-pointer">
                                {category.name}

                            </span>
                        </Link>
                    ))}

                </div>

            </div>
            
        </div>
    )
}

export default Header
