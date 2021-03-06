import React from 'react';

import { useRouter } from 'next/router';

import { getCategories, getCategoryPost } from '../../services';
import { PostCard, Categories, Loader, AboutWidget, Navbar } from '../../components';

const CategoryPost = ({ posts }) => {
  const router = useRouter();
  console.log(router.query.slug)

  if (router.isFallback) {
    return (
      <div>
        Test
      </div>
    );
  }

  return (
    <div>
    <div className="container mx-auto px-10 mb-8">  
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <AboutWidget />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CategoryPost;

export async function getStaticProps({params}) {
  const posts = await getCategoryPost(params.slug);

  return {
    props: { posts }
  };
}

export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
}