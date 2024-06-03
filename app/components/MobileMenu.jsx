import React, { useState } from 'react';
import Image from 'next/image';
import Hamburger from '../media/hamburger.png';

const MobileMenu = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const expandMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div style={{ position: 'relative' }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '70px',
          paddingTop: '10px',
        }}
      >
        <Image
          src={Hamburger.src}
          alt='Hamburger menu icon'
          width={60}
          height={60}
          onClick={expandMenu}
          style={{ cursor: 'pointer' }}
        />
      </div>
      {isMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '80px',
            right: '0',
            backgroundColor: 'white',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            borderRadius: '8px',
            zIndex: 10,
            width: '200px',
          }}
        >
          <ul style={{ listStyle: 'none', padding: '10px', margin: '0' }}>
            <li>
              <a
                href='#'
                style={{
                  textDecoration: 'none',
                  color: '#333',
                  display: 'block',
                  padding: '10px 0',
                }}
              >
                {props.isPolish
                  ? 'Nasi klienci i klientki'
                  : 'Unsere Kundinnen und Kunden'}
              </a>
            </li>
            <li>
              <a
                href='#'
                style={{
                  textDecoration: 'none',
                  color: '#333',
                  display: 'block',
                  padding: '10px 0',
                }}
              >
                {props.isPolish ? 'Nasze produkty' : '  Unsere Produkte'}
              </a>
            </li>
            <li>
              <a
                href='#'
                style={{
                  textDecoration: 'none',
                  color: '#333',
                  display: 'block',
                  padding: '10px 0',
                }}
              >
                {props.isPolish ? 'Manicure' : 'Nageldesign'}
              </a>
            </li>
            <li>
              <a
                href='#'
                style={{
                  textDecoration: 'none',
                  color: '#333',
                  display: 'block',
                  padding: '10px 0',
                }}
              >
                {props.isPolish ? 'O nas' : ' Unser Team'}
              </a>
            </li>
            <li>
              <a
                href='#'
                style={{
                  textDecoration: 'none',
                  color: '#333',
                  display: 'block',
                  padding: '10px 0',
                }}
              >
                {props.isPolish ? 'Nasze studio' : 'Unser Studio'}
              </a>
            </li>
            <li>
              <a
                href='#'
                style={{
                  textDecoration: 'none',
                  color: '#333',
                  display: 'block',
                  padding: '10px 0',
                }}
              >
                Kontakt
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
