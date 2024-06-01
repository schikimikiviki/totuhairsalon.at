import React from 'react';
import nailsBackground from '../media/golden-nails.jpg';
import Image from 'next/image';

const NailSection = () => {
  return (
    <div
      style={{
        display: 'flex',
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '1300px',
      }}
    >
      <div style={{}}>
        <Image
          src={nailsBackground.src}
          alt='image'
          width={500}
          height={1000}
        />
      </div>
      <div
        style={{
          backgroundColor: 'black',
          color: 'white',
          padding: '50px',
          lineHeight: 2,
          textAlign: 'justify',
        }}
      >
        <p className='heading'>Nageldesign </p>
        <p>
          Ob beruflich oder privat – mit professionell gepflegten Händen
          hinterlassen Sie immer den idealen ersten Eindruck. Schöne Fingernägel
          sind da ein Muss! Vervollständigen Sie Ihren Look in unserem
          Nagelstudio.
        </p>
        <p>
          Lassen Sie sich von unseren bisherigen Kundinnen inspirieren oder
          bringen Sie Ihre eigenen Ideen mit. Das Resultat ist ein individuelles
          Nageldesign mit dem gewissen Etwas. Wollen Sie Ihre Nägel zusätzlich
          mit einem auffallenden Highlight in Szene setzen? Dann bieten wir
          Ihnen eine Auswahl, die sich sehen lassen kann.{' '}
        </p>
        <p>
          Wir verzieren sowohl Ihre Kunst- als auch Ihre Naturnägel gerne mit:
        </p>
        <ul>
          <li>Strasssteinchen</li>
          <li>Nailstickern</li>
          <li>Farbgelen</li>
          <li>Glitterpuder</li>
        </ul>

        <br />

        <p className='heading'>Preisliste</p>

        <table>
          <tbody>
            <tr>
              <td className='product'>
                Nageldesign Acryl-Modellage - Neues Set{' '}
              </td>
              <td className='filler'>......................</td>
              <td className='price'>40€</td>
            </tr>
            <tr>
              <td className='product'>Nachfüllung mit Acryl</td>
              <td className='filler'>......................</td>
              <td className='price'>35€</td>
            </tr>
            <tr>
              <td className='product'>Maniküre mit Gellack</td>
              <td className='filler'>......................</td>
              <td className='price'>25€</td>
            </tr>
            <tr>
              <td className='product'>Maniküre - Lackieren mit Farbe</td>
              <td className='filler'>......................</td>
              <td className='price'>18€ </td>
            </tr>
            <tr>
              <td className='product'>Maniküre </td>
              <td className='filler'>......................</td>
              <td className='price'>15€</td>
            </tr>
            <tr>
              <td className='product'> Entfernen - Gel, Acryl </td>
              <td className='filler'>......................</td>
              <td className='price'>15€</td>
            </tr>
            <tr>
              <td className='product'> Fußpflege - nur Shellac </td>
              <td className='filler'>......................</td>
              <td className='price'>35€</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NailSection;
