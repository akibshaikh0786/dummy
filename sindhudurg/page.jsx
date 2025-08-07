import React from 'react'
import HeroAnimation from '../_component/HeroAnimation';
import HistoricalEvent from '../_component/historicalEvent';
import AttractionsSlider from '../_component/AttractionsSlider';
import TravelTips from '../_component/travelTips';
const forth = {
  sindhudurg: {
    id: 'sindhudurg',
    name: 'Sindhudurg',
    heroText: 'Where the Arabian Sea Meets Maratha Valor',
    subText: 'Built by Shivaji Maharaj, Sindhudurg guarded the Konkan coast with unmatched might.',
    heroImage: '/images/sindhudurg/hero.jpg',

    keyEvents: [
      {
        title: 'Construction of Sindhudurg',
        date: '1664–1667',
        description: 'Commissioned by Chhatrapati Shivaji Maharaj to counter foreign naval threats, this fort was built over 3 years using massive stones and lead.',
        image: '/images/sindhudurg/event1.jpg'
      },
      {
        title: 'Strategic Naval Base',
        date: '17th–18th Century',
        description: 'Sindhudurg served as the primary naval headquarters of the Maratha Empire, defending the coast against Portuguese and British attacks.',
        image: '/images/sindhudurg/event2.jpg'
      }
    ],

    attractions: [
      {
        name: 'Shivaji Maharaj’s Hand and Footprint',
        description: 'A rare temple with preserved prints of Shivaji Maharaj’s hands and feet—a symbol of his presence.',
        image: '/images/sindhudurg/attraction1.jpg'
      },
      {
        name: 'Massive Fort Walls',
        description: 'Built with laterite stones, the walls stretch over 3 km and blend into the sea—an architectural marvel.',
        image: '/images/sindhudurg/attraction2.jpg'
      },
      {
        name: 'Hidden Main Entrance',
        description: 'Ingeniously designed main gate remains camouflaged until approached closely—meant to confuse invaders.',
        image: '/images/sindhudurg/attraction3.jpg'
      },
      {
        name: 'Shivrajeshwar Temple',
        description: 'Only temple dedicated to Shivaji Maharaj, built inside a fort—a serene and respectful tribute.',
        image: '/images/sindhudurg/attraction4.jpg'
      },
      {
        name: 'Surrounding Coral Reefs',
        description: 'Explore the vibrant marine life near the fort—a unique blend of history and nature.',
        image: '/images/sindhudurg/attraction5.jpg'
      }
    ],

    travelTips: [
      'Best time to visit is October to March for pleasant weather.',
      'Wear sturdy shoes and carry sun protection as the fort involves walking and sea breeze.',
      'Reach Malvan by road and take a local boat to the fort; early morning boats are ideal.'
    ],

    cta: {
      text: 'Uncover the Sea Fort Legacy of Shivaji Maharaj!',
      button: 'Plan Your Visit Now'
    }
  }
};


function Sindhudurg () {
  return (
    <div className='w-full max-w-[1400px] min-h-screen  flex flex-col items-center justify-center px-10'>
      <div className='relative w-full h-screen flex items-center justify-center lg:justify-end'>
        <HeroAnimation
          name={forth.sindhudurg.name}
          heroText={forth.sindhudurg.heroText}
          heroImage={forth.sindhudurg.heroImage}
        />
      </div>
      <div>
        <HistoricalEvent 
          img1={forth.sindhudurg.keyEvents[0].image}
          img2={forth.sindhudurg.keyEvents[1].image}
          text1={forth.sindhudurg.keyEvents[0].title}
          text2={forth.sindhudurg.keyEvents[1].title}
        />
        <div className='w-full'>
          <AttractionsSlider
            title={forth.sindhudurg.name}
            items={forth.sindhudurg.attractions}
          />
        </div>
        <div className=' w-full'>
          <TravelTips
            title={'Travel Tips'}
            tips={forth.sindhudurg.travelTips}
            cta={forth.sindhudurg.cta}
          />

        </div>
      </div>
    </div>
  )
}

export default Sindhudurg 