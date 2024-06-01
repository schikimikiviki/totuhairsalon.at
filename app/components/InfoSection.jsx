import React from 'react';
import coverImage from '../media/cover-image.jpg';
import Button from './Button';

const InfoSection = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${coverImage.src})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100%',
    height: '800px',
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={backgroundImageStyle}></div>
      <div style={{ padding: '50px', lineHeight: 2, textAlign: 'justify' }}>
        <p className='heading'>ToTu Hair & Beauty Salon</p>
        <p>
          Willkommen im vielsprachigen Hair & Beauty Salon ToTu im 15. Bezirk in
          Wien!
        </p>

        <p>
          Seit 2018 arbeiten wir daran, unseren Kundinnen und Kunden ein
          besonderes Erlebnis zu bieten. Dazu gehört für uns vor allem eines:
          eine kompetente Beratung.
        </p>

        <p>
          Im Salon erwarten Sie vom klassischen Haarschnitt, über Balayage bis
          hin zur Keratinbehandlung einige weitere tolle Treatments. Auch für
          gepflegte Hände ist gesorgt, denn mit French, Shellac oder Steinchen
          werden Ihre Fingernägel verwöhnt und so der zu Ihnen passende Look
          erreicht. Schauen Sie vorbei!
        </p>
        <br />
        <Button text='Jetzt Termin buchen!' isAction='telephone' />
      </div>
    </div>
  );
};

export default InfoSection;
