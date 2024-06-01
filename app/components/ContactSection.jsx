import React from 'react';
import Kundin1 from '../media/1.jpg';
import Kundin2 from '../media/2.jpg';
import Kundin3 from '../media/3.jpg';
import Image from 'next/image';

const ContactSection = () => {
  return (
    <div
      style={{
        backgroundColor: 'black',
        padding: '50px',
        display: 'flex',
        minHeight: '700px',
        lineHeight: 2,
        textAlign: 'justify',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={{ backgroundColor: 'white', padding: '50px' }}>
        <p className='heading'>Unsere Kundinnen und Kunden </p>
        <p>
          Die Zufriedenheit unserer Kundinnen und Kunden ist unser höchstes
          Gebot. Wir wissen, dass Schönheit für jeden etwas Anderes bedeutet –
          dementsprechend gestalten wir unsere tägliche Arbeit. Dazu gehören
          eine persönliche Typberatung und die Erfüllung individueller Wünsche.
          Sehen Sie sich die Fotos an, um einen Einblick in unsere Arbeit zu
          erhalten!
        </p>
        <p>
          Sie sind sich nicht sicher, ob wir der richtige Frisörsalon für Sie
          sind? Kommen Sie vorbei und lassen Sie sich selbst von unserer Arbeit
          überzeugen! Zu unserer Klientel gehören die verschiedensten Menschen –
          wir sind uns sicher, dass wir auch für Ihre Bedürfnisse die richtige
          Lösung finden.
        </p>
      </div>
      <div style={{ padding: '50px', display: 'flex', gap: '30px' }}>
        <Image src={Kundin1.src} alt='image' width={200} height={350} />
        <Image src={Kundin2.src} alt='image' width={200} height={350} />
        <Image src={Kundin3.src} alt='image' width={200} height={350} />
        {/* <Button text='Mehr Fotos' isAction='page' /> */}
      </div>
    </div>
  );
};

export default ContactSection;
