import React, { useState } from 'react'

const Categories = () => {
    const [categories, setCategories] = useState([])
    return (
        <div className='bg-white shadow-2xl rounded-lg p-0 lg:p-8 pb-12 mb-8'>
            <div className='text-center'>
            Categories
            </div>

            <div className='border-4 rounded-lg pl-2'>
                Anxiety
            </div>
            

        </div>
    )
}

export default Categories
