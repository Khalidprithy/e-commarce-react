import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from '../context/AppContext';

const Header = () => {

    const { user, tempUser } = useContext(MyContext);

    return (
        <div className='fixed top-0 left-0 right-0 h-16 z-50 bg-gray-800 shadow-md shadow-gray-600'>
            <div className="navbar bg-gray-800 hover:bg-gray-800 px-2">
                <div className="w-full flex items-center justify-between gap-2 px-2">

                    <Link to='/' className="flex items-center text-orange-600 font-bold normal-case text-2xl px-4">
                        <lord-icon
                            src="https://cdn.lordicon.com/rmzhcgbh.json"
                            trigger="hover"
                            style={{ width: "50px", height: "50px" }}>
                        </lord-icon>
                        Kinbo
                        <lord-icon
                            src="https://cdn.lordicon.com/xplwhusq.json"
                            trigger="hover"
                            style={{ width: "50px", height: "50px" }}>
                        </lord-icon>
                    </Link>

                    <div className="form-control w-6/12">
                        <input type="text" placeholder="Search for your items" className="input input-bordered" />
                    </div>

                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-12 rounded-full border border-gray-300">
                                {
                                    tempUser?.profilePicture ?
                                        <img src={tempUser?.profilePicture} alt='' />
                                        :
                                        <lord-icon
                                            src="https://cdn.lordicon.com/ajkxzzfb.json"
                                            trigger="hover"
                                            colors="primary:#ffc738,secondary:#4bb3fd"
                                            state="hover-looking-around"
                                            style={{ width: "40px", height: "40px" }}>
                                        </lord-icon>
                                }

                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-gray-700 text-gray-50 rounded-md w-52">
                            <li>
                                <Link to='/profile' className="justify-between">
                                    Profile
                                    <span className="badge">{tempUser?.name}</span>
                                </Link>
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