import React from 'react';
import nailsBackground from '../media/golden-nails.jpg';
import Image from 'next/image';
import postsData from '../blogposts/posts_nails.json';
import BlogPost from './BlogPost';

const NailSection = (props) => {
  return (
    <>
      <div className='manicure-div' id='manicure'>
        <div className='nail-bg'>
          <Image
            src={nailsBackground.src}
            alt='image'
            width={500}
            height={1000}
          />
        </div>

        <div className='manicure-text'>
          <p className='heading'>
            {props.isPolish ? 'Manicure' : 'Nageldesign'}
          </p>
          <p>
            {props.isPolish
              ? 'Czy to w interesach, czy dla przyjemności - dzięki profesjonalnie wypielęgnowanym dłoniom zawsze pozostawiasz idealne pierwsze wrażenie. Piękne paznokcie to podstawa! Uzupełnij swój wygląd w naszym salonie paznokci.'
              : 'Ob beruflich oder privat – mit professionell gepflegten Händen hinterlassen Sie immer den idealen ersten Eindruck. Schöne Fingernägel sind da ein Muss! Vervollständigen Sie Ihren Look in unserem Nagelstudio.'}
          </p>
          <p>
            {props.isPolish
              ? 'Zainspiruj się naszymi poprzednimi klientami lub przedstaw własne pomysły. Rezultatem jest indywidualny projekt paznokci z tym pewnym czymś. Czy chcesz również wyeksponować swoje paznokcie z efektownym podkreśleniem? Następnie oferujemy wybór, który jest imponujący.'
              : 'Lassen Sie sich von unseren bisherigen Kundinnen inspirieren oder bringen Sie Ihre eigenen Ideen mit. Das Resultat ist ein individuelles Nageldesign mit dem gewissen Etwas. Wollen Sie Ihre Nägel zusätzlich mit einem auffallenden Highlight in Szene setzen? Dann bieten wir Ihnen eine Auswahl, die sich sehen lassen kann.'}
          </p>
          <p>
            {props.isPolish
              ? 'Z przyjemnością ozdobimy zarówno sztuczne, jak i naturalne paznokcie za pomocą: '
              : 'Wir verzieren sowohl Ihre Kunst- als auch Ihre Naturnägel gerne mit:'}
          </p>
          <ul>
            <li>{props.isPolish ? 'cyrkonii' : 'Strasssteinchen'}</li>
            <li>
              {props.isPolish ? 'naklejek na paznokcie ' : 'Nailstickern'}
            </li>
            <li>{props.isPolish ? 'kolorowych żeli ' : 'Farbgelen'}</li>
            <li>{props.isPolish ? 'brokatu' : 'Glitterpuder'}</li>
          </ul>

          <br />

          <p className='heading'>{props.isPolish ? 'Cennik' : 'Preisliste'}</p>

          <table>
            <tbody>
              <tr>
                <td className='product'>
                  {props.isPolish
                    ? 'Modelowanie akrylowe - nowy zestaw'
                    : 'Nageldesign Acryl-Modellage - Neues Set'}
                </td>
                <td className='filler'>......................</td>
                <td className='price'>40€</td>
              </tr>
              <tr>
                <td className='product'>
                  {props.isPolish
                    ? 'Uzupełnienie akrylem'
                    : 'Nachfüllung mit Acryl'}
                </td>
                <td className='filler'>......................</td>
                <td className='price'>35€</td>
              </tr>
              <tr>
                <td className='product'>
                  {props.isPolish
                    ? 'Manicure z lakierem hybrydowym'
                    : 'Maniküre mit Gellack'}
                </td>
                <td className='filler'>......................</td>
                <td className='price'>25€</td>
              </tr>
              <tr>
                <td className='product'>
                  {props.isPolish
                    ? 'Manicure - lakierowanie farbą'
                    : 'Maniküre - Lackieren mit Farbe'}
                </td>
                <td className='filler'>......................</td>
                <td className='price'>18€ </td>
              </tr>
              <tr>
                <td className='product'>
                  {props.isPolish ? 'Manicure' : 'Maniküre'}{' '}
                </td>
                <td className='filler'>......................</td>
                <td className='price'>15€</td>
              </tr>
              <tr>
                <td className='product'>
                  {props.isPolish
                    ? 'Usunięcie - żel, akryl'
                    : ' Entfernen - Gel, Acryl'}
                </td>
                <td className='filler'>......................</td>
                <td className='price'>15€</td>
              </tr>
              <tr>
                <td className='product'>
                  {props.isPolish
                    ? 'Pielęgnacja stóp - tylko Shellac'
                    : 'Fußpflege - nur Shellac'}{' '}
                </td>
                <td className='filler'>......................</td>
                <td className='price'>35€</td>
              </tr>
            </tbody>
          </table>
          <br />
          <br />
        </div>
      </div>
      <div className='blogpost-section'>
        <p>
          {props.isPolish
            ? 'Jeśli chodzi o stylizację paznokci, ważne jest również, aby używać odpowiednich produktów. W naszej pracowni używamy wyłącznie produktów następujących producentów: '
            : 'Auch beim Nageldesign ist es essenziell, die richtigen Produkte zu verwenden. In unserem Studio verwenden wir ausschließlich Produkte der folgenden Hersteller:'}
        </p>
        <div className='blogposts-nails'>
          {postsData.posts.map((post, index) => (
            <BlogPost key={index} post={post} isPolish={props.isPolish} />
          ))}
        </div>
      </div>
    </>
  );
};

export default NailSection;
