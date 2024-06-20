'use client';

import { useState } from 'react';
import Link from 'next/link';
import HeaderMinimal from '@/app/components/HeaderMinimal';
import BlogPost from '../components/BlogPost';
import postsData from '../blogposts/posts.json';

export default function Blogpage() {
  const [isPolish, setIsPolish] = useState(false);

  const updateLanguage = (isPolish) => {
    setIsPolish(isPolish);
    console.log('Globally changed language, give language to children');
  };

  let newLayout = {
    width: '200px',
    height: '200px',
    overflow: 'hidden',
    position: 'relative',
  };

  return (
    <main>
      <HeaderMinimal sendIsPolish={updateLanguage} />

      <div className='post-inner'>
        <p>
          <Link href='/'>Home</Link> &gt;
          {isPolish ? 'Posty' : 'Blogbeiträge'}
        </p>

        <div className='blog-grid'>
          {postsData.posts.map((post, index) => (
            <div
              style={{
                border: '1px solid black',
                padding: '10px',
                backgroundColor: '#dcdcdc',
              }}
              key={index}
            >
              <BlogPost
                post={post}
                isPolish={isPolish}
                propLayout={newLayout}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
