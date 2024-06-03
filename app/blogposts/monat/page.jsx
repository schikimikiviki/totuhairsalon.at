'use client';

import { useState } from 'react';
import HeaderMinimal from '@/app/components/HeaderMinimal';
import postsData from '../posts.json';
import Image from 'next/image';
import monat1 from '../../media/monat1.jpg';
import monat2 from '../../media/monat2.jpg';
import monat3 from '../../media/monat3.jpg';
import monat4 from '../../media/monat4.jpg';

import Link from 'next/link';

export default function monat() {
  const [isPolish, setIsPolish] = useState(false);

  let postDetails = postsData.posts[4];

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
        <div className='image-box-2'>
          <Image
            src={monat1.src}
            alt='image'
            width={500}
            height={100}
            style={{ width: 'inherit', height: 'inherit' }}
          />
          <Image
            src={monat2.src}
            alt='image'
            width={500}
            height={100}
            style={{ width: 'inherit', height: 'inherit' }}
          />
        </div>
        <div className='image-box-2'>
          <Image
            src={monat3.src}
            alt='image'
            width={500}
            height={100}
            style={{ width: 'inherit', height: 'inherit' }}
          />
          <Image
            src={monat4.src}
            alt='image'
            width={500}
            height={100}
            style={{ width: 'inherit', height: 'inherit' }}
          />
        </div>
      </div>
    </main>
  );
}
