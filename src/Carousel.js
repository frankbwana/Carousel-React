import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'react-feather'

const Carousel = ({ children: slides}) => {

   const [ currentSlide, setCurrentSlide] = useState(0)

   /* const prevSlide = () => 
    setCurrentSlide( (currentSlide) => (currentSlide === 0 ? slides.length - 1 : currentSlide - 1) ) */


   const prevSlide = () => {
    const isFirstSlide = currentSlide === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentSlide - 1;
    setCurrentSlide(newIndex);
   }
   const nextSlide = () => {
    const isLastSlide = currentSlide === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentSlide + 1;
    setCurrentSlide(newIndex);
   } 
   

  return (
    <div className=' overflow-hidden relative'>
        <div className=' flex transition-transform ease-out duration-500'>
          {slides}
        </div>
        <div className=' absolute inset-0 flex items-center justify-between p-4'>
        <button className=' rounded-full bg-white/80 hover:bg-white' onClick={prevSlide}>
          <ChevronLeft size={40} />
        </button>
        <button className=' rounded-full bg-white/80 hover:bg-white' onClick={nextSlide}>
          <ChevronRight size={40} />
        </button>
        </div>
    </div>
  )
}

export default Carousel