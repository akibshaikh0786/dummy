import React from 'react'
import HeroAnimation from '../_component/HeroAnimation';
import HistoricalEvent from '../_component/historicalEvent';
import AttractionsSlider from '../_component/AttractionsSlider';
import TravelTips from '../_component/travelTips';
const forth = {
  daulatabad: {
    id: 'daulatabad',
    name: 'Daulatabad',
    heroText: 'The Impenetrable Hill Fort of Deccan',
    subText: 'Once the capital of India, Daulatabad is famed for its defense architecture and strategic location.',
    heroImage: '/images/daulatabad/hero.jpg',

    keyEvents: [
      {
        title: 'Capital Shift by Muhammad bin Tughlaq',
        date: '1327',
        description: 'Sultan Muhammad bin Tughlaq shifted his capital from Delhi to Daulatabad, showcasing its importance.',
        image: '/images/daulatabad/event1.jpg'
      },
      {
        title: 'Maratha Takeover',
        date: '17th Century',
        description: 'The fort eventually came under Maratha control and played a role in regional politics and warfare.',
        image: '/images/daulatabad/event2.jpg'
      }
    ],

    attractions: [
      {
        name: 'Chand Minar',
        description: 'A 210-foot tower built in Persian style, offering a striking view and Islamic architectural elegance.',
        image: '/images/daulatabad/attraction1.jpg'
      },
      {
        name: 'Maze-like Entrance Passages',
        description: 'Ingenious design to confuse enemies with sharp turns, false doors, and narrow corridors.',
        image: '/images/daulatabad/attraction2.jpg'
      },
      {
        name: 'Cannon Post and Ramparts',
        description: 'Massive cannons and high walls provide panoramic views and insights into the fort’s defenses.',
        image: '/images/daulatabad/attraction3.jpg'
      },
      {
        name: 'Dark Passage Tunnel',
        description: 'A pitch-black spiral staircase tunnel used as a deadly trap against invaders.',
        image: '/images/daulatabad/attraction4.jpg'
      },
      {
        name: 'Bharat Mata Temple',
        description: 'A patriotic shrine within the fort premises, reflecting modern Indian sentiment.',
        image: '/images/daulatabad/attraction5.jpg'
      }
    ],

    travelTips: [
      'Best time to visit is November to February for comfortable weather.',
      'Wear comfortable shoes for the climb and carry a flashlight for the dark tunnel.',
      'Located 15 km from Aurangabad, easily reachable by road or local transport.'
    ],

    cta: {
      text: 'Step into the past at India’s most formidable hill fort!',
      button: 'Explore Daulatabad Now'
    }
  }
};



function Daulatabad  () {
  return (
    <div className='w-full max-w-[1400px] min-h-screen  flex flex-col items-center justify-center px-10'>
      <div className='relative w-full h-screen flex items-center justify-center lg:justify-end'>
        <HeroAnimation
          name={forth.daulatabad.name}
          heroText={forth.daulatabad.heroText}
          heroImage={forth.daulatabad.heroImage}
        />
      </div>
      <div>
        <HistoricalEvent 
          img1={forth.daulatabad.keyEvents[0].image}
          img2={forth.daulatabad.keyEvents[1].image}
          text1={forth.daulatabad.keyEvents[0].title}
          text2={forth.daulatabad.keyEvents[1].title}
        />
        <div className='w-full'>
          <AttractionsSlider
            title={forth.daulatabad.name}
            items={forth.daulatabad.attractions}
          />
        </div>
        <div className=' w-full'>
          <TravelTips
            title={'Travel Tips'}
            tips={forth.daulatabad.travelTips}
            cta={forth.daulatabad.cta}
          />

        </div>
      </div>
    </div>
  )
}

export default Daulatabad  