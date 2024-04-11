import React, { useState, useCallback } from 'react';
import { FaRegUser } from 'react-icons/fa'
import { BsHeart } from 'react-icons/bs'
import { BsHandbag } from 'react-icons/bs'
import Search from './Search';
import Men from './SubMenu/Men'
import Women from './SubMenu/Women'
import Kids from './SubMenu/Kids'
import Beauty from './SubMenu/Beauty'
import Home from './SubMenu/Home'
import Profile from './SubMenu/Profile'
import Studio from './SubMenu/Studio'
import { Link } from 'react-router-dom';
import Myntra from '../images/myntra.svg'
import './Navbar.css'

const Navbar = () => {


    const [Menu1, setMenu1] = useState('hidden')
    const [Menu2, setMenu2] = useState('hidden')

    const callback1 = useCallback((Menu) => {
        setMenu1(Menu)
    }, []);
    const callback2 = useCallback((Menu) => {
        setMenu2(Menu)
    }, []);

    return (
        <div className=' sticky top-0 2xl:w-[100%] xl:w-[100%] lg:w-[100%] mx-auto max-w-[100%] h-[80px] bg-[#fff] contenthide z-10 '>
            <div className='2xl:grid xl:grid grid-cols-2 lg:flex h-full mx-6'>
                <ul className='h-full flex font1 font-semibold text-base md:text-[14px] text-[#282c3f] tracking-[.3px] uppercase'>
                    <Link to="/" className='w-max px-4 flex items-stretch'>
                        <li className='w-max flex items-stretch'><img src={Myntra} alt="Myntra Logo" className='w-14' /></li>
                    </Link>
                    <Link className='w-max px-3 flex items-stretch text-decoration-none text-black' to="/">
                        <li className='w-max flex  justify-center items-center border-4 border-transparent cborder1' onMouseEnter={() => (setMenu1('block'))} onMouseLeave={() => (setMenu1('hidden'))}>
                            <h5 className='px-3'>MEN</h5>
                        </li>
                    </Link>

                    <li className='w-max flex justify-center items-center border-4 border-transparent cborder2 ' onMouseEnter={() => (setMenu2('block'))} onMouseLeave={() => (setMenu2('hidden'))}>
                        <h5 className='px-3'>WOMEN</h5>
                    </li>
                    <li className='w-max flex justify-center items-center border-4 border-transparent cborder3'>
                        <h5 className='px-3'>KIDS</h5>
                    </li>
                    <li className='w-46 flex justify-center items-center border-4 border-transparent cborder4'>
                        <h5 className='px-3'>HOME&nbsp;&&nbsp;LIVING</h5>
                    </li>
                    <li className='w-max flex justify-center items-center border-4 border-transparent cborder5'>
                        <h5 className='px-3'>BEAUTY</h5>
                    </li>
                    <li className='w-max flex justify-center items-center border-4 border-transparent cborder6'>
                        <h5 className='px-3'>STUDIO</h5>
                    </li>
                </ul>
                <div className='h-full justify-center items-center'>
                    <ul className='flex float-right  h-full  text-[#282c3f] tracking-[.3px] sent'>
                        <li className='mr-16'>
                            <Search />
                        </li>
                        <li className='w-max flex justify-center items-center font1 font-semibold capitalize no-underline text-sm border-4 border-transparent '>
                            <h1 className='px-3 text-center text-xs relative mt-4'>
                                <span className='text-lg block absolute -top-5 left-1/3'><FaRegUser /></span>
                                <span className='block'>Profile</span>
                            </h1>
                        </li>
                        <li className='w-max mt-4 flex justify-center items-center font1 font-semibold capitalize no-underline text-sm border-4 border-transparent '>
                            <Link to="/Wishlist" className='text-decoration-none text-black'>
                                <h1 className='px-3 text-xs text-center relative'>
                                    <span className='text-lg absolute -top-5 left-1/3'><BsHeart /></span>
                                    Wishlist
                                </h1>
                            </Link>
                        </li>

                        <li className='w-max mt-4 flex justify-center items-center font1 font-semibold capitalize no-underline text-sm border-4 border-transparent '>
                            <h1 className='px-3 text-xs text-center relative'>
                                <span className='text-lg absolute -top-5 left-1/3'><BsHandbag /></span>
                                Bag
                            </h1>
                        </li>
                    </ul>
                </div>
            </div>
            <Men CMenu1={Menu1} parentCallback1={callback1} />
            <Women CMenu2={Menu2} parentCallback2={callback2} />
        </div>
    )
}

export default Navbar;