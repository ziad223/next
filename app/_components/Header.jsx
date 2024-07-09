'use client'
import React from 'react'
// import useAuth from '../../Hooks/useAuth';
import { FaXTwitter, FaFacebookF, FaVimeoV, FaYoutube, FaPinterestP, FaInstagram} from "react-icons/fa6";
import { IoIosClose } from "react-icons/io";

import { FaAngleDown, FaTwitter } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import logo from '../../public/assets/logo.png';
// import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import Headroom from 'react-headroom';
// import Login from '../Login/Login';
// import Register from '../Register/Register';
// import OTPCode from '../OTPCode/OTPCode';
// import ForgetPassword from './../ForgetPassword/ForgetPassword';
// import ResetPassword from './../ResetPassword/ResetPassword';
import { GiPlagueDoctorProfile } from "react-icons/gi";
import { AiOutlineLogout } from "react-icons/ai";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
// import { useRouter } from 'next/navigation';
// import  './Header.css'
// Hello
const Header = () => {
    const location = usePathname();
    console.log(location);
    const isHome = location == '/';
    // const {img, userName, logOut} = useAuth()
    // const router = useRouter();
return (
    <header className={isHome? 'header-bg': 'absolute-header'}>
            <div className="header-top-wrap">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-12">
                            <div className="header-top-social">
                                <ul>
                                    <li><a href="#"><FaTwitter/></a></li>
                                    <li><a href="#"><FaFacebookF/></a></li>
                                    <li><a href="#"><FaVimeoV/></a></li>
                                    <li><a href="#"><FaYoutube/></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6 col-12">
                            <div className="header-top-login">
                                <ul>
                                    {/* {userName? */}
                                    <>
                                    <li>
                                        <Link href="profile/accountsetting">
                                        <div>
                                            <span>
                                                <GiPlagueDoctorProfile className='login-icon'/>
                                            </span>
                                            {/* {userName} */}
                                        </div>
                                        </Link>
                                    </li>
                                    <li className='or'></li>
                                    <li>
                                        <div onClick={() => {
                                            // logOut()
                                            // router('/')
                                        }}>
                                            <span>
                                                <AiOutlineLogout className='login-icon'/>
                                            </span>
                                            LogOut
                                        </div>
                                    </li>
                                    </>
                                    :
                                    <>
                                    <li   
                                        data-bs-toggle="modal"
                                        data-bs-target="#registerModal">
                                        <div>
                                            <span>
                                                <FaRegEdit className='login-icon '/>
                                            </span>
                                                Register
                                        </div>
                                    </li>
                                    <li className="or">or</li>

                                    <li
                                        data-bs-toggle="modal"
                                        data-bs-target="#loginModal">
                                        <div>
                                            <span>
                                                <FaRegEdit className='login-icon '/>
                                            </span>
                                                sign in
                                        </div>
                                    </li>
                                    </>
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='main-header menu-area'>             
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <Headroom >
                            <div className="menu-wrap">
                                <nav className="menu-nav show">
                                    <div className="logo"><Link href="/"><Image src={logo} alt="Logo"/></Link></div>
                                    <div className="navbar-wrap main-menu d-none d-lg-flex">
                                        <ul className="navigation">
                                            <li className="">
                                                <Link href='/' className='nav-link' >Home</Link>
                                            </li>
                                            {/* <li className="dropdown"><NavLink className='nav-link' to="pages">Pages</NavLink>
                                                <ul className="submenu">
                                                    <li><Link to="">Uc Overview</Link></li>
                                                    <li><Link to="">Uc Details</Link></li>
                                                </ul>
                                            </li> */}
                                            <li>
                                                <Link  href='/shop'  className='nav-link'>Shop</Link>                                               
                                            </li>
                                            {/* <li className="dropdown"><NavLink className='nav-link' to="blogs">Blog</NavLink></li> */}
                                            <li>
                                                <Link  href='/contacts'  className='nav-link'>contacts</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='d-flex'>
                                        <div className="header-action d-block">
                                            <ul>
                                                <li className="header-search d-none d-sm-block"><Link href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"><FaSearch/></Link></li>
                                            </ul>
                                        </div>
                                    <div className="mobile-nav-toggler cursor d-block d-lg-none" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><HiMiniBars3BottomRight/></div>
                                    </div>

                                </nav>
                            </div>
                            </Headroom>

                            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content">
                                        <form>
                                            <input type="text" placeholder="Search here..."/>
                                            <button><FaSearch/></button>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            {/* ====================================================================== */}
                            
{/* ============================================================================================================================ */}

                            <div  tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel"
                                    className='offcanvas offcanvas-end mobile-menu' >
                            <div className="btn-close p-0" data-bs-dismiss="offcanvas" aria-label="Close">
                                <IoIosClose />
                            </div>
                            <div className="offcanvas-header nav-logo" data-bs-dismiss="offcanvas">
                                <Link href="/"><Image src={logo} alt="V Logo"/></Link>      
                            </div>

                            <div className="offcanvas-body menu-outer p-0">
                                <ul className="navbar-nav justify-content-end flex-grow-1 navigation">
                                    <li data-bs-dismiss="offcanvas">
                                        <Link href='/' className='nav-link' to="">Home</Link>
                                    </li>                           
                                    <li 
                                        data-bs-dismiss="offcanvas" 
                                    >
                                        <Link href='/shop' className='nav-link' to='shop'>Shop</Link>
                                    </li> 
                                    <li data-bs-dismiss="offcanvas"><Link className='nav-link' href="contacts">contacts</Link></li>
                                </ul>
                                
                                <div className="social-links">
                                        <ul>
                                            <li><a href="#"><FaXTwitter/></a></li>
                                            <li><a href="#"><FaFacebookF/></a></li>
                                            <li><a href="#"><FaPinterestP/></a></li>
                                            <li><a href="#"><FaInstagram/></a></li>
                                            <li><a href="#"><FaYoutube/></a></li>
                                        </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Register/>
            <OTPCode/>
            <Login/>
            <ForgetPassword/>
            <ResetPassword/> */}
            
    </header>
)}
export default Header
