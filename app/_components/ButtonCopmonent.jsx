import React from 'react'

const ButtonCopmonent = ({reference, prevArrow, nextArrow}) => {
  const handleClickPrev = () => reference.current.slickPrev();
  const handleClickNext = () => reference.current.slickNext();
  return (
    <>
        <button onClick={handleClickPrev} className='sliderPrevButton'> {prevArrow} </button>    
        <button onClick={handleClickNext} className='sliderNextButton'> {nextArrow} </button>
    </>
  )
}

export default ButtonCopmonent
