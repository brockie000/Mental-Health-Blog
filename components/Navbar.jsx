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
                    <span className='cursor-pointer text-center font-bold text-3xl text-white'>
                        Mental Health Guide
                    </span>
                </Link>
            </div>

            <div className='invisible md:visible mr-10 flex-1' >
                <div className='mt-1 float-right space-between mr-10'>
                    <span className='transition transform duration-500 cursor-pointer hover:text-white'>Depression</span>
                    <span className='mx-4'>Anxiety</span>
                    <span className='mr-4'>Stress</span>
                    <span className=''>All</span>
                </div>
            </div>

            <div className='visible md:invisible'>
                V
            </div>
        </div>
    )
}

export default Navbar
