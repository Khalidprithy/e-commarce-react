import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiFillShop } from 'react-icons/ai';
import { BsTools } from 'react-icons/bs';
import { RiLogoutCircleLine, RiLoginCircleLine } from 'react-icons/ri';
import { GiOpenedFoodCan, GiFruitBowl, GiCirclingFish, GiMeat, GiCabbage } from 'react-icons/gi';
import { FaChild, FaTools } from 'react-icons/fa';
import { FcBusinessman, FcBusinesswoman } from 'react-icons/fc';
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css';
import { MyContext } from '../context/AppContext';

const Sidebar = () => {

    const { userToken, handleLogout } = useContext(MyContext);

    const mainMenu = [
        { name: 'Home', path: '/', icon: AiFillShop, color: '#D35400 ' },
        { name: 'Man', path: '/man', icon: FcBusinessman, color: '#D35400 ' },
        { name: 'Woman', path: '/woman', icon: FcBusinesswoman, color: '#D35400 ' },
        { name: 'Kids', path: '/kids', icon: FaChild, color: '#28B463 ' }
    ];

    const foodMenu = [
        { name: 'Vegetables', path: '/vegetables', icon: GiCabbage, color: '#17A589' },
        { name: 'Meat', path: '/meat', icon: GiMeat, color: '#D35400 ' },
        { name: 'Fish', path: '/fish', icon: GiCirclingFish, color: '#229954' },
        { name: 'Fruits', path: '/fruits', icon: GiFruitBowl, color: '#D35400 ' }
    ]


    return (
        <div className='fixed z-40 menu p-2 mt-16 pb-16 w-16 md:w-40 h-[calc(100vh-64px)] bg-gray-800 pt-5 text-base-content transition-all ease-in-out duration-500'>
            <PerfectScrollbar>
                <ul>
                    {mainMenu.map((menu) =>
                        <li>
                            <Link to={menu?.path} className="flex items-center justify-left px-3 py-3 text-base font-normal text-gray-100 rounded-md hover:text-gray-700 dark:text-white hover:dark:text-gray-200 hover:bg-gray-500 dark:hover:bg-gray-700">
                                {React.createElement(menu.icon, { className: `text-2xl`, style: { color: menu.color } })} <span className="font-semibold hidden md:block">{menu.name}</span>
                            </Link>
                        </li>)}

                    <div className='my-2 bg-gray-100 h-[1px] w-full'></div>

                    <div className="collapse ml-0 md:collapse-arrow bg-base-700 w-12 md:w-full rounded-md">
                        <input type="checkbox" className="peer" />
                        <div className="collapse-title flex items-center bg-gray-800 py-2 text-base font-normal text-gray-100 rounded-md">
                            <GiOpenedFoodCan className='text-2xl mr-3 text-orange-600' />
                            <span className='font-semibold hidden md:block'>Foods</span>
                        </div>
                        <div className="collapse-content pl-0 rounded-lg peer-checked:bg-gray-700">

                            {foodMenu.map((menu) =>
                                <li>
                                    <Link to={menu?.path} className="flex items-center justify-left w-12 md:w-36 px-3 py-3 text-base font-normal text-gray-100 rounded-md hover:text-gray-700 dark:text-white hover:dark:text-gray-200 hover:bg-gray-500 dark:hover:bg-gray-700">
                                        {React.createElement(menu.icon, { className: `text-2xl`, style: { color: menu.color } })}  <span className="font-semibold hidden md:block">{menu.name}</span>
                                    </Link>
                                </li>)}
                        </div>
                    </div>


                    <li>
                        <Link to="/kids" className="flex items-center justify-left px-3 py-3 mt-1 text-base font-normal text-gray-100 rounded-md hover:text-gray-700 dark:text-white hover:dark:text-gray-200 hover:bg-gray-500 dark:hover:bg-gray-700">
                            <lord-icon
                                src="https://cdn.lordicon.com/hbigeisx.json"
                                trigger="hover"
                                colors="primary:#e86830"
                                style={{ width: "25px", height: "25px" }}>
                            </lord-icon>

                            <span className='font-semibold hidden md:block'>Tools</span>
                        </Link>
                    </li>


                    {/* Logout button */}

                    <li className='fixed bottom-0 left-0 w-16 md:w-40 z-40 p-1 bg-gray-600'>
                        <>
                            {
                                !userToken ?
                                    <label
                                        // onClick={() => setIsAuth(!isAuth)}
                                        htmlFor="open-login-modal" className="btn">
                                        <RiLoginCircleLine className='text-2xl text-red-400' />
                                        <span className='font-semibold hidden md:block text-gray-100'>Login</span>
                                    </label>
                                    :
                                    <button
                                        onClick={handleLogout}
                                        className="flex items-center justify-left mx-auto px-3 py-3 text-base font-normal text-gray-100 rounded-md hover:text-red-400 dark:text-white hover:dark:text-gray-200 hover:bg-gray-600 dark:hover:bg-gray-700">
                                        <RiLogoutCircleLine className='text-2xl text-red-400' />
                                        <span className='font-semibold hidden md:block'>Logout</span>
                                    </button>
                            }
                        </>
                    </li>
                </ul>
            </PerfectScrollbar>
        </div>
    );
};

export default Sidebar;