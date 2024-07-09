'use client'
import React from 'react'
import Slider from "react-slick";
import ProductCard from './ProductCard';
import PopularGameCard from './PopularGameCard';

const SliderComp = ({data, showRelated= false, chargeGame= false, image=null, marginB = true}) => {
    const settingGameCard = {
        infinite: data?.length > 4,
        autoplay: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        cssEase: "linear",
        arrows: false,
        lazyLoad: true,
        swipeToSlide: true,
        focusOnSelect: true,
        responsive: [
        {
            breakpoint: 1200,
            settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: data?.length > 3,
            }
        },
        {
            breakpoint: 992,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: data?.length > 3,
            }
        },
        {
            breakpoint: 768,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: data?.length > 3,
            }
        },
        {
            breakpoint: 411,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: data?.length > 2,
            }
        }
        ]
    }
    const settingProductCard = {
        infinite: data?.length > 1,
        autoplay: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: "linear",
        arrows: false,
        lazyLoad: true,
        swipeToSlide: true,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                }
            },
        ]
    }
    const settings = showRelated ? settingProductCard : settingGameCard;
return (
    <Slider {...settings}>
            {data?.map((item, idx) =>
                showRelated ? (
                    <div key={idx} className="col-lg-4 col-md-6 col-sm-8 col-10 px-2">
                        <ProductCard product={item} />
                    </div>
                ) : (
                    <div key={idx} className="col-3 px-2">
                        <PopularGameCard cartData={item} chargeGame={chargeGame} image={image} marginB= {marginB} />
                    </div>
                )
            )}
    </Slider>
)}

export default SliderComp