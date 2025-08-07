import React from 'react'
import HeroAnimation from '../_component/HeroAnimation';
import HistoricalEvent from '../_component/historicalEvent';
import AttractionsSlider from '../_component/AttractionsSlider';
import TravelTips from '../_component/travelTips';
const forth = {
  shaniwar: {
    id: 'shaniwar',
    name: 'Shaniwar Wada',
    heroText: 'The Grand Seat of Peshwa Power',
    subText: 'Shaniwar Wada was the political center of the Maratha Empire during the 18th century.',
    heroImage: '/images/shaniwar/hero.jpg',

    keyEvents: [
      {
        title: 'Construction of Shaniwar Wada',
        date: '1732',
        description: 'Built by Peshwa Baji Rao I as the official residence of the Peshwas of the Maratha Empire.',
        image: '/images/shaniwar/event1.jpg'
      },
      {
        title: 'Mysterious Fire',
        date: '27 February, 1828',
        description: 'A massive fire engulfed the palace, destroying much of the structure and leaving only stone ruins.',
        image: '/images/shaniwar/event2.jpg'
      }
    ],

    attractions: [
      {
        name: 'Delhi Darwaza',
        description: 'The main entrance gate, massive in size and historically used for royal processions.',
        image: '/images/shaniwar/attraction1.jpg'
      },
      {
        name: 'Ruins of the Fountain',
        description: 'Remains of a once-beautiful lotus-shaped fountain symbolizing Maratha artistry.',
        image: '/images/shaniwar/attraction2.jpg'
      },
      {
        name: 'Haunted Legends',
        description: 'Said to be haunted by the ghost of Narayanrao Peshwa, attracting curious visitors and thrill-seekers.',
        image: '/images/shaniwar/attraction3.jpg'
      },
      {
        name: 'Fortification Walls',
        description: 'Sturdy outer walls with bastions give an idea of the fort’s former strength and layout.',
        image: '/images/shaniwar/attraction4.jpg'
      },
      {
        name: 'Light and Sound Show',
        description: 'Evening show narrating the fort’s rich history in an engaging audio-visual format.',
        image: '/images/shaniwar/attraction5.jpg'
      }
    ],

    travelTips: [
      'Best time to visit is October to March for pleasant evenings and show timings.',
      'No trekking needed—comfortable footwear and water bottle are sufficient.',
      'Located in central Pune; easily accessible by auto, cab, or local buses.'
    ],

    cta: {
      text: 'Step into the royal corridors of Maratha glory!',
      button: 'Visit Shaniwar Wada Today'
    }
  }
};






function Shaniwar () {
  return (
    <div className='w-full max-w-[1400px] min-h-screen  flex flex-col items-center justify-center px-10'>
      <div className='relative w-full h-screen flex items-center justify-center lg:justify-end'>
        <HeroAnimation
          name={forth.shaniwar.name}
          heroText={forth.shaniwar.heroText}
          heroImage={forth.shaniwar.heroImage}
        />
      </div>
      <div>
        <HistoricalEvent 
          img1={forth.shaniwar.keyEvents[0].image}
          img2={forth.shaniwar.keyEvents[1].image}
          text1={forth.shaniwar.keyEvents[0].title}
          text2={forth.shaniwar.keyEvents[1].title}
        />
        <div className='w-full'>
          <AttractionsSlider
            title={forth.shaniwar.name}
            items={forth.shaniwar.attractions}
          />
        </div>
        <div className=' w-full'>
          <TravelTips
            title={'Travel Tips'}
            tips={forth.shaniwar.travelTips}
            cta={forth.shaniwar.cta}
          />

        </div>
      </div>
    </div>
  )
}

export default Shaniwar   