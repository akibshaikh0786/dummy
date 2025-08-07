import React from 'react'
import HeroAnimation from '../_component/HeroAnimation';
import HistoricalEvent from '../_component/historicalEvent';
import AttractionsSlider from '../_component/AttractionsSlider';
import TravelTips from '../_component/travelTips';
const forth = {
  tikona: {
    id: 'tikona',
    name: 'Tikona',
    heroText: 'A Pyramid of Power in the Sahyadris',
    subText: 'Tikona Fort was a key Maratha watchpost overseeing the Pawna region.',
    heroImage: '/images/tikona/hero.jpg',

    keyEvents: [
      {
        title: 'Captured by Shivaji Maharaj',
        date: '1657',
        description: 'Shivaji Maharaj took over Tikona from the Mughals to strengthen Maratha hold over the Konkan-Pune region.',
        image: '/images/tikona/event1.jpg'
      },
      {
        title: 'British Occupation',
        date: '1818',
        description: 'The British captured Tikona during their conquest of the Maratha Empire after the Third Anglo-Maratha War.',
        image: '/images/tikona/event2.jpg'
      }
    ],

    attractions: [
      {
        name: 'Pyramid-Shaped Summit',
        description: 'The fort’s unique triangular shape gives it the name "Tikona", meaning triangular.',
        image: '/images/tikona/attraction1.jpg'
      },
      {
        name: 'Large Stone Doorway',
        description: 'An impressive fortified entrance greets trekkers halfway up the climb.',
        image: '/images/tikona/attraction2.jpg'
      },
      {
        name: 'Caves and Water Tanks',
        description: 'Ancient rock-cut caves and water tanks show the fort’s self-sufficiency in earlier times.',
        image: '/images/tikona/attraction3.jpg'
      },
      {
        name: 'Trimbakeshwar Mahadev Temple',
        description: 'A small but revered temple dedicated to Lord Shiva sits at the top of the fort.',
        image: '/images/tikona/attraction4.jpg'
      },
      {
        name: 'View of Pawna Lake',
        description: 'Stunning panoramic views of Pawna Lake and surrounding forts like Tung and Lohagad.',
        image: '/images/tikona/attraction5.jpg'
      }
    ],

    travelTips: [
      'Ideal to visit between October and March; avoid monsoons if not an experienced trekker.',
      'Wear good trekking shoes—steep rock-cut steps near the summit can be slippery.',
      'Base village is Tikona Peth, easily reachable by road from Lonavala or Pune.'
    ],

    cta: {
      text: 'Conquer the triangle – Explore Tikona Fort today!',
      button: 'Plan Your Trek'
    }
  }
};










function Tikona  () {
  return (
    <div className='w-full max-w-[1400px] min-h-screen  flex flex-col items-center justify-center px-10'>
      <div className='relative w-full h-screen flex items-center justify-center lg:justify-end'>
        <HeroAnimation
          name={forth.tikona.name}
          heroText={forth.tikona.heroText}
          heroImage={forth.tikona.heroImage}
        />
      </div>
      <div>
        <HistoricalEvent 
          img1={forth.tikona.keyEvents[0].image}
          img2={forth.tikona.keyEvents[1].image}
          text1={forth.tikona.keyEvents[0].title}
          text2={forth.tikona.keyEvents[1].title}
        />
        <div className='w-full'>
          <AttractionsSlider
            title={forth.tikona.name}
            items={forth.tikona.attractions}
          />
        </div>
        <div className=' w-full'>
          <TravelTips
            title={'Travel Tips'}
            tips={forth.tikona.travelTips}
            cta={forth.tikona.cta}
          />

        </div>
      </div>
    </div>
  )
}

export default  Tikona   