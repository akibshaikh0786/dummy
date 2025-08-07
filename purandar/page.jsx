import React from 'react'
import HeroAnimation from '../_component/HeroAnimation';
import HistoricalEvent from '../_component/historicalEvent';
import AttractionsSlider from '../_component/AttractionsSlider';
import TravelTips from '../_component/travelTips';
const forth = {
  purandar: {
    id: 'purandar',
    name: 'Purandar',
    heroText: 'Where Shivaji’s Legacy Took Root',
    subText: 'Birthplace of Sambhaji Maharaj and a key site in Maratha history.',
    heroImage: '/images/purandar/hero.jpg',

    keyEvents: [
      {
        title: 'Birth of Sambhaji Maharaj',
        date: '14 May, 1657',
        description: 'Sambhaji Maharaj, the son of Chhatrapati Shivaji Maharaj, was born at Purandar Fort.',
        image: '/images/purandar/event1.jpg'
      },
      {
        title: 'Treaty of Purandar',
        date: '1665',
        description: 'Shivaji Maharaj signed a treaty with the Mughals here, ceding 23 forts temporarily under pressure.',
        image: '/images/purandar/event2.jpg'
      }
    ],

    attractions: [
      {
        name: 'Upper Fort (Bale Killa)',
        description: 'The topmost stronghold offers scenic views and insights into Maratha military planning.',
        image: '/images/purandar/attraction1.jpg'
      },
      {
        name: 'Temples of Kedareshwar and Purandareshwar',
        description: 'Ancient temples that reflect the fort’s spiritual and cultural roots.',
        image: '/images/purandar/attraction2.jpg'
      },
      {
        name: 'Dilli Darwaza',
        description: 'Main entrance of the fort with robust gates and strategic design.',
        image: '/images/purandar/attraction3.jpg'
      },
      {
        name: 'Statue of Murarbaji Deshpande',
        description: 'Tribute to the brave Maratha warrior who defended Purandar against the Mughals.',
        image: '/images/purandar/attraction4.jpg'
      },
      {
        name: 'British Barracks Ruins',
        description: 'Remnants from British occupancy during colonial times add to its layered history.',
        image: '/images/purandar/attraction5.jpg'
      }
    ],

    travelTips: [
      'Visit between October and February for pleasant weather and clear views.',
      'Wear trekking shoes and carry water; the trail is moderately steep but scenic.',
      'Located about 40 km from Pune; easily reachable by car or bike.'
    ],

    cta: {
      text: 'Walk through the birthplace of royal legacy and valor!',
      button: 'Plan Your Purandar Trek'
    }
  }
};




function Purandar () {
  return (
    <div className='w-full max-w-[1400px] min-h-screen  flex flex-col items-center justify-center px-10'>
      <div className='relative w-full h-screen flex items-center justify-center lg:justify-end'>
        <HeroAnimation
          name={forth.purandar.name}
          heroText={forth.purandar.heroText}
          heroImage={forth.purandar.heroImage}
        />
      </div>
      <div>
        <HistoricalEvent 
          img1={forth.purandar.keyEvents[0].image}
          img2={forth.purandar.keyEvents[1].image}
          text1={forth.purandar.keyEvents[0].title}
          text2={forth.purandar.keyEvents[1].title}
        />
        <div className='w-full'>
          <AttractionsSlider
            title={forth.purandar.name}
            items={forth.purandar.attractions}
          />
        </div>
        <div className=' w-full'>
          <TravelTips
            title={'Travel Tips'}
            tips={forth.purandar.travelTips}
            cta={forth.purandar.cta}
          />

        </div>
      </div>
    </div>
  )
}

export default Purandar   