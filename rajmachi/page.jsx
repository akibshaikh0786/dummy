import React from 'react'
import HeroAnimation from '../_component/HeroAnimation';
import HistoricalEvent from '../_component/historicalEvent';
import AttractionsSlider from '../_component/AttractionsSlider';
import TravelTips from '../_component/travelTips';
const forth = {
  rajmachi: {
    id: 'rajmachi',
    name: 'Rajmachi',
    heroText: 'Twin Forts, One Epic Journey',
    subText: 'Rajmachi Fort served as a strategic watchtower overlooking the Konkan trade route.',
    heroImage: '/images/rajmachi/hero.jpg',

    keyEvents: [
      {
        title: 'Captured by Shivaji Maharaj',
        date: '1657',
        description: 'Shivaji Maharaj took control of Rajmachi to secure the Bor Ghat trade route.',
        image: '/images/rajmachi/event1.jpg'
      },
      {
        title: 'Control Under British Rule',
        date: '1818',
        description: 'After the fall of the Maratha Empire, Rajmachi came under British control during their conquest of forts.',
        image: '/images/rajmachi/event2.jpg'
      }
    ],

    attractions: [
      {
        name: 'Shrivardhan Fort',
        description: 'One of the twin peaks, known for its defensive watchtower and panoramic views.',
        image: '/images/rajmachi/attraction1.jpg'
      },
      {
        name: 'Manaranjan Fort',
        description: 'The second fort of the twin structure, offering views of the Sahyadri range.',
        image: '/images/rajmachi/attraction2.jpg'
      },
      {
        name: 'Rajmachi Village',
        description: 'A quaint village that acts as the base camp for trekkers and explorers.',
        image: '/images/rajmachi/attraction3.jpg'
      },
      {
        name: 'Kal Bhairav Temple',
        description: 'An ancient temple believed to protect the fort and its surrounding region.',
        image: '/images/rajmachi/attraction4.jpg'
      },
      {
        name: 'Caves and Water Tanks',
        description: 'Ancient Buddhist-style caves and water reservoirs used by soldiers for survival.',
        image: '/images/rajmachi/attraction5.jpg'
      }
    ],

    travelTips: [
      'Best time to visit is June to September for lush greenery and waterfalls.',
      'Carry trekking shoes, rainwear, and snacks as the route can be slippery and remote.',
      'Reach via Lonavala or Karjat; a trek of around 15 km is required from either base.'
    ],

    cta: {
      text: 'Trek to the twin forts and soak in nature and history!',
      button: 'Start Your Rajmachi Adventure'
    }
  }
};





function Rajmachi () {
  return (
    <div className='w-full max-w-[1400px] min-h-screen  flex flex-col items-center justify-center px-10'>
      <div className='relative w-full h-screen flex items-center justify-center lg:justify-end'>
        <HeroAnimation
          name={forth.rajmachi.name}
          heroText={forth.rajmachi.heroText}
          heroImage={forth.rajmachi.heroImage}
        />
      </div>
      <div>
        <HistoricalEvent 
          img1={forth.rajmachi.keyEvents[0].image}
          img2={forth.rajmachi.keyEvents[1].image}
          text1={forth.rajmachi.keyEvents[0].title}
          text2={forth.rajmachi.keyEvents[1].title}
        />
        <div className='w-full'>
          <AttractionsSlider
            title={forth.rajmachi.name}
            items={forth.rajmachi.attractions}
          />
        </div>
        <div className=' w-full'>
          <TravelTips
            title={'Travel Tips'}
            tips={forth.rajmachi.travelTips}
            cta={forth.rajmachi.cta}
          />

        </div>
      </div>
    </div>
  )
}

export default Rajmachi   