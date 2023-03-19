import React from 'react';
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import SocialLogin from '../components/SocialLogin';

const LoginModal = () => {

    const [openTab, setOpenTab] = React.useState(1);

    return (
        <>
            <input type="checkbox" id="open-login-modal" className="modal-toggle" />
            <label htmlFor="open-login-modal" className="modal cursor-pointer backdrop-blur-sm">
                <label className="modal-box relative rounded-md bg-white/40 backdrop-blur-xl" htmlFor="">
                    <label htmlFor="open-login-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className='mt-5'>
                        <SocialLogin />
                        <div className="divider">OR</div>
                        <div className="mx-4">
                            <ul
                                className="flex items-center gap-4 mb-0 list-none flex-row"
                                role="tablist"
                            >
                                <li className="mt-2 md:mt-0 last:mr-0 flex-auto text-center w-full md:w-44">
                                    <a
                                        className={
                                            "text-lg py-2 font-bold shadow rounded-md block leading-normal " +
                                            (openTab === 1
                                                ? "text-white bg-gray-700 "
                                                : "text-gray-800 bg-white border border-gray-700")
                                        }
                                        onClick={e => {
                                            e.preventDefault();
                                            setOpenTab(1);
                                        }}
                                        data-toggle="tab"
                                        href="#link1"
                                        role="tablist"
                                    >
                                        Login
                                    </a>
                                </li>
                                <li className="mt-2 md:mt-0 last:mr-0 flex-auto text-center w-full md:w-44">
                                    <a
                                        className={
                                            "text-lg py-2 font-bold shadow rounded-md block leading-normal " +
                                            (openTab === 2
                                                ? "text-white bg-gray-700 "
                                                : "text-gray-800 bg-white border border-gray-700")
                                        }
                                        onClick={e => {
                                            e.preventDefault();
                                            setOpenTab(2);
                                        }}
                                        data-toggle="tab"
                                        href="#link2"
                                        role="tablist"
                                    >
                                        Sign Up
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="relative flex flex-col min-w-0 break-words w-full mb-6">
                            <div className="px-1 md:px-4 py-5 flex-auto">
                                <div className="tab-content tab-space">
                                    <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                        <Login />
                                    </div>
                                    <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                                        <SignUp />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </label>
            </label>
        </>
    );
};

export default LoginModal;