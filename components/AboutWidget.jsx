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
            <div className='text-center'>
                Hi, Im Alex
            </div>
            <div className='text-center'>
                Welcome to my mental health blog. if you wouldd like to read more about me click here...
            </div>
            
            <div className='grid grid-cols-4 place-items-center pt-5'>
                <Link href={'https://www.instagram.com/alexgilbodyx/?hl=en'}>
                    <InstagramIcon className='cursor-pointer'/>
                </Link>
                <FacebookIcon className='cursor-pointer' />
                <TwitterIcon className='cursor-pointer' />
                <LinkedInIcon className='cursor-pointer' />

            </div>
        </div>
    )
}

export default AboutWidget
