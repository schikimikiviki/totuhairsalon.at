import React, { useState } from 'react';
import headerImage from '../media/header.jpg';
import facebook from '../media/fb.png';
import telephone from '../media/phone.png';
import map from '../media/maps-icon.png';
import GrowIcon from './GrowIcon';
import FlagSelection from './FlagSelection';
import Menu from './Menu';
import Image from 'next/image';
import croppedLogo from '../media/cropped-logo2.png';
import MobileMenu from './MobileMenu';

const Header = ({ sendIsPolish }) => {
  const [isPolish, setIsPolish] = useState(false);

  const Icons = [
    {
      icon: facebook,
      width: 40,
      height: 40,
      isLink: true,
      link: 'https://www.facebook.com/totuhairsalon',
    },
    {
      icon: telephone,
      width: 40,
      height: 40,
      isLink: false,
    },
    {
      icon: map,
      width: 80,
      height: 80,
      isLink: true,
      link: 'https://maps.app.goo.gl/5BYGHExtxSSedVfy7',
      style: { marginLeft: '10px', marginTop: '-15px' },
    },
  ];

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
        <div className='icons-menu'>
          {Icons.map((icon, index) => (
            <GrowIcon
              key={index}
              isLink={icon.isLink}
              icon={icon.icon}
              width={icon.width}
              height={icon.height}
              style={icon.style}
              link={icon.link}
            />
          ))}
        </div>
        <div
          style={{
            padding: '20px',
            position: 'relative',
            zIndex: 2,
          }}
        >
          <FlagSelection onLanguageChange={updateLanguage} />
          <br />
          <br />

          <div className='menu-div'>
            <Menu isPolish={isPolish} />
          </div>
        </div>
      </div>
      <div className='mobile-menu-div'>
        <MobileMenu isPolish={isPolish} />
      </div>
    </>
  );
};

export default Header;
