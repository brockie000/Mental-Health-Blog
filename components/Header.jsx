import React from 'react'
import Link from 'next/link'
const categories = [
    {name:'Anxiety', slug: 'anxiety'},
    {name:'Stress', slug: 'stress'},

]

const Header = () => {
    return (
        <div className='container mx-auto px-1 mb-8'>
            <div className='border-b w-full text-center inline-block border-blue-400 py-8'>
                <div className='block'>
                    <Link href='/'>
                        <span className='cursor-pointer text-center font-bold text-4xl text-white'>
                            Mental Health Guide

                        </span>
                    </Link>

                </div>
                <div className='hidden md:float-left md:contents'>
                    {categories.map((category) => (
                        <Link key={category.slug} href={`/category/${category.slug}`}>
                            <span className="md:float-right mt-2 align-middle text-white ml-4 font-semmibold cursor-pointer">
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
