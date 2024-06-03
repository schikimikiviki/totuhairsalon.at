'use client';
import React, { useState } from 'react';
import headerImage from '../media/header.jpg';
import FlagSelection from './FlagSelection';
import Image from 'next/image';
import croppedLogo from '../media/cropped-logo2.png';

const HeaderMinimal = ({ sendIsPolish }) => {
  const [isPolish, setIsPolish] = useState(false);

  const updateLanguage = (isPolish) => {
    setIsPolish(isPolish ? true : false);
    sendIsPolish(isPolish);
  };

  return (
    <>
      <div
        style={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'space-between',
          height: '400px',
        }}
      >
        <div className='background-header'>
          <Image
            src={headerImage.src}
            alt='image'
            layout='fill'
            objectFit='cover'
          />
        </div>
        <div className='mobile-logo'>
          <Image
            src={croppedLogo.src}
            alt='image'
            width={1000}
            height={800}
            style={{ width: '100%', height: '300px' }}
          />
        </div>
        <div
          style={{
            padding: '20px',
            position: 'absolute',
            zIndex: 2,
            right: '20px',
            top: '20px',
            zIndex: 2,
            width: '300px',
          }}
        >
          <FlagSelection onLanguageChange={updateLanguage} />
        </div>
      </div>
    </>
  );
};

export default HeaderMinimal;
