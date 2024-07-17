import React, { useState } from 'react';
import { FaHome, FaUser, FaCog, FaSignOutAlt, FaUsers, FaClipboardList, FaChartBar, FaQuestionCircle, FaHotel } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';

const AdminSidebar = () => {
    const [activeTab, setActiveTab] = useState('dashboard')
  return (
    <div className='flex  -mt-[96px]  bg-white mb-24'>

        <div className="w-[268px] h-[calc(100vh-92px)] bg-white text-gray-600 border-r border-gray-200 z-50" style={{ boxShadow: '0 10px 25px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.4)' }}>
        <h1 className="text-3xl font-bold mb-6 text-black ml-8 mt-8">ADMIN<span className='text-teal-500'>TB</span></h1>
        <div className='flex flex-col justify-between h-full'>
            <div className=''>
                <NavLink to='' className={`pl-2 w-full flex rounded-lg transition-all duration-300 ease-in-out ${activeTab === 'dashboard' ? 'bg-teal-500 text-teal-500 ' : 'hover:bg-teal-500 '}`} onClick={()=>setActiveTab('dashboard')}>
                    <div className='w-full rounded-lg  bg-white '>
                        <div className='text-lg w-full flex items-center space-x-2 pl-6 hover:bg-teal-500 py-4 hover:bg-opacity-20 hover:text-teal-500 rounded-lg transition duration-300 ease-in-out'>
                            <FaHome />
                            <span>Dashboard</span>
                        </div>
                    </div>
                </NavLink>
                <NavLink to='addhotels' className={`pl-2 w-full flex rounded-lg transition-all duration-300 ease-in-out ${activeTab === 'addHotesl' ? 'bg-teal-500 bg-opacity-20 text-teal-500' : 'hover:bg-teal-500'}`} onClick={()=>setActiveTab('addHotesl')}>
                    <div className='w-full rounded-lg  bg-white '>
                        <div className='text-lg w-full flex items-center space-x-2 pl-6 hover:bg-teal-500 py-4 hover:bg-opacity-20 hover:text-teal-500 rounded-lg transition duration-300 ease-in-out'>
                            <FaHotel/>
                            <span>Add Hotels</span>
                        </div>
                    </div>
                </NavLink>
                <NavLink to='addstates' className={`pl-2 w-full flex rounded-lg transition-all duration-300 ease-in-out ${activeTab === 'addStates' ? 'bg-teal-500 bg-opacity-20 text-teal-500' : 'hover:bg-teal-500'}`} onClick={()=>setActiveTab('addStates')}>
                    <div className='w-full rounded-lg  bg-white '>
                        <div className='text-lg w-full flex items-center space-x-2 pl-6 hover:bg-teal-500 py-4 hover:bg-opacity-20 hover:text-teal-500 rounded-lg transition duration-300 ease-in-out'>
                            <FaHotel/>
                            <span>Add States</span>
                        </div>
                    </div>
                </NavLink>
                <NavLink to="users" className={`pl-2 flex w-full rounded-lg transition-all duration-300 ease-in-out ${activeTab === 'users' ? 'bg-teal-500 bg-opacity-20 text-teal-500' : 'hover:bg-teal-500 '}`} onClick={()=>setActiveTab('users')}>
                    <div className='w-full rounded-lg  bg-white '>
                        <div className='text-lg w-full flex items-center space-x-2 pl-6 hover:bg-teal-500 py-4 hover:bg-opacity-20 hover:text-teal-500 rounded-lg transition duration-300 ease-in-out'>
                            <FaUsers />
                            <span>Users</span>
                        </div>
                    </div>
                </NavLink>
                <div className="pl-2 hover:bg-teal-500 w-full rounded-lg transition-all duration-300 ease-in-out">
                    <div className='w-full rounded-lg  bg-white '>
                        <NavLink className='text-lg w-full flex items-center space-x-2 pl-6 hover:bg-teal-500 py-4 hover:bg-opacity-20 hover:text-teal-500 rounded-lg transition duration-300 ease-in-out'>
                            <FaClipboardList />
                            <span>Bookings</span>
                        </NavLink>
                    </div>
                </div>
                <div className="pl-2 hover:bg-teal-500 w-full rounded-lg transition-all duration-300 ease-in-out">
                    <div className='w-full rounded-lg  bg-white '>
                        <NavLink className='text-lg w-full flex items-center space-x-2 pl-6 hover:bg-teal-500 py-4 hover:bg-opacity-20 hover:text-teal-500 rounded-lg transition duration-300 ease-in-out'>
                            <FaChartBar />
                            <span>State Info</span>
                        </NavLink>
                    </div>
                </div>
                
                <NavLink to="queries" className={`pl-2 flex w-full rounded-lg transition-all duration-300 ease-in-out ${location.pathname === '/admindashboard/queries' ? 'hover:bg-teal-500  hover:text-teal-500' : 'hover:bg-teal-500 focus:bg-teal-500 active:bg-teal-500'}`}>
                    <div className='w-full rounded-lg  bg-white '>
                        <div className='text-lg w-full flex items-center space-x-2 pl-6 hover:bg-teal-500 py-4 hover:bg-opacity-20 hover:text-teal-500 rounded-lg transition duration-300 ease-in-out'>
                            <FaQuestionCircle />
                            <span>Queries</span>
                        </div>
                    </div>
                </NavLink>
                
                
                

            </div>
            <div className='bg-white' style={{ boxShadow: '0 30px 25px 0px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.4)' }}>
                <div className="pl-2 hover:bg-teal-500 w-full rounded-lg transition-all duration-300 ease-in-out">
                    <div className='w-full rounded-lg  bg-white '>
                        <NavLink className='text-lg w-full flex items-center space-x-2 pl-6 hover:bg-teal-500 py-4 hover:bg-opacity-20 hover:text-teal-500 rounded-lg transition duration-300 ease-in-out'>
                            <FaCog />
                            <span>Settings</span>
                        </NavLink>
                    </div>
                </div>
                <div className="pl-2 hover:bg-teal-500 w-full rounded-lg transition-all duration-300 ease-in-out">
                    <div className='w-full rounded-lg  bg-white '>
                        <NavLink className='text-lg w-full flex items-center space-x-2 pl-6 hover:bg-teal-500 py-4 hover:bg-opacity-20 hover:text-teal-500 rounded-lg transition duration-300 ease-in-out'>
                            
                            <FaSignOutAlt />
                            <span>Logout</span>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
        <div>
        </div>
        </div>
        
            <Outlet/>
        
    </div>
  );
};

export default AdminSidebar;