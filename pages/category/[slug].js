import React from 'react'
import Head from 'next/head'
import { getPosts, getPostDetails } from '../../services'
import { useRouter } from 'next/router';

const CategoryPage = () => {
    const router = useRouter();
    const category = router.query;
    console.log(category.slug)
    return (
        <div>
        <Head>
        <title>{category.slug}</title>
        <link rel="icon" href="/favicon.ico" />
        </Head>

        <div>
            Test
        </div>
            
        </div>
    )
}

export default CategoryPage