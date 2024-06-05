'use client';

import { useState } from 'react';
import HeaderMinimal from '../components/HeaderMinimal';
import Link from 'next/link';

export default function Info() {
  const [isPolish, setIsPolish] = useState(false);

  const updateLanguage = (isPolish) => {
    setIsPolish(isPolish);
    console.log('Globally changed language, give language to children');
  };

  return (
    <main>
      <HeaderMinimal sendIsPolish={updateLanguage} />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: '100px',
        }}
      >
        <p className='heading'>
          {isPolish ? 'Stopka redakcyjna' : 'Impressum'}{' '}
        </p>
        <p>
          {isPolish
            ? 'Odpowiedzialna za treści na tej stronie jest:'
            : ' Für die Inhalte auf dieser Webseite verantwortlich ist:'}
        </p>
        <p>
          <b>Aneta Griego</b>
        </p>
        <p>Märzstraße 42/2 </p>
        <p>{isPolish ? '1150 Wiedeń' : '1150 Wien'} </p>
        <p>Telefon: 0676 6188223</p>
        <br />
        <br />

        <a href='https://vbdev.at/'>
          {isPolish ? 'Strona internetowa' : 'Website-Programmierung'}
        </a>

        <br />
        <br />
        <Link href='/'>
          {isPolish ? 'Powrót do strony głównej' : 'Zur Hauptseite zurück'}
        </Link>
        <br />
        <br />
      </div>
    </main>
  );
}
