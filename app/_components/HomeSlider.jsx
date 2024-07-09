import React from 'react'
import Slider from 'react-slick';
import { MdOutlineNavigateNext } from "react-icons/md";
import ButtonCopmonent from './ButtonCopmonent';

const HomeSlider = ({reference, data }) => {
    const settings = {
        infinite: true,
        autoplay: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        lazyLoad: true,
        swipeToSlide: true,
        focusOnSelect: true,
    }
return (
    <section className='slider-area'>
            <div className="container">
                <div className='position-relative '>
                    <ButtonCopmonent reference={reference} nextArrow= <MdOutlineNavigateNext/> />
                    <Slider {...settings} ref={reference}>
                        {data?.map(({image, main_title, sub_title}, idx) =>
                            <div key={idx}>
                                <figure className='single-slide m-0' style={{backgroundImage: `url(${image})`}}>
                                    <figcaption>
                                        <div className="row justify-content-end h-100 align-items-center">
                                            <div className="col-xl-6 col-lg-7 col-12">
                                                <div className="slider-content">
                                                    <h6>CREATE AND <span className='fst-italic'>game</span></h6>
                                                    <h2>{main_title}</h2>
                                                    <p>{sub_title}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </figcaption>
                                </figure>
                            </div>
                        )}

                </Slider>
                
                </div>

            </div>
    </section>
)}
export default HomeSlider