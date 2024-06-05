'use client';

import { useState } from 'react';
import HeaderMinimal from '@/app/components/HeaderMinimal';
import postsData from '../posts.json';
import Image from 'next/image';
import foehn from '../../media/foehn.jpg';
import Link from 'next/link';

export default function Sauna() {
  const [isPolish, setIsPolish] = useState(false);

  let postDetails = postsData.posts[3];

  const updateLanguage = (isPolish) => {
    setIsPolish(isPolish);
    console.log('Globally changed language, give language to children');
  };

  return (
    <main>
      <HeaderMinimal sendIsPolish={updateLanguage} />
      <div className='post-inner'>
        <p>
          <Link href='/'>Home</Link> &gt;
          {isPolish ? postDetails.titlePL : postDetails.title}
        </p>
        <p className='heading'>
          {isPolish ? postDetails.titlePL : postDetails.title}
        </p>
        <hr
          style={{
            width: '80%',
            textAlign: 'left',
            marginLeft: 0,
            height: '1px',
            color: 'black',
            backgroundColor: 'black',
          }}
        />
        {isPolish
          ? postDetails.headingsPL.map((heading, index) => (
              <div key={`section-${index}`}>
                <p className={`heading-${heading.level}`}>
                  <u>{heading.text}</u>
                </p>
                <p>{postDetails.paragraphsPL[index]}</p>
              </div>
            ))
          : postDetails.headings.map((heading, index) => (
              <div key={`section-${index}`}>
                <p className={`heading-${heading.level}`}>
                  <u>{heading.text}</u>
                </p>
                <p>{postDetails.paragraphs[index]}</p>
              </div>
            ))}
        <br />
        <div className='image-box'>
          <Image
            src={foehn.src}
            alt='image'
            width={500}
            height={250}
            style={{ width: 'inherit', height: 'inherit' }}
          />
        </div>
      </div>
    </main>
  );
}
