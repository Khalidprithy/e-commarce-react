import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { MyContext } from '../context/AppContext';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';

const SignUp = () => {

    const [passwordShow, setPasswordShow] = useState(false);
    const { register, formState: { errors }, handleSubmit } = useForm({
        mode: 'onTouched'
    });

    const { handleSignUp } = useContext(MyContext);


    return (
        <>
            <h4 className='text-xl mb-2 text-center font-bold text-gray-700'>Sign Up</h4>
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
                        placeholder="Email"
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
                        placeholder="Password"
                        className={`input input-bordered w-full ${errors.password && 'focus:border-red-600 focus:ring-red-600 border-2 border-red-600'}`}
                        {...register("password", {
                            required: {
                                value: true,
                                message: 'Please Enter You Password'
                            }
                        })}
                    />
                    <button className='text-2xl absolute top-3 right-2 cursor-pointer'>
                        {
                            (passwordShow === false) ? <AiFillEyeInvisible onClick={() => setPasswordShow(!passwordShow)}></AiFillEyeInvisible> : <AiFillEye onClick={() => setPasswordShow(!passwordShow)}></AiFillEye>
                        }
                    </button>
                    <label className="label">
                        {errors.password && <span className="label-text text-base font-sem text-red-700">{errors.password.message}</span>}
                    </label>
                </div>

                <button type="submit" className='btn btn-outline w-full'>Sign Up</button>
            </form>
        </>
    );
};

export default SignUp;