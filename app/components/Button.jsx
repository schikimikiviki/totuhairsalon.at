'use client';
import React, { useState } from 'react';

const Button = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    backgroundColor: isHovered ? '#d93030' : 'rgb(206, 106, 97)',
    padding: '20px',
    border: 'none',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '16px',
    cursor: 'pointer', // Change cursor to pointer on hover
    transform: isHovered ? 'scale(1.1)' : 'scale(1)', // Grow effect on hover
    transition: 'background-color 0.3s ease, transform 0.3s ease',
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    if (props.isAction == 'telephone') {
      //make call
      window.location.href = 'tel:+43676206188223';
    } else if (props.isAction == 'navigate') {
      props.onClick();
    } else {
      // open link
      window.open(props.link);
    }
  };

  return (
    <div>
      <button
        style={buttonStyle}
        onClick={props.onClick ? props.onClick : handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {props.text}
      </button>
    </div>
  );
};

export default Button;
