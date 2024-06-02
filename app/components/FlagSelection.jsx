'use client';
import React, { useState } from 'react';
import polska from '../media/polska.svg';
import niemcy from '../media/niemcy.jpg';
import Image from 'next/image';
import check from '../media/check.png';

const FlagSelection = ({ onLanguageChange }) => {
  const [isPolish, setIsPolish] = useState(false);

  const handleClickPolish = () => {
    setIsPolish(true);
    onLanguageChange(true);
  };

  const handleClickGerman = () => {
    setIsPolish(false);
    onLanguageChange(false);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        backgroundColor: '#2E2E2E',
        color: 'white',
        fontSize: '11px',
        margin: '10px !important',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '3px',
        }}
      >
        <Image
          src={check.src}
          alt='image'
          width={10}
          height={15}
          className={`${isPolish ? '' : 'invisible'}`}
        />
        <Image
          src={polska.src}
          alt='image'
          width={30}
          height={15}
          onClick={handleClickPolish}
          style={{ cursor: 'pointer' }}
        />
        <p>Polski</p>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '3px',
          justifyContent: 'center',
        }}
      >
        <Image
          src={check.src}
          alt='image'
          width={10}
          height={15}
          className={`${isPolish ? 'invisible' : ''}`}
        />
        <Image
          src={niemcy.src}
          alt='image'
          width={30}
          height={15}
          onClick={handleClickGerman}
          style={{ cursor: 'pointer' }}
        />
        <p>Deutsch</p>
      </div>
    </div>
  );
};

export default FlagSelection;
