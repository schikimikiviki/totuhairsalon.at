import React from 'react';
import BlogPost from './BlogPost';
import postsData from '../blog/[postTitle]/posts.json';
import Link from 'next/link';

const ProductSection = (props) => {
  const firstNPosts = postsData.posts.slice(0, 4);
  return (
    <div id='products' className='products-div'>
      <p className='heading'>
        {props.isPolish
          ? 'Nasze produkty i techniki'
          : 'Unsere Produkte und Techniken'}
      </p>
      <p>
        {props.isPolish
          ? 'Stosowane przez nas produkty charakteryzują się wysoką jakością i są zgodne z najnowszymi standardami i trendami. Nie szczędzimy kosztów ani wysiłku dla naszych klientów i używamy wyłącznie profesjonalnych produktów następujących marek:'
          : 'Die Produkte, die wir verwenden, sind qualitativ hochwertig und entsprechen den neuesten Standards und Trends. Für unsere Kundinnen und Kunden scheuen wir keine Kosten und Mühen und benutzen ausschließlich professionelle Produkte der folgenden Marken:'}
      </p>

      <div className='blogpost-section'>
        <div className='blogposts-nails'>
          {firstNPosts.map((post, index) => (
            <BlogPost key={index} post={post} isPolish={props.isPolish} />
          ))}
        </div>

        <Link href='/blogpage'>
          {props.isPolish ? 'Więcej postów' : 'Mehr Blogbeiträge'}
        </Link>
      </div>
    </div>
  );
};

export default ProductSection;
