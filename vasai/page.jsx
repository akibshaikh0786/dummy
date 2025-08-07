import React from 'react'
import HeroAnimation from '../_component/HeroAnimation';
import HistoricalEvent from '../_component/historicalEvent';
import AttractionsSlider from '../_component/AttractionsSlider';
import TravelTips from '../_component/travelTips';
const forth = {
  vasai: {
    id: 'vasai',
    name: 'Vasai',
    heroText: 'Echoes of Empires by the Arabian Sea',
    subText: 'Once a thriving Portuguese stronghold, Vasai Fort is rich in colonial and Maratha history.',
    heroImage: '/images/vasai/hero.jpg',

    keyEvents: [
      {
        title: 'Portuguese Takeover',
        date: '1534',
        description: 'The Portuguese captured Vasai from the Sultan of Gujarat and developed it into a major port and military base.',
        image: '/images/vasai/event1.jpg'
      },
      {
        title: 'Maratha Victory at Vasai',
        date: '1739',
        description: 'Chimaji Appa, brother of Peshwa Baji Rao I, led the Marathas in reclaiming Vasai from Portuguese control.',
        image: '/images/vasai/event2.jpg'
      }
    ],

    attractions: [
      {
        name: 'Ruins of Churches and Chapels',
        description: 'Beautiful remnants of Portuguese churches with intricate stone carvings and Gothic arches.',
        image: '/images/vasai/attraction1.jpg'
      },
      {
        name: 'Watchtowers and Bastions',
        description: 'Tall towers offer panoramic sea views and insights into colonial-era defense architecture.',
        image: '/images/vasai/attraction2.jpg'
      },
      {
        name: 'Sea-Facing Ramparts',
        description: 'Long walls facing the sea, once guarding against naval attacks, now perfect for photography.',
        image: '/images/vasai/attraction3.jpg'
      },
      {
        name: 'Secret Tunnel Paths',
        description: 'Old passageways believed to be escape routes during battles, adding mystery to the fort’s layout.',
        image: '/images/vasai/attraction4.jpg'
      },
      {
        name: 'Cultural Film Location',
        description: 'Popular spot for Bollywood and Marathi films due to its dramatic and cinematic ruins.',
        image: '/images/vasai/attraction5.jpg'
      }
    ],

    travelTips: [
      'Best time to visit is November to February for cooler weather and clear skies.',
      'Wear light clothing and carry water; the fort is vast and open to the sun.',
      'Easily reachable from Mumbai by local train to Vasai Road and a short rickshaw ride.'
    ],

    cta: {
      text: 'Step into the echoes of colonial conquests and Maratha pride!',
      button: 'Explore Vasai Fort Today'
    }
  }
};








function Vasai  () {
  return (
    <div className='w-full max-w-[1400px] min-h-screen  flex flex-col items-center justify-center px-10'>
      <div className='relative w-full h-screen flex items-center justify-center lg:justify-end'>
        <HeroAnimation
          name={forth.vasai.name}
          heroText={forth.vasai.heroText}
          heroImage={forth.vasai.heroImage}
        />
      </div>
      <div>
        <HistoricalEvent 
          img1={forth.vasai.keyEvents[0].image}
          img2={forth.vasai.keyEvents[1].image}
          text1={forth.vasai.keyEvents[0].title}
          text2={forth.vasai.keyEvents[1].title}
        />
        <div className='w-full'>
          <AttractionsSlider
            title={forth.vasai.name}
            items={forth.vasai.attractions}
          />
        </div>
        <div className=' w-full'>
          <TravelTips
            title={'Travel Tips'}
            tips={forth.vasai.travelTips}
            cta={forth.vasai.cta}
          />

        </div>
      </div>
    </div>
  )
}

export default Vasai   