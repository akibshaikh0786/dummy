import React from 'react'
import HeroAnimation from '../_component/HeroAnimation';
import HistoricalEvent from '../_component/historicalEvent';
import AttractionsSlider from '../_component/AttractionsSlider';
import TravelTips from '../_component/travelTips';
const forth = {
  visapur: {
    id: 'visapur',
    name: 'Visapur',
    heroText: 'Where Clouds Kiss Ancient Stone Walls',
    subText: 'A majestic hill fort offering sweeping views and Maratha history.',
    heroImage: '/images/visapur/hero.jpg',

    keyEvents: [
      {
        title: 'Built During the Maratha Empire',
        date: '1713–1720',
        description: 'Constructed by Balaji Vishwanath, the first Peshwa of the Maratha Empire, as a strategic stronghold.',
        image: '/images/visapur/event1.jpg'
      },
      {
        title: 'British Conquest of Visapur',
        date: '1818',
        description: 'Captured by the British during the Third Anglo-Maratha War, leading to the destruction of its ramparts.',
        image: '/images/visapur/event2.jpg'
      }
    ],

    attractions: [
      {
        name: 'Massive Fort Walls',
        description: 'Strong stone walls still stand tall, offering a glimpse into its formidable defenses.',
        image: '/images/visapur/attraction1.jpg'
      },
      {
        name: 'Cannon and Bastions',
        description: 'Remains of British-era cannons and lookout bastions overlooking the valley.',
        image: '/images/visapur/attraction2.jpg'
      },
      {
        name: 'Hanuman Carvings',
        description: 'Numerous rock-carved images of Lord Hanuman along the trail and within the fort.',
        image: '/images/visapur/attraction3.jpg'
      },
      {
        name: 'Rainwater Cisterns',
        description: 'Ancient water storage systems still collecting rainwater — a marvel of engineering.',
        image: '/images/visapur/attraction4.jpg'
      },
      {
        name: 'Panoramic Views of Lohagad',
        description: 'Get breathtaking views of the twin Lohagad Fort and lush green valleys from the top.',
        image: '/images/visapur/attraction5.jpg'
      }
    ],

    travelTips: [
      'Best time to visit is during monsoon (June to September) for lush greenery and waterfalls.',
      'Wear sturdy trekking shoes; the path can get slippery and steep.',
      'Accessible from Malavli station; moderate trek of around 2.5–3 hours.'
    ],

    cta: {
      text: 'Trek to the clouds and uncover Maratha legacy!',
      button: 'Start Your Visapur Trek'
    }
  }
};







function Visapur () {
  return (
    <div className='w-full max-w-[1400px] min-h-screen  flex flex-col items-center justify-center px-10'>
      <div className='relative w-full h-screen flex items-center justify-center lg:justify-end'>
        <HeroAnimation
          name={forth.visapur.name}
          heroText={forth.visapur.heroText}
          heroImage={forth.visapur.heroImage}
        />
      </div>
      <div>
        <HistoricalEvent 
          img1={forth.visapur.keyEvents[0].image}
          img2={forth.visapur.keyEvents[1].image}
          text1={forth.visapur.keyEvents[0].title}
          text2={forth.visapur.keyEvents[1].title}
        />
        <div className='w-full'>
          <AttractionsSlider
            title={forth.visapur.name}
            items={forth.visapur.attractions}
          />
        </div>
        <div className=' w-full'>
          <TravelTips
            title={'Travel Tips'}
            tips={forth.visapur.travelTips}
            cta={forth.visapur.cta}
          />

        </div>
      </div>
    </div>
  )
}

export default Visapur  