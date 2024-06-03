import React from 'react';
import coverImage from '../media/cover-image.jpg';
import Button from './Button';
import Image from 'next/image';

const InfoSection = (props) => {
  return (
    <div className='info-section'>
      <div className='background-image'>
        <Image
          src={coverImage.src}
          alt='image'
          width={1000}
          height={800}
          style={{ width: '100%', height: 'inherit' }}
        />
      </div>
      <div className='text-content'>
        <div className='text-inner'>
          <p className='heading'>
            {props.isPolish
              ? 'Salon fryzjerski i kosmetyczny ToTu'
              : 'ToTu Hair & Beauty Salon'}
          </p>
          <p>
            {props.isPolish
              ? 'Witamy w wielojęzycznym Salonie Fryzjerskim i Urody ToTu w 15. dzielnicy Wiednia! '
              : 'Willkommen im vielsprachigen Hair & Beauty Salon ToTu im 15. Bezirk in Wien!'}
          </p>

          <p>
            {props.isPolish
              ? 'Od 2018 roku pracujemy nad zaoferowaniem naszym klientom wyjątkowego doświadczenia. Dla nas obejmuje to przede wszystkim jedno: kompetentne doradztwo. '
              : 'Seit 2018 arbeiten wir daran, unseren Kundinnen und Kunden ein besonderes Erlebnis zu bieten. Dazu gehört für uns vor allem eines: eine kompetente Beratung.'}
          </p>

          <p>
            {props.isPolish
              ? 'W salonie czekają na Ciebie inne wspaniałe zabiegi, od klasycznych strzyżenia po zabiegi balayage i keratynowe. Zadbane są również o zadbane dłonie, ponieważ paznokcie są wypieszczone francuskim, szelakowym lub kamyczkami i uzyskuje się odpowiedni dla Ciebie wygląd. '
              : 'Im Salon erwarten Sie vom klassischen Haarschnitt, über Balayage bis hin zur Keratinbehandlung einige weitere tolle Treatments. Auch für gepflegte Hände ist gesorgt, denn mit French, Shellac oder Steinchen werden Ihre Fingernägel verwöhnt und so der zu Ihnen passende Look erreicht.'}
          </p>
          <p>{props.isPolish ? 'Zapraszamy!' : ' Schauen Sie vorbei!'}</p>
          <br />
          <Button
            text={
              props.isPolish
                ? 'Zarezerwuj termin już teraz'
                : 'Jetzt Termin buchen!'
            }
            isAction='telephone'
          />
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
