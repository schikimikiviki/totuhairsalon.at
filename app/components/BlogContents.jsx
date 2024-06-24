'use client';

import { useState, useEffect } from 'react';
import HeaderMinimal from './HeaderMinimal';
import Link from 'next/link';
import Image from 'next/image';
import NotFoundSection from './NotFoundSection';

export default function BlogContents({ postData }) {
  const [isPolish, setIsPolish] = useState(false);
  const [isPage, setIsPage] = useState(true);
  const [imagePath, setImagePath] = useState('');

  const updateLanguage = (isPolish) => {
    setIsPolish(isPolish);
    console.log('Globally changed language, give language to children');
  };

  useEffect(() => {
    if (postData && postData.blogImage) {
      setImagePath('/' + postData.blogImage);
    } else {
      setIsPage(false);
    }
  }, [postData]);

  // return 404
  if (!postData) {
    return <NotFoundSection />;
  }

  return (
    <>
      <HeaderMinimal sendIsPolish={updateLanguage} />

      {isPage && (
        <div className='post-inner-blog'>
          <div style={{ paddingRight: '50px' }}>
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
            <div className='text-blog'>
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
            </div>
            <br />
          </div>
          <div className='image-box'>
            {imagePath && (
              <Image
                src={imagePath}
                alt='image'
                width={750}
                height={500}
                style={{ width: 'inherit', height: 'inherit' }}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}
