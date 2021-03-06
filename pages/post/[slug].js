import React from 'react'
import Head from 'next/head'
import { AboutWidget, Author, PostDetail, Comments, CommentsForm, RelatedPost } from '../../components'
import { getPosts, getPostDetails } from '../../services'


const PostDetails = ({post}) => {
    return (
        <div className='container mx-auto px-10 mb-8'>
            <Head>
            <title>{post.title}</title>
            <meta name="description" content="Home Page for Alex Gilbody's Blog" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
                <div className='col-span-1 lg:col-span-8' >
                    <PostDetail post={post} />
                    <CommentsForm slug={post.slug} />
                    <Comments slug={post.slug} />
                </div>

                <div className='col-span-1 lg:col-span-4' >
                    <div className='relative lg:sticky top-8'>
                        <RelatedPost />
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default PostDetails

export async function getStaticProps({params}) {
    const data = (await getPostDetails(params.slug));
    console.log(params)
  
    return {
      props: {post: data}
    }
  }

export async function getStaticPaths() {
    const posts = await getPosts();
    console.log(posts)
    return{
        paths: posts.map(({ node: {slug}}) => ({params: {slug}})),
        fallback: false,
    }
}