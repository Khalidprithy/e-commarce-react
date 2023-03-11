import React from 'react';

const ManCategory = () => {
    return (
        <div className='grid grid-cols-3 gap-4 p-2'>
            <div className='bg-gray-200 p-2 text-xl font-semibold text-center rounded-sm shadow hover:shadow-lg transition-all ease-in duration-300'>Shirt</div>
            <div className='bg-gray-200 p-2 text-xl font-semibold text-center rounded-sm shadow hover:shadow-lg transition-all ease-in duration-300'>Pants</div>
            <div className='bg-gray-200 p-2 text-xl font-semibold text-center rounded-sm shadow hover:shadow-lg transition-all ease-in duration-300'>Jackets</div>
            <div className='bg-gray-200 p-2 text-xl font-semibold text-center rounded-sm shadow hover:shadow-lg transition-all ease-in duration-300'>Shoes</div>
            <div className='bg-gray-200 p-2 text-xl font-semibold text-center rounded-sm shadow hover:shadow-lg transition-all ease-in duration-300'>Accessories</div>
            <div className='bg-gray-200 p-2 text-xl font-semibold text-center rounded-sm shadow hover:shadow-lg transition-all ease-in duration-300'>Jewelry</div>
        </div>
    );
};

export default ManCategory;