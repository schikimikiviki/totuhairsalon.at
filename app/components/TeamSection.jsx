import React from 'react';
import aneta from '../media/aneta.jpg';
import Image from 'next/image';

const TeamSection = (props) => {
  return (
    <div className='team-div'>
      <div className='team-text'>
        <p className='heading'>{props.isPolish ? 'O nas' : 'Unser Team'} </p>
        <p>
          {props.isPolish
            ? 'Dziękujemy za poświęcenie czasu, aby nas trochę poznać. Nasz zespół składa się wyłącznie ze specjalistów, którzy są przeszkoleni, aby doradzać we wszystkich kwestiach związanych z stylizacją, pielęgnacją i koloryzacją włosów. '
            : 'Unser Team besteht ausschließlich aus Spezialisten, die ausgebildet sind, um Sie in allen Themen rund um das Styling, die Pflege und das Färben von Haaren zu beraten.'}
        </p>
        <p>
          {props.isPolish
            ? 'Dla nas jesteś w centrum naszych działań, a naszym celem jest, abyś od każdego z naszych pracowników w naszym salonie otrzymał wyjątkowe doświadczenie fryzjerskie, z którym czujesz się całkowicie dobrze. '
            : 'Sie stehen für uns im Mittelpunkt unserer Tätigkeit und es ist unser Ziel, dass Sie in unserem Salon bei jedem einzelnen unserer Mitarbeiter ein einzigartiges Friseur-Erlebnis erhalten, mit dem Sie sich rundum gut fühlen.'}
        </p>
        <p>
          {props.isPolish
            ? 'Jeśli nie byłeś wcześniej klientem naszego salonu, z przyjemnością powitamy Cię osobiście.'
            : 'Wenn Sie bisher noch nicht Kunde oder Kundin bei uns im Salon waren, würden wir uns sehr freuen, Sie bald persönlich begrüßen zu dürfen.'}
        </p>
        <p>
          {props.isPolish ? 'Czekamy na Ciebie. ' : 'Wir freuen uns auf Sie.'}
        </p>
        <p>
          {props.isPolish
            ? 'Twoja Aneta Griego i zespół '
            : 'Ihre Aneta Griego & Team'}
        </p>
      </div>
      <div className='aneta-img'>
        <Image
          src={aneta.src}
          alt='image'
          layout='responsive'
          width={750}
          height={500}
        />
      </div>
    </div>
  );
};

export default TeamSection;
