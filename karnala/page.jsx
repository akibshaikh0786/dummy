import React from 'react'
import HeroAnimation from '../_component/HeroAnimation';
import HistoricalEvent from '../_component/historicalEvent';
import AttractionsSlider from '../_component/AttractionsSlider';
import TravelTips from '../_component/travelTips';
const forth = {
  karnala: {
    id: 'karnala',
    name: 'Karnala',
    heroText: 'Where Trek Meets Towering History',
    subText: 'Karnala Fort served as a strategic watchpoint on the trade route between Konkan and the Deccan.',
    heroImage: '/images/karnala/hero.jpg',

    keyEvents: [
      {
        title: 'Built Under the Devagiri Yadavas',
        date: '13th Century',
        description: 'Karnala Fort was originally constructed by the Yadavas to protect their trade routes through the Western Ghats.',
        image: '/images/karnala/event1.jpg'
      },
      {
        title: 'Captured by Shivaji Maharaj',
        date: '1640',
        description: 'Shivaji Maharaj captured the fort from the Portuguese, enhancing Maratha control in the region.',
        image: '/images/karnala/event2.jpg'
      }
    ],

    attractions: [
      {
        name: 'Karnala Pinnacle (Thumb Point)',
        description: 'The fort’s iconic basalt spire offers stunning views and is a landmark for trekkers.',
        image: '/images/karnala/attraction1.jpg'
      },
      {
        name: 'Fort Gate Ruins',
        description: 'Remains of the ancient entrance that once guarded access to the fort’s interior.',
        image: '/images/karnala/attraction2.jpg'
      },
      {
        name: 'Rock-Cut Water Tanks',
        description: 'Historic cisterns that still collect rainwater, showcasing clever ancient engineering.',
        image: '/images/karnala/attraction3.jpg'
      },
      {
        name: 'Views of the Sahyadris',
        description: 'Panoramic views of the lush green ranges from the top during monsoons are breathtaking.',
        image: '/images/karnala/attraction4.jpg'
      },
      {
        name: 'Karnala Bird Sanctuary',
        description: 'Surrounding forest area rich in birdlife, making it a unique blend of history and nature.',
        image: '/images/karnala/attraction5.jpg'
      }
    ],

    travelTips: [
      'Best visited between October and March or during early monsoons for greenery and cool weather.',
      'Carry trekking shoes, snacks, and water—moderate-level trek through a forest trail.',
      'Located about 13 km from Panvel; well-connected by road and ideal for a one-day trip.'
    ],

    cta: {
      text: 'Trek through nature into the heart of Maratha history!',
      button: 'Visit Karnala Fort'
    }
  }
};









function Karnala  () {
  return (
    <div className='w-full max-w-[1400px] min-h-screen  flex flex-col items-center justify-center px-10'>
      <div className='relative w-full h-screen flex items-center justify-center lg:justify-end'>
        <HeroAnimation
          name={forth.karnala.name}
          heroText={forth.karnala.heroText}
          heroImage={forth.karnala.heroImage}
        />
      </div>
      <div>
        <HistoricalEvent 
          img1={forth.karnala.keyEvents[0].image}
          img2={forth.karnala.keyEvents[1].image}
          text1={forth.karnala.keyEvents[0].title}
          text2={forth.karnala.keyEvents[1].title}
        />
        <div className='w-full'>
          <AttractionsSlider
            title={forth.karnala.name}
            items={forth.karnala.attractions}
          />
        </div>
        <div className=' w-full'>
          <TravelTips
            title={'Travel Tips'}
            tips={forth.karnala.travelTips}
            cta={forth.karnala.cta}
          />

        </div>
      </div>
    </div>
  )
}

export default Karnala   