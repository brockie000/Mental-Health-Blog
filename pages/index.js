import Head from 'next/head'
import AboutWidget from '../components/AboutWidget';
import { PostCard, Categories, PostWidget} from "../components/index"
import { getPosts } from '../services';

export default function Home({posts}) {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Mental Health Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <div className='text-center font-semibold border-b mb-5'>
          <h2>Featured Posts</h2>
        </div>

      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-1'>
        {posts.map((post) => <PostCard post={post.node} key={post.title}/>)}
        </div>

        <div className="lg:col-span-4">
          <div className='lg:sticky relative top-8'>
            <AboutWidget />
            
          </div>
      </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: {posts}
  }
}