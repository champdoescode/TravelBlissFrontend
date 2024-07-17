import React from 'react'
import { FaBell, FaSearch } from 'react-icons/fa'
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaRegCircleUser } from "react-icons/fa6";

import { IoGiftOutline } from "react-icons/io5";

import { TbMessage } from "react-icons/tb";

import { NavLink } from 'react-router-dom';



const ChartNavbar = () => {
  return (
    <>
        <div className='flex gap-4 items-center'>
            <div className='w-3/5 relative  my-4 '>              
                <input className='focus:outline-none w-full bg-white h-12 rounded-xl pl-4' type="text" placeholder='Search'/>
                <div className='text-gray-400 absolute top-0 text-2xl right-0 -translate-x-1/2 translate-y-1/2'>
                    <FaSearch/>
                </div>
            </div>
            <div>
                <NavLink>
                <div className='text-3xl text-teal-500 bg-teal-500 bg-opacity-20 p-2 rounded-xl'>
                    <IoIosNotificationsOutline />
                </div>
                </NavLink>
            </div>
            <div>
                <NavLink>
                <div className='text-3xl text-teal-500 bg-teal-500 bg-opacity-20 p-2 rounded-xl'>
                    <TbMessage />
                </div>
                </NavLink>
            </div>
            <div>
                <NavLink>

                <div className='text-3xl text-teal-500 bg-teal-500 bg-opacity-20 p-2 rounded-xl'>
                    <IoGiftOutline />
                </div>
                </NavLink>
            </div>
            <div className='border border-gray-400 h-12'>

            </div>
            <div className='flex justify-center items-center'>
                <div className='text-neutral-500 text-2xl'>Hello, </div>
                <div className='text-2xl'>Alex</div>
                <div className='text-2xl ml-4'>
                    <FaRegCircleUser />
                </div>
            </div>
        </div>
    </>
  )
}

export default ChartNavbar