import React from 'react';
import Image from 'next/image';
import krzesla from '../media/krzesla.jpg';
import krzeslo from '../media/krzeslo.jpg';
import kanapa from '../media/kanapa.jpg';
import draussen from '../media/draussen.jpg';
import Button from './Button';

const ContactSection = () => {
  return (
    <div
      style={{
        backgroundColor: 'black',
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '30px',
          padding: '30px 50px 30px 50px',
          alignContent: 'center',
          justifyContent: 'center',
        }}
      >
        <Image src={krzesla.src} alt='image' width={300} height={250} />
        <Image src={kanapa.src} alt='image' width={300} height={250} />
        <Image src={draussen.src} alt='image' width={300} height={250} />
        <Image src={krzeslo.src} alt='image' width={300} height={250} />
      </div>
      <div style={{ display: 'flex' }}>
        <div
          style={{
            color: 'white',
            padding: '50px',
            lineHeight: 2,
            textAlign: 'justify',
          }}
        >
          <p className='heading'>Kontakt</p>
          <p>
            Sie haben Fragen zu unseren Leistungen oder möchten einen Termin
            vereinbaren? Rufen Sie uns einfach un vereinbaren Sie einen Termin.
          </p>
          <Button text='Jetzt Termin buchen!' isAction='telephone' />

          <br />
          <br />

          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2659.407494701102!2d16.327020876201978!3d48.19876647125028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d077427071d7f%3A0xaa57558f5ff38d6d!2sTOTU%20Hair%20%26%20Beauty%20Salon!5e0!3m2!1sde!2sat!4v1717204092406!5m2!1sde!2sat'
            width='600'
            height='450'
            style={{ border: 0 }}
            allowfullscreen=''
            loading='lazy'
            referrerpolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>
        <div
          style={{
            color: 'white',
            padding: '50px',
            lineHeight: 2,
            textAlign: 'justify',
          }}
        >
          <p className='heading'>Telefon</p>
          <p>0676 6188223</p>
          <p className='heading'>Adresse </p>
          <p>
            Märzstraße 42, Tür 2 1150 Wien Öffentliche Anfahrt: U3
            Schweglerstraße oder Buslinie 12A, Station Schweglerstraße
          </p>
          <p className='heading'>Öffnungszeiten </p>
          <ul>
            <li> Montag – Freitag: 08:00-19:00</li>
            <li>Samstag: 08:00-14:00</li>
          </ul>
          <br />
          <br />
          <br />
          <a href='https://vbdev.at/'>Website-Programmierung</a>
        </div>
        <div style={{ backgroundColor: 'white', padding: '50px' }}>
          <p>Impressum</p> <p>Datenschutz</p> <p>Cookie-Einstellungen</p>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
