import React from 'react';
import aneta from '../media/aneta.jpg';
import Image from 'next/image';

const TeamSection = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '50px 80px 50px 80px',
      }}
    >
      <div style={{ padding: '50px', lineHeight: 2, textAlign: 'justify' }}>
        <p className='heading'>Unser Team </p>
        <p>
          Schön, dass Sie sich kurz die Zeit nehmen, um uns ein wenig kennen zu
          lernen. Unser Team besteht ausschließlich aus Spezialisten, die
          ausgebildet sind, um Sie in allen Themen rund um das Styling, die
          Pflege und das Färben von Haaren zu beraten.
        </p>
        <p>
          Sie stehen für uns im Mittelpunkt unserer Tätigkeit und es ist unser
          Ziel, dass Sie in unserem Salon bei jedem einzelnen unserer
          Mitarbeiter ein einzigartiges Friseur-Erlebnis erhalten, mit dem Sie
          sich rundum gut fühlen.
        </p>
        <p>
          Wenn Sie bisher noch nicht Kunde oder Kundin bei uns im Salon waren,
          würden wir uns sehr freuen, Sie bald persönlich begrüßen zu dürfen.
        </p>
        <p>Wir freuen uns auf Sie.</p>
        <p>Ihre Aneta Griego & Team</p>
      </div>
      <div style={{ padding: '50px' }}>
        <Image src={aneta.src} alt='image' width={750} height={500} />
      </div>
    </div>
  );
};

export default TeamSection;
