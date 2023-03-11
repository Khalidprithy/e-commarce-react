import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillCartPlusFill } from 'react-icons/bs';

const Header = () => {
    return (
        <div className='sticky top-0 h-16 z-50 bg-gray-800 shadow-md shadow-gray-600'>
            <div className="navbar bg-gray-800 hover:bg-gray-800 px-2">
                <div className="w-full flex items-center justify-between gap-2 px-2">

                    <Link to='/' className="text-orange-600 font-medium normal-case text-xl px-4">Kinbo</Link>

                    <div className="form-control w-6/12">
                        <input type="text" placeholder="Search for your items" className="input input-bordered" />
                    </div>

                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt='' />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;