'use client'
import React, { useEffect, useState , useRef } from 'react'
import { FaPlay } from "react-icons/fa";
import { bestGames, mostPopularGames, offerProducts, serviceData } from '../data';
import { Fancybox } from "@fancyapps/ui";
import HomeSlider from './_components/HomeSlider';
import videoCover from '../public/assets/home/video_img.png';
import videoShapeTop from '../public/assets/home/video_top_shape.png'
import BestGameCard from './_components/BestGameCard';
// import Loading from '../../Components/Loading/Loading';
// import useQueryData from '../Hooks/useQueryData';
import BASE_URL from '../utils/apiConfig';
import Link from 'next/link';
import axios from 'axios';
import Image from 'next/image';
import SliderComp from './_components/SliderComp';


 export default  function Home() {
  const [data , setData] = useState([])
const homeSliderRef = useRef(null)
  
   useEffect(() =>{
   fetch(`${BASE_URL}/home`)
   .then(res => res.json())
   .then(res => setData(res.data))
   }, [])

    

    const mainSlider = data?.sliders
    const popularGames = data?.popular_games
    const popularSocialMedia = data?.popular_social_media
    const banners = data?.banners
    const videoLink = data?.video_link
   
  return (
    <main>
      <div className=' position-relative'>
        <div className="section-bg-img"></div>
        <HomeSlider reference={homeSliderRef} data={mainSlider}/>
           {/* Service Section */}
        <section className='service-sec'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="side-title mb-3">
                            <h3><FaPlay className='play-icon'/>OUR <span>Services</span></h3>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="game-boost-wrap">
                            {serviceData?.map(({icon, title, desc}, idx) =>{
                              return(
                                 <div key={idx} className="game-boost-item">
                                <div className="icon">
                                    {icon}
                                </div>
                                <div className="content">
                                    <h4>{title}</h4>
                                    <span>{desc}</span>
                                </div>
                            </div>
                              )
                            }
                           
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
            {/* Offers section */}
        <section className='offers-sec'>
            <div className='container'>
                <div className="row justify-content-center">
                    {banners?.map(({main_title, sub_title, description}, idx) => {
                      return(
                          <div key={idx} className="col-lg-6 col-md-9 col-12">
                        <div className="offer-item">
                        <div className="offer-thumb" style={{backgroundImage: `url(${offerProducts[idx].img})`}}></div>
                            <div className="offer-content">
                                <h6>{main_title?.split(' ')[0]} <span>{main_title?.substring(main_title?.indexOf(' ') + 1)}</span></h6>
                                <h3 className='text-white text-decoration-none'><Link href=""><span>{sub_title?.split(' ')[0]}</span> {sub_title?.substring(sub_title?.indexOf(' ') + 1)}</Link></h3>
                                <p>{description}</p>
                            </div>
                        </div>
                    </div>
                      )
                    }
                  
                    )}
                </div>
            </div>
            <div className="offer-line"></div>
            <div className="offer-line line2"></div>
        </section>
          {/* Popular Games Section */}
          <section className='popularGame-sec'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <div className="side-title">
                                <h3><FaPlay className='play-icon'/>POPULAR GAME <span>TOP UP</span></h3>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <SliderComp data={popularGames} marginB={false}/>
                </div>
            </div>
        </section>

           {/* Popular Social Media Section */}
        <section className='popularGame-sec'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <div className="side-title">
                                <h3 className='text-white'><FaPlay className='play-icon'/>POPULAR Social Media <span>TOP UP</span></h3>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <SliderComp data={popularSocialMedia}/>
                </div>
            </div>
        </section>

         {/* Video  */}
        <section className='video-area'>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 order-0 order-lg-2 col-12">
                        <div className="video-img">
                            <Image  src={videoCover} alt="video Cover Img" width={500} height={500}/>
                            <a href={videoLink} data-fancybox="video-gallery" className="popup-video">
                                <svg fill="#fff" width="100px" height="100px" viewBox="0 0 64 64" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" stroke="#fff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#ff" strokeWidth="0.512"><title></title><path d="M32,57.14a25.14,25.14,0,1,1,17.66-7.25,2,2,0,1,1-2.81-2.84A21.14,21.14,0,1,0,32,53.14a21.37,21.37,0,0,0,5.8-.8,2,2,0,1,1,1.09,3.85A25.35,25.35,0,0,1,32,57.14Z"></path><path d="M25.79,44.64a2,2,0,0,1-1-.27,2,2,0,0,1-1-1.73V21.36a2,2,0,0,1,3-1.73L45.21,30.27a2,2,0,0,1,0,3.46L26.79,44.37A2,2,0,0,1,25.79,44.64Zm2-19.82V39.18L40.21,32Z"></path></g><g id="SVGRepo_iconCarrier"><title></title><path d="M32,57.14a25.14,25.14,0,1,1,17.66-7.25,2,2,0,1,1-2.81-2.84A21.14,21.14,0,1,0,32,53.14a21.37,21.37,0,0,0,5.8-.8,2,2,0,1,1,1.09,3.85A25.35,25.35,0,0,1,32,57.14Z"></path><path d="M25.79,44.64a2,2,0,0,1-1-.27,2,2,0,0,1-1-1.73V21.36a2,2,0,0,1,3-1.73L45.21,30.27a2,2,0,0,1,0,3.46L26.79,44.37A2,2,0,0,1,25.79,44.64Zm2-19.82V39.18L40.21,32Z"></path></g></svg>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="video-content">
                            <div className="section-title mb-0">
                                <span className="sub-title">online gaming</span>
                                <h2 className="title text-white">JUST <span>FOR</span> online gaming platform feature</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and tyetting industry. Lorem Ipsum has been the industry's that
                                    standard dummy text ever since the when text of the printing.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="video-top-shape"><Image width={100} height={30} src={videoShapeTop} alt="Decoration img"/></div>
        </section>

         {/* Best Games */}
        <section className='best-game'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-12">
                        <div className="best-gamin-wrap">
                            <div className="best-game-title">
                                <h4> <span>best</span> games offers</h4>
                            </div>
                            <div className="row gx-0 gy-0">
                                {bestGames?.map(({img, name, price}, idx) =>
                                    <div key={idx} className="col-md-6 col-12">
                                        <BestGameCard img={img} name={name} price={price}/>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12">
                        <div className='best-gamin-wrap'>
                            <div className="best-game-title">
                                <h4><span>MOST</span> POPULAR</h4>
                            </div>
                                {mostPopularGames?.map(({img, name, price}, idx) =>
                                    <BestGameCard key={idx} img={img} name={name} price={price}/>
                                )}
                        </div>    
                    </div>
                </div>
            </div>
        </section>

        </div>
    </main>
  );
}
