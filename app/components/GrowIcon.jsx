'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const GrowIcon = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    if (props.isLink) {
      //open the link - facebook or maps
      window.open(props.link);
      console.log(props.link);
    } else {
      window.location.href = 'tel:+43676206188223';
    }
  };

  return (
    <div
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        cursor: 'pointer',
        transform: isHovered ? 'scale(1.1)' : 'scale(1)',
        transition: 'transform 0.2s ease-in-out',
        transformOrigin: 'center',
        padding: '10px', // Increased padding for better spacing
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        ...props.style,
      }}
    >
      <Image
        src={props.icon.src}
        alt='icon'
        width={props.width}
        height={props.height}
      />
    </div>
  );
};

export default GrowIcon;
