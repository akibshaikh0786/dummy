import React from 'react'
import HeroAnimation from '../_component/HeroAnimation';
import HistoricalEvent from '../_component/historicalEvent';
import AttractionsSlider from '../_component/AttractionsSlider';
import TravelTips from '../_component/travelTips';
const forth = {
  vijaydurg: {
    id: 'vijaydurg',
    name: 'Vijaydurg',
    heroText: 'The Invincible Sea Fort of the Konkan Coast',
    subText: 'Vijaydurg was a strategic naval base of the Maratha Empire under Kanhoji Angre.',
    heroImage: '/images/vijaydurg/hero.jpg',

    keyEvents: [
      {
        title: 'Construction by Raja Bhoj',
        date: '1195 AD',
        description: 'Originally built by Raja Bhoj of the Shilahar dynasty, Vijaydurg was an important maritime fort even before Maratha rule.',
        image: '/images/vijaydurg/event1.jpg'
      },
      {
        title: 'Naval Base of Kanhoji Angre',
        date: '1700–1729',
        description: 'Kanhoji Angre made Vijaydurg his key naval base, using it to dominate the western coast against the British and Portuguese.',
        image: '/images/vijaydurg/event2.jpg'
      }
    ],

    attractions: [
      {
        name: 'Massive Sea-Facing Walls',
        description: 'Thick laterite walls and triple-layered defense made Vijaydurg nearly impossible to conquer from the sea.',
        image: '/images/vijaydurg/attraction1.jpg'
      },
      {
        name: 'Underwater Trench',
        description: 'A hidden underwater trench was dug to prevent enemy ships from docking close to the fort.',
        image: '/images/vijaydurg/attraction2.jpg'
      },
      {
        name: 'Cannons and Bastions',
        description: 'Large cannons and bastions stand as reminders of the fort’s naval might.',
        image: '/images/vijaydurg/attraction3.jpg'
      },
      {
        name: 'Naval Dockyard',
        description: 'One of India’s oldest naval dockyards, used by Marathas to build and repair ships.',
        image: '/images/vijaydurg/attraction4.jpg'
      },
      {
        name: 'View of the Arabian Sea',
        description: 'Breathtaking views of the Arabian Sea from the fort’s ramparts attract photographers and travelers alike.',
        image: '/images/vijaydurg/attraction5.jpg'
      }
    ],

    travelTips: [
      'Best visited between October and March for pleasant weather.',
      'Wear a hat and carry water as the fort gets hot during the day.',
      'Reachable by road from Devgad; local guides offer insightful tours.'
    ],

    cta: {
      text: 'Step into Maratha maritime history at Vijaydurg Fort!',
      button: 'Plan Your Visit'
    }
  }
};











function Vijaydurg  () {
  return (
    <div className='w-full max-w-[1400px] min-h-screen  flex flex-col items-center justify-center px-10'>
      <div className='relative w-full h-screen flex items-center justify-center lg:justify-end'>
        <HeroAnimation
          name={forth.vijaydurg.name}
          heroText={forth.vijaydurg.heroText}
          heroImage={forth.vijaydurg.heroImage}
        />
      </div>
      <div>
        <HistoricalEvent 
          img1={forth.vijaydurg.keyEvents[0].image}
          img2={forth.vijaydurg.keyEvents[1].image}
          text1={forth.vijaydurg.keyEvents[0].title}
          text2={forth.vijaydurg.keyEvents[1].title}
        />
        <div className='w-full'>
          <AttractionsSlider
            title={forth.vijaydurg.name}
            items={forth.vijaydurg.attractions}
          />
        </div>
        <div className=' w-full'>
          <TravelTips
            title={'Travel Tips'}
            tips={forth.vijaydurg.travelTips}
            cta={forth.vijaydurg.cta}
          />

        </div>
      </div>
    </div>
  )
}

export default  Vijaydurg  