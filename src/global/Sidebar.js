import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillShop } from 'react-icons/ai';
import { RiLogoutCircleLine } from 'react-icons/ri';
import { GiOpenedFoodCan, GiFruitBowl, GiCirclingFish, GiMeat, GiCabbage } from 'react-icons/gi';
import { FaChild } from 'react-icons/fa';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { FcBusinessman, FcBusinesswoman } from 'react-icons/fc';
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css';
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className='fixed z-40 menu p-2 mt-16 w-16 md:w-40 h-[calc(100vh-64px)] bg-gray-800 pt-5 text-base-content transition-all ease-in-out duration-500'>
            <PerfectScrollbar>
                <ul>
                    <li>
                        <Link to="/" className="flex items-center justify-left px-3 py-3 text-base font-normal text-gray-100 rounded-md hover:text-gray-700 dark:text-white hover:dark:text-gray-200 hover:bg-gray-500 dark:hover:bg-gray-700">
                            <AiFillShop className='text-2xl text-orange-400' />
                            <span className='font-semibold hidden md:block'>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/man" className="flex items-center justify-left px-3 py-3 text-base font-normal text-gray-100 rounded-md hover:text-gray-700 dark:text-white hover:dark:text-gray-200 hover:bg-gray-500 dark:hover:bg-gray-700">
                            <FcBusinessman className='text-2xl' />
                            <span className='font-semibold hidden md:block'>Man</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/woman" className="flex items-center justify-left px-3 py-3 text-base font-normal text-gray-100 rounded-md hover:text-gray-700 dark:text-white hover:dark:text-gray-200 hover:bg-gray-500 dark:hover:bg-gray-700">
                            <FcBusinesswoman className='text-2xl' />

                            <span className='font-semibold hidden md:block'>Woman</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/kids" className="flex items-center justify-left px-3 py-3 text-base font-normal text-gray-100 rounded-md hover:text-gray-700 dark:text-white hover:dark:text-gray-200 hover:bg-gray-500 dark:hover:bg-gray-700">
                            <FaChild className='text-2xl text-orange-600' />

                            <span className='font-semibold hidden md:block'>Kids</span>
                        </Link>
                    </li>

                    <div className='my-2 bg-gray-100 h-[1px] w-full'></div>

                    <li>
                        <Link to="/foods" className="flex items-center justify-left px-3 py-3 text-base font-normal text-gray-100 rounded-md hover:text-gray-700 dark:text-white hover:dark:text-gray-200 hover:bg-gray-500 dark:hover:bg-gray-700">
                            <GiOpenedFoodCan className='text-2xl text-orange-600' />
                            <span className='font-semibold hidden md:block'>Foods</span>
                            <MdOutlineKeyboardArrowDown className='text-2xl text-orange-600 hidden md:block' />

                        </Link>
                    </li>

                    <li>
                        <Link to="/kids" className="flex items-center justify-left px-3 py-3 text-base font-normal text-gray-100 rounded-md hover:text-gray-700 dark:text-white hover:dark:text-gray-200 hover:bg-gray-500 dark:hover:bg-gray-700">
                            <GiCabbage className='text-2xl text-green-600' />

                            <span className='font-semibold hidden md:block'>Vegetables</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/kids" className="flex items-center justify-left px-3 py-3 text-base font-normal text-gray-100 rounded-md hover:text-gray-700 dark:text-white hover:dark:text-gray-200 hover:bg-gray-500 dark:hover:bg-gray-700">
                            <GiMeat className='text-2xl text-red-500' />

                            <span className='font-semibold hidden md:block'>Meat</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/kids" className="flex items-center justify-left px-3 py-3 text-base font-normal text-gray-100 rounded-md hover:text-gray-700 dark:text-white hover:dark:text-gray-200 hover:bg-gray-500 dark:hover:bg-gray-700">
                            <GiCirclingFish className='text-2xl text-teal-600' />

                            <span className='font-semibold hidden md:block'>Fish</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/kids" className="flex items-center justify-left px-3 py-3 text-base font-normal text-gray-100 rounded-md hover:text-gray-700 dark:text-white hover:dark:text-gray-200 hover:bg-gray-500 dark:hover:bg-gray-700">
                            <GiFruitBowl className='text-2xl text-blue-600' />

                            <span className='font-semibold hidden md:block'>Fruits</span>
                        </Link>
                    </li>

                    <li className='fixed bottom-0 left-0 w-16 md:w-40 z-40 p-1 bg-gray-600'>
                        <Link to="/login" className="flex items-center justify-left mx-auto px-3 py-3 text-base font-normal text-gray-100 rounded-md hover:text-red-400 dark:text-white hover:dark:text-gray-200 hover:bg-gray-600 dark:hover:bg-gray-700">
                            <RiLogoutCircleLine className='text-2xl text-red-400' />
                            <span className='font-semibold hidden md:block'>Logout</span>
                        </Link>
                    </li>
                </ul>
            </PerfectScrollbar>
        </div>
    );
};

export default Sidebar;