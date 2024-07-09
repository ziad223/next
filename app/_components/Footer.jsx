'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/assets/logo.png';
import paymentMethods from '../../public/assets/footer/card_img.png';
import { recentCommentsFooter } from '../../data';
import { IoIosMailOpen } from "react-icons/io";
import { FaHeadphonesSimple, FaXTwitter, FaFacebookF, FaPinterestP, FaInstagram } from "react-icons/fa6";
import BASE_URL from '@/utils/apiConfig';
// import Loading from '../Loading/Loading';
// import styles from './Footer.module.css'; // Assuming you are using CSS modules

const Footer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/home`)
      .then(res => res.json())
      .then(res => setData(res?.data?.data));
  }, []);

  const mail = data?.email;
  const phone = data?.phone1;
  const address = data?.address;
  const trendGames = data?.trend_games;
  const trendSocial = data?.trend_social_media;

  return (
    <footer>
      <div className="footer-top-area">
        <div className="container">
          <div className="footer-menu-wrap">
            <div className="row">
              <div className="col-12">
                <div className="footer-menu">
                  <nav>
                    <ul>
                      <li className="menu-item"><Link href="">Home</Link></li>
                      <li className="footer-logo"><Link href=""><Image src={logo} alt="Logo" width={100} height={50} /></Link></li>
                      <li className="menu-item contacts"><Link href="contacts">Contact</Link></li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-12">
              <div className='footer-widget'>
                <div className="fw-title">
                  <h6>Address Office</h6>
                </div>
                <div className="footer-contact-info">
                  <ul>
                    <li><p>{address}<br />
                      <span>Open:</span> 8:30 AM 9:30 PM</p></li>
                    <li>
                      <a href={`tel:${phone}`}>
                        <span><FaHeadphonesSimple /></span> <span>Phone: </span>+{phone}
                      </a>
                    </li>
                    <li>
                      <a href={`mailto:${mail}`}>
                        <span><IoIosMailOpen /></span> <span>Email: </span>{mail}
                      </a>
                    </li>
                  </ul>
                  <div className="footer-social">
                    <a href={data?.facebook} target="_blank"><FaFacebookF /></a>
                    <a href={data?.x} target="_blank"><FaXTwitter /></a>
                    <a href={data?.pinterest} target="_blank"><FaPinterestP /></a>
                    <a href={data?.instagram} target="_blank"><FaInstagram /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="footer-widget">
                <div className="fw-title">
                  <h6>Trend Games</h6>
                </div>
                <div className="fw-link">
                  <ul>
                    {trendGames?.map(({ name, id }, idx) =>{
                      return(
                        <li key={idx}>
                        <Link href={`/product/${id}`}>{name}</Link>
                      </li>
                      )
                    }
                      
                    )}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="footer-widget">
                <div className="fw-title">
                  <h6>Trend Social Media</h6>
                </div>
                <div className="fw-link">
                  <ul>
                    {trendSocial?.map(({ name, id }, idx) =>{
                      return(
                        <li key={idx}>
                        <Link className='TEXT-WHITE' href={`/product/${id}`}>{name}</Link>
                      </li>
                      )
                    }
                      
                    )}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="footer-widget">
                <div className="fw-title">
                  <h6>Recent Comments</h6>
                </div>
                <div className="rc-comments">
                  <ul>
                    {recentCommentsFooter?.map(({ name, comment }, idx) =>
                      <li key={idx}>
                        <span>{name}:</span>
                        <Link href="">{comment}</Link>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-wrap">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="copyright-text">
                <p>Copyright © 2024 <Link href="">Vinom</Link> All Rights Reserved.</p>
              </div>
            </div>
            <div className="col-12 col-md-6 d-none d-md-block">
              <div className="payment-method-img">
                <Image src={paymentMethods} alt="Available Payment Methods" width={200} height={30} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
