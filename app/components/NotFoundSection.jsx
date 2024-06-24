import HeaderMinimal from './HeaderMinimal';
import { useState } from 'react';
import Link from 'next/link';

const NotFoundSection = (props) => {
  const [isPolish, setIsPolish] = useState(false);

  const updateLanguage = (isPolish) => {
    setIsPolish(isPolish);
    console.log('Globally changed language, give language to children');
  };

  return (
    <>
      <HeaderMinimal sendIsPolish={updateLanguage} />
      <div
        style={{
          padding: '100px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <p className='heading'>
          {isPolish ? 'Nie znaleziony strony' : 'Seite nicht gefunden'}
        </p>
        <Link href='/'>
          {isPolish ? 'Powrót do strony głównej' : 'Zur Hauptseite zurück'}
        </Link>
      </div>
    </>
  );
};

export default NotFoundSection;
