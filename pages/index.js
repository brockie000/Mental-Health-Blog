import Head from 'next/head'
import Html from 'next/document'
import AboutWidget from '../components/AboutWidget';
import { PostCard, Categories, PostWidget, SuggestionWidget, Header, Navbar} from "../components/index"
import { getPosts } from '../services';


export default function Home({posts}) {

  const smallWidget = () => {
    return(
      <div className='text-white'>
        Test
      </div>
    )
  }

  return (
    <html lang="en">
    <Head>
        <title>Mental Health Blog</title>
        <meta name="description" content="Home Page for Alex Gilbody's Blog" />
        <link rel="icon" href="/favicon.ico" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2210519429558196"
        crossorigin="anonymous"></script>
      </Head>

      <Navbar />
  
    <div className="container mx-auto px-10 mb-8">
      

      

        <div className='text-center  border-t mb-5 mt-5'>
          <span className='text-3xl text-white'>New Posts</span>
        </div>

      <div className='invisible sm:visible grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className=' lg:col-span-8 col-span-1'>
        {posts.map((post) => <PostCard post={post.node} key={post.title}/>)}
        </div>

        <div className="lg:col-span-4">
          <div className='flex lg:flex-col lg:sticky relative top-8'>
            <div className='w-1/2 lg:w-full'>
            <AboutWidget />
            </div>
            <div className='w-1/2 lg:w-full'>
            <SuggestionWidget />
            </div>
            
          </div>
      </div>

      </div>
    </div>
    </html>
  )
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: {posts}
  }
}