import React from 'react'

const SuggestionWidget = () => {
    return (
        <div className='bg-white shadow-2xl rounded-lg p-0 lg:p-8 pb-12 mb-8'>
            <div className='border-b w-full pb-4 text-center'>
            Suggest a Topic
            </div>
            <div className='pt-4'>
                <textarea className='md:p-10 p-4 outline-none h-40 w-full rounded-lg mb-4 focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
                placeholder='If you would like to anonymously suggest a topic for me to talk about, please enter and submit here xx'
                />
                <div className='transition duration-500 transform hover:-translate-y-1 cursor-pointer hover:text-white bg-gray-300 text-center p-2 rounded-full'>
                    Submit
                </div>

                
            </div>
            
        </div>
    )
}

export default SuggestionWidget
