import React from 'react'
import HeroAnimation from '../_component/HeroAnimation';
import HistoricalEvent from '../_component/historicalEvent';
import AttractionsSlider from '../_component/AttractionsSlider';
import TravelTips from '../_component/travelTips';
const forth = {
  sinhagad: {
    id: 'sinhagad',
    name: 'Sinhagad',
    heroText: 'Where bravery echoes through the winds of the Sahyadris',
    subText: 'Site of the legendary Battle of Sinhagad led by Tanaji Malusare in 1670',
    heroImage: '/images/sinhagad/hero.jpg',

    keyEvents: [
      {
        title: 'Battle of Sinhagad',
        date: 'February 1670',
        description: 'Chhatrapati Shivaji Maharaj’s forces, led by Tanaji Malusare, captured the fort from the Mughals in a daring night raid.',
        image: '/images/sinhagad/event1.jpg'
      },
      {
        title: 'British Capture',
        date: '1818',
        description: 'The British took control of the fort after the Third Anglo-Maratha War, marking the end of Peshwa influence.',
        image: '/images/sinhagad/event2.jpg'
      }
    ],

    attractions: [
      {
        name: 'Tanaji’s Memorial',
        description: 'A site honoring the valor of Tanaji Malusare, who sacrificed his life in the battle.',
        image: '/images/sinhagad/attraction1.jpg'
      },
      {
        name: 'Pune Darwaza',
        description: 'Historic entrance gate showcasing Maratha fort architecture and strategic design.',
        image: '/images/sinhagad/attraction2.jpg'
      },
      {
        name: 'Kalyan Darwaza',
        description: 'Another fortified gateway offering panoramic views and access to the rear side of the fort.',
        image: '/images/sinhagad/attraction3.jpg'
      },
      {
        name: 'Bastions and Fort Walls',
        description: 'Thick stone walls and bastions tell tales of Maratha defense techniques and warfare.',
        image: '/images/sinhagad/attraction4.jpg'
      },
      {
        name: 'Viewpoint of Khadakwasla Dam',
        description: 'Scenic viewpoint offering breathtaking views of the dam and the valley below.',
        image: '/images/sinhagad/attraction5.jpg'
      }
    ],

    travelTips: [
      'Visit early morning or late evening to avoid heat and crowds.',
      'Wear comfortable shoes for trekking; the climb is steep but manageable.',
      'Carry water, snacks, and a cap; few stalls are available near the top.'
    ],

    cta: {
      text: 'Plan your trek to Sinhagad and walk the path of warriors!',
      button: 'Explore Sinhagad'
    }
  }
};

function Sinhagad() {
  return (
    <div className='w-full max-w-[1400px] min-h-screen  flex flex-col items-center justify-center px-10'>
      <div className='relative w-full h-screen flex items-center justify-center lg:justify-end'>
        <HeroAnimation
          name={forth.sinhagad.name}
          heroText={forth.sinhagad.heroText}
          heroImage={forth.sinhagad.heroImage}
        />
      </div>
      <div>
        <HistoricalEvent 
          img1={forth.sinhagad.keyEvents[0].image}
          img2={forth.sinhagad.keyEvents[1].image}
          text1={forth.sinhagad.keyEvents[0].title}
          text2={forth.sinhagad.keyEvents[1].title}
        />
        <div className='w-full'>
          <AttractionsSlider
            title={forth.sinhagad.name}
            items={forth.sinhagad.attractions}
          />
        </div>
        <div className=' w-full'>
          <TravelTips
            title={'Travel Tips'}
            tips={forth.sinhagad.travelTips}
            cta={forth.sinhagad.cta}
          />

        </div>
      </div>
    </div>
  )
}

export default Sinhagad