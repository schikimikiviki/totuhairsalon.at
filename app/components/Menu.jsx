import React from 'react';

const Menu = (props) => {
  return (
    <div className='Menu'>
      <a href='#' className='links selected'>
        {props.isPolish
          ? 'Nasi klienci i klientki'
          : 'Unsere Kundinnen und Kunden'}
      </a>
      <a className='links' href='#'>
        {props.isPolish ? 'Nasze produkty' : '  Unsere Produkte'}
      </a>
      <a className='links ' href='#'>
        {props.isPolish ? 'Manicure' : 'Nageldesign'}
      </a>
      <a className='links' href='#'>
        {props.isPolish ? 'O nas' : ' Unser Team'}
      </a>
      <a className='links' href='#'>
        {props.isPolish ? 'Nasze studio' : 'Unser Studio'}
      </a>
      <a className='links' href='#'>
        Kontakt
      </a>
    </div>
  );
};

export default Menu;
