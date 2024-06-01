import React from 'react';
import headerImage from '../media/header.jpg';
import facebook from '../media/fb.png';
import telephone from '../media/phone.png';
import map from '../media/maps-icon.png';
import GrowIcon from './GrowIcon';
import FlagSelection from './FlagSelection';
import Menu from './Menu';

const Header = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${headerImage.src})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%',
    height: '400px',
    display: 'flex',
    justifyContent: 'space-between',
  };

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
      style: { marginLeft: '10px !important', marginTop: '-15px !important' },
    },
  ];

  return (
    <div style={backgroundImageStyle}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
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
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <FlagSelection />
        <Menu />
      </div>
    </div>
  );
};

export default Header;
