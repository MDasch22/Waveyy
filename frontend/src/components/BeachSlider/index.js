import React, {useState , useEffect } from 'react'
import { SliderData } from './sliderData'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
import './slider.css';


export default function BeachSlider({slides}) {
  const [current, setCurrent] = useState(0);
  const length = slides.length

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length -1 : current - 1)
  }

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime)
  }

  useEffect(() => {
    if(autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  },[current])


  if(!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='slider'>
      {/* <FaArrowAltCircleLeft className='leftArrow' onClick={prevSlide}/>
      <FaArrowAltCircleRight className='RightArrow' onClick={nextSlide}/> */}
      {SliderData.map((slide, index) => {
        return (
            <div className={index === current ? 'slide-active': 'slide'} key={index}>

              {index === current && (
                   <img src={slide.image} alt='travelImg' className='sliderImg' ></img>
                )}
            </div>
          )
      })}
    </section>
  )
}
