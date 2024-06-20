'use client';

import { useState } from 'react';
import HeaderMinimal from '@/app/components/HeaderMinimal';
import GalleryWidget from '../components/GalleryWidget';
import One from '../media/1.jpg';
import Two from '../media/2.jpg';
import Three from '../media/3.jpg';
import Four from '../media/4.jpg';
import Five from '../media/5.jpg';
import Six from '../media/6.jpg';
import Seven from '../media/7.jpg';
import Eight from '../media/8.jpg';
import Nine from '../media/9.jpg';
import Ten from '../media/10.jpg';
import Eleven from '../media/11.jpg';
import Twelve from '../media/12.jpg';
import Thirteen from '../media/13.jpg';
import Fourteen from '../media/14.jpg';
import Fiveteen from '../media/15.jpg';
import Sixteen from '../media/16.jpg';
import Seventeen from '../media/17.jpg';
import Eighteen from '../media/18.jpg';
import Nineteen from '../media/19.jpg';
import Twenty from '../media/20.jpg';
import TwentyOne from '../media/21.jpg';
import TwentyTwo from '../media/22.jpg';
import TwentyThree from '../media/23.jpg';
import TwentyFour from '../media/24.jpg';
import TwentyFive from '../media/25.jpg';
import TwentySix from '../media/26.jpg';
import TwentySeven from '../media/27.jpg';
import TwentyEight from '../media/28.jpg';
import TwentyNine from '../media/29.jpg';
import Thirty from '../media/30.jpg';
import ThirtyOne from '../media/31.jpg';
import ThirtyTwo from '../media/32.jpg';
import ThirtyThree from '../media/33.jpg';
import ThirtyFour from '../media/34.jpg';
import ThirtyFive from '../media/35.jpg';
import ThirtySix from '../media/36.jpg';
import ThirtySeven from '../media/37.jpg';
import ThirtyEight from '../media/38.jpg';
import ThirtyNine from '../media/39.jpg';
import Fourty from '../media/40.jpg';
import FourtyOne from '../media/41.jpg';
import FourtyTwo from '../media/42.jpg';
import FourtyThree from '../media/43.jpg';
import FourtyFour from '../media/44.jpg';
import FourtyFive from '../media/45.jpg';
import FourtySix from '../media/46.jpg';
import FourtySeven from '../media/47.jpg';
import FourtyEight from '../media/48.jpg';
import FourtyNine from '../media/49.jpg';
import Fifty from '../media/50.jpg';
import FiftyOne from '../media/51.jpg';
import FiftyTwo from '../media/52.jpg';
import FiftyThree from '../media/53.jpg';
import FiftyFour from '../media/54.jpg';
import FiftyFive from '../media/55.jpg';
import FiftySix from '../media/56.jpg';
import FiftySeven from '../media/57.jpg';
import FiftyEight from '../media/58.jpg';
import FiftyNine from '../media/59.jpg';
import Sixty from '../media/60.jpg';
import SixtyOne from '../media/61.jpg';
import SixtyTwo from '../media/61.jpg';
import SixtyThree from '../media/63.jpg';
import SixtyFour from '../media/64.jpg';
import SixtyFive from '../media/65.jpg';
import SixtySix from '../media/66.jpg';
import SixtySeven from '../media/67.jpg';
import SixtyEight from '../media/68.jpg';
import SixtyNine from '../media/69.jpg';
import Seventy from '../media/70.jpg';
import SeventyOne from '../media/71.jpg';

export default function Gallery() {
  const [isPolish, setIsPolish] = useState(false);

  const updateLanguage = (isPolish) => {
    setIsPolish(isPolish);
    console.log('Globally changed language, give language to children');
  };

  const categories = {
    Haare: [
      One,
      Two,
      Three,
      Five,
      Six,
      Seven,
      Ten,
      Twelve,
      FourtyFive,
      FourtySix,
      FourtySeven,
      FourtyEight,
      FourtyNine,
      Fifty,
      FiftyOne,
      FiftyTwo,
      FiftyThree,
      FiftyFour,
      FiftyFive,
      FiftySix,
      FiftySeven,
      FiftyEight,
      Sixty,
      SixtyOne,
      SixtyTwo,
      SixtyThree,
      SixtyFour,
      SixtyFive,
      SixtySix,
      SixtySeven,
      SeventyOne,
    ],
    Nägel: [
      Four,
      Eight,
      Eleven,
      TwentyTwo,
      TwentyFour,
      TwentyFive,
      TwentySix,
      ThirtyOne,
      ThirtyTwo,
      ThirtyThree,
      ThirtySix,
      Fourty,
      SixtyEight,
      SixtyNine,
      Seventy,
    ],
    Salon: [
      Nine,
      Thirteen,
      Fourteen,
      Fiveteen,
      Sixteen,
      Seventeen,
      Eighteen,
      Nineteen,
      Twenty,
      TwentyOne,
      TwentyThree,
      TwentySeven,
      TwentyEight,
      TwentyNine,
      Thirty,
      ThirtyFour,
      ThirtyFive,
      ThirtySeven,
      ThirtyEight,
      ThirtyNine,
      FourtyOne,
      FourtyTwo,
      FourtyThree,
      FourtyFour,
      FiftyNine,
    ],
  };

  return (
    <main>
      <HeaderMinimal sendIsPolish={updateLanguage} />
      <div className='post-inner'>
        <GalleryWidget categories={categories} isPolish={isPolish} />
        <div></div>
      </div>
    </main>
  );
}
