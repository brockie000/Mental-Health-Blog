import React from 'react'
import Link from 'next/link'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Navbar = () => {
    return (
        <div className='mt-10 mb-10 p-4 ml-12 flex'>

            <div className='flex-1 flex ml-12 place-items-left'>
            <Link href={'https://www.instagram.com/alexgilbodyx/?hl=en'}>
                    <div className='cursor-pointer transition duration-500 transform hover:-translate-y-1 pr-9'>
                    <InstagramIcon />
                    </div>
                </Link>

                <div className='cursor-pointer transition duration-500 transform hover:-translate-y-1 pr-9'>
                    <FacebookIcon />
                </div>

                <div className='cursor-pointer transition duration-500 transform hover:-translate-y-1 pr-9'>
                    <TwitterIcon />
                </div>

                <div className='cursor-pointer transition duration-500 transform hover:-translate-y-1'>
                    <LinkedInIcon />
                </div>
            </div>

            <div className='text-center flex-1'>
                <Link href='/'>
                    <h1 className='cursor-pointer text-center font-bold text-3xl text-white'>
                        Mental Health Guide
                    </h1>
                </Link>
            </div>

            <div className='invisible md:visible mr-10 flex-1' >
                <div className='mt-1 float-right space-between mr-10'>
                    <Link href='/category/depression'>
                        <a href='/category/depression'>
                            <span className='transition transform duration-500 cursor-pointer hover:text-white'>Depression</span>
                        </a>
                    </Link>
                    <Link href='/category/anxiety'>
                        <span className='mx-4 transition transform duration-500 cursor-pointer hover:text-white'>Anxiety</span>
                    </Link>
                    <Link href='/category/stress'>
                        <span className='mr-4 transition transform duration-500 cursor-pointer hover:text-white'>Stress</span>
                    </Link>
                    <Link href='/category/all'>
                        <span className='transition transform duration-500 cursor-pointer hover:text-white'>All</span>
                    </Link>
                </div>
            </div>

            <div className='visible md:invisible'>
                V
            </div>
        </div>
    )
}

export default Navbar
