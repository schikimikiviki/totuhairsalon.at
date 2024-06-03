import React from 'react';
import Kundin1 from '../media/1.jpg';
import Kundin2 from '../media/2.jpg';
import Kundin3 from '../media/3.jpg';
import Image from 'next/image';

const ReviewSection = (props) => {
  return (
    <div className='review-div'>
      <div className='review-text'>
        <p className='heading'>
          {props.isPolish
            ? 'Nasi klienci i klientki'
            : 'Unsere Kundinnen und Kunden'}{' '}
        </p>
        <p>
          {props.isPolish
            ? 'Zadowolenie naszych klientów jest naszym najwyższym priorytetem. Wiemy, że piękno dla każdego oznacza coś innego – zgodnie z tym projektujemy naszą codzienną pracę. Obejmuje to osobiste porady i spełnienie indywidualnych życzeń. Sprawdź zdjęcia, aby rzucić okiem na naszą pracę! '
            : 'Die Zufriedenheit unserer Kundinnen und Kunden ist unser höchstes Gebot. Wir wissen, dass Schönheit für jeden etwas Anderes bedeutet – dementsprechend gestalten wir unsere tägliche Arbeit. Dazu gehören eine persönliche Typberatung und die Erfüllung individueller Wünsche. Sehen Sie sich die Fotos an, um einen Einblick in unsere Arbeit zu erhalten!'}
        </p>
        <p>
          {props.isPolish
            ? 'Nie jesteś pewien, czy jesteśmy dla Ciebie odpowiednim salonem fryzjerskim? Przyjdź i zobacz naszą pracę na własne oczy! Nasza klientela to bardzo zróżnicowane osoby - jesteśmy pewni, że znajdziemy odpowiednie rozwiązanie dla Twoich potrzeb.'
            : 'Sie sind sich nicht sicher, ob wir der richtige Frisörsalon für Sie sind? Kommen Sie vorbei und lassen Sie sich selbst von unserer Arbeit überzeugen! Zu unserer Klientel gehören die verschiedensten Menschen – wir sind uns sicher, dass wir auch für Ihre Bedürfnisse die richtige Lösung finden.'}
        </p>
      </div>
      <div style={{ padding: '50px', display: 'flex', gap: '30px' }}>
        <Image src={Kundin1.src} alt='image' width={200} height={350} />
        <div className='more-clients'>
          <Image src={Kundin2.src} alt='image' width={200} height={350} />
        </div>
        <div className='more-clients'>
          <Image src={Kundin3.src} alt='image' width={200} height={350} />
        </div>

        {/* <Button text='Mehr Fotos' isAction='page' /> */}
      </div>
    </div>
  );
};

export default ReviewSection;
