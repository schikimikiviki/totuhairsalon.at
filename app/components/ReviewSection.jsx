import React from 'react';
import Kundin1 from '../media/1.jpg';
import Kundin2 from '../media/2.jpg';
import Kundin3 from '../media/3.jpg';
import Kundin4 from '../media/5.jpg';
import Kundin5 from '../media/6.jpg';
import Kundin6 from '../media/7.jpg';
import Kundin7 from '../media/10.jpg';
import Kundin8 from '../media/12.jpg';

import Link from 'next/link';
import InfiniteCarousel from './InfiniteCarousel';

const ReviewSection = (props) => {
  const itemsPhotoCarousel = [
    Kundin1.src,
    Kundin2.src,
    Kundin3.src,
    Kundin4.src,
    Kundin5.src,
    Kundin6.src,
    Kundin7.src,
    Kundin8.src,
  ];

  const itemsReviewCarousel = [
    'Sehr schön ausgestattet,  Elegant, Sauber und bin immer dort zufrieden. Top!',
    'Sehr gutes Service, immer zuverlässig und toll. Nettes Personal, bin immer zufrieden!',
    'Cool ! Der beste Friseur in Wien.',
  ];

  const itemsReviewCarouselPL = [
    'Bardzo ładnie wyposażony, elegancki, czysty salon. Zawsze jestem z niego zadowolona. ',
    'Bardzo dobra obsługa, zawsze niezawodna i świetna. Miły personel, zawsze zadowolony!',
    'Super! Najlepszy fryzjer w Wiedniu',
  ];

  return (
    <>
      <div className='review-div' id='clients'>
        <div className='review-text'>
          <p className='heading'>
            {props.isPolish
              ? 'Nasi klienci i klientki'
              : 'Unsere Kundinnen und Kunden'}{' '}
          </p>
          <p>
            {props.isPolish
              ? 'Zadowolenie naszych klientów i klientek jest naszym najwyższym priorytetem. Wiemy, że piękno dla każdego oznacza coś innego – zgodnie z tym projektujemy naszą codzienną pracę. Obejmuje to osobiste porady i spełnienie indywidualnych życzeń. Sprawdź zdjęcia, aby rzucić okiem na naszą pracę! '
              : 'Die Zufriedenheit unserer Kundinnen und Kunden ist unser höchstes Gebot. Wir wissen, dass Schönheit für jeden etwas Anderes bedeutet – dementsprechend gestalten wir unsere tägliche Arbeit. Dazu gehören eine persönliche Typberatung und die Erfüllung individueller Wünsche. Sehen Sie sich die Fotos an, um einen Einblick in unsere Arbeit zu erhalten!'}
          </p>
          <p>
            {props.isPolish
              ? 'Nie jesteś pewny/a, czy jesteśmy dla Ciebie odpowiednim salonem fryzjerskim? Przyjdź i zobacz naszą pracę na własne oczy! Nasza klientela to bardzo zróżnicowane osoby - jesteśmy pewni, że znajdziemy odpowiednie rozwiązanie dla Twoich potrzeb.'
              : 'Sie sind sich nicht sicher, ob wir der richtige Frisörsalon für Sie sind? Kommen Sie vorbei und lassen Sie sich selbst von unserer Arbeit überzeugen! Zu unserer Klientel gehören die verschiedensten Menschen – wir sind uns sicher, dass wir auch für Ihre Bedürfnisse die richtige Lösung finden.'}
          </p>
          <div className='review-carousel'>
            <InfiniteCarousel
              items={
                props.isPolish ? itemsReviewCarouselPL : itemsReviewCarousel
              }
              interval={4000}
              isImage={false}
              visibleitems={1}
            />
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div className='photo-carousel'>
            <InfiniteCarousel
              items={itemsPhotoCarousel}
              interval={3000}
              isImage={true}
              visibleitems={3}
            />
          </div>
          <div className='photo-carousel-mobile'>
            <InfiniteCarousel
              items={itemsPhotoCarousel}
              interval={3000}
              isImage={true}
              visibleitems={1}
            />
          </div>

          <Link href='/gallery'>
            {props.isPolish ? 'Więcej zdjęć' : 'Mehr Fotos'}
          </Link>
        </div>
      </div>
    </>
  );
};

export default ReviewSection;
