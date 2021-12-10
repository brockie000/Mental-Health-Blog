import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from 'next/link'

const AboutWidget = () => {
    return (
        <div className='bg-white shadow-2xl rounded-lg p-0 lg:p-8 pb-12 mb-8'>
            <img src={'/alex(1).png'} className='object-contain shadow-lg rounded-lg md:w-full' />
            <div className='text-center mb-2 mt-2 font-semibold '>
                Hi, I'm Alex
            </div>
            <Link href={'/about'}>
                <div className='text-center transition cursor-pointer duration-500 hover:text-pink-600'>
                    Welcome to my mental health blog. if you would like to read more about me click here...
                </div>
            </Link>
            
            <div className='grid grid-cols-4 place-items-center pt-5 px-10'>

                <Link href={'https://www.instagram.com/alexgilbodyx/?hl=en'}>
                    <div className='cursor-pointer transition duration-500 transform hover:-translate-y-1'>
                    <InstagramIcon />
                    </div>
                </Link>

                <div className='cursor-pointer transition duration-500 transform hover:-translate-y-1'>
                    <FacebookIcon />
                </div>

                <div className='cursor-pointer transition duration-500 transform hover:-translate-y-1'>
                    <TwitterIcon />
                </div>

                <div className='cursor-pointer transition duration-500 transform hover:-translate-y-1'>
                    <LinkedInIcon />
                </div>

            </div>
        </div>
    )
}

export default AboutWidget
