'use client';

import { useState } from 'react';
import HeaderMinimal from './HeaderMinimal';
import Link from 'next/link';
import Image from 'next/image';

export default function BlogContents({ postData }) {
  const [isPolish, setIsPolish] = useState(false);

  const updateLanguage = (isPolish) => {
    setIsPolish(isPolish);
    console.log('Globally changed language, give language to children');
  };

  let imagePath = '/' + postData.blogImage;

  return (
    <>
      <HeaderMinimal sendIsPolish={updateLanguage} />
      <div className='post-inner'>
        <p>
          <Link href='/'>Home</Link> &gt;
          {isPolish ? postData.titlePL : postData.title}
        </p>
        <p className='heading'>
          {isPolish ? postData.titlePL : postData.title}
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
          ? postData.headingsPL.map((heading, index) => (
              <div key={`section-${index}`}>
                <p className={`heading-${heading.level}`}>
                  <u>{heading.text}</u>
                </p>
                <p>{postData.paragraphsPL[index]}</p>
              </div>
            ))
          : postData.headings.map((heading, index) => (
              <div key={`section-${index}`}>
                <p className={`heading-${heading.level}`}>
                  <u>{heading.text}</u>
                </p>
                <p>{postData.paragraphs[index]}</p>
              </div>
            ))}
        <br />
        <div className='image-box'>
          <Image
            src={imagePath}
            alt='image'
            width={750}
            height={500}
            style={{ width: 'inherit', height: 'inherit' }}
          />
        </div>
      </div>
    </>
  );
}
