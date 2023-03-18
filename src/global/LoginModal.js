import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';
import { MyContext } from '../context/AppContext';

const LoginModal = () => {

    const [passwordShow, setPasswordShow] = useState(false);
    const { register, formState: { errors }, handleSubmit } = useForm({
        mode: 'onTouched'
    });

    const { handleSignUp } = useContext(MyContext);

    return (
        <>
            <input type="checkbox" id="open-login-modal" className="modal-toggle" />
            <div className="modal backdrop-blur-sm">
                <div className="modal-box relative rounded-md bg-white/40 backdrop-blur-xl">
                    <label htmlFor="open-login-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className='mt-10'>
                        <div class="p-5">
                            <div class="grid grid-cols-3 gap-1">
                                <button type="button" class="transition duration-200 border border-gray-300 bg-gray-300 text-gray-700 w-full py-2.5 rounded-lg text-md font-semibold shadow-sm hover:shadow-md text-center inline-block">Twitter</button>
                                <button type="button" class="transition duration-200 border border-gray-300 bg-gray-300 text-gray-700 w-full py-2.5 rounded-lg text-md font-semibold shadow-sm hover:shadow-md text-center inline-block">Google</button>
                                <button type="button" class="transition duration-200 border border-gray-300 bg-gray-300 text-gray-700 w-full py-2.5 rounded-lg text-md font-semibold shadow-sm hover:shadow-md text-center inline-block">Facebook</button>
                            </div>
                        </div>
                        <div className="divider">OR</div>
                        <form onSubmit={handleSubmit(handleSignUp)}>
                            <div className="form-control w-full">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="input input-bordered w-full"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: 'Please Enter Your First Name'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.name && <span className="label-text text-base font-semibold text-red-700">{errors.name.message}</span>}
                                </label>
                            </div>
                            <div className="form-control w-full">
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className={`input input-bordered w-full ${errors.email && 'focus:border-red-600 focus:ring-red-600 border-2 border-red-600'}`}
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: 'Please Enter Your Email'
                                        },
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: 'Enter a valid Email'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text text-base font-semibold text-red-700">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text text-base font-semibold text-red-700">{errors.email.message}</span>}
                                </label>
                            </div>

                            <div className="form-control w-full relative">
                                <input
                                    type={passwordShow ? 'text' : 'password'}
                                    placeholder="Your Password"
                                    className={`input input-bordered w-full ${errors.password && 'focus:border-red-600 focus:ring-red-600 border-2 border-red-600'}`}
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: 'Please Enter You Password'
                                        }
                                    })}
                                />
                                <div className='text-2xl absolute top-3 right-2'>
                                    {
                                        (passwordShow === false) ? <AiFillEyeInvisible onClick={() => setPasswordShow(!passwordShow)}></AiFillEyeInvisible> : <AiFillEye onClick={() => setPasswordShow(!passwordShow)}></AiFillEye>
                                    }
                                </div>
                                <label className="label">
                                    {errors.password && <span className="label-text text-base font-sem text-red-700">{errors.password.message}</span>}
                                </label>
                            </div>

                            <button type="submit" className='btn btn-outline w-full'>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginModal;