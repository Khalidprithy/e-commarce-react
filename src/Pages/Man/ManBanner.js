import React from 'react';
import cardImg01 from '../../assets/mensCard.jpg'
import cardImg02 from '../../assets/mansCard02.jpg'

const ManBanner = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2 p-2'>
            <div className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer h-fit opacity-75 hover:opacity-100 transition-all ease-in-out duration-500">
                <img className="object-cover w-full hover:scale-105 transition-all ease-in-out duration-300" src={cardImg01} alt="Flower and sky" />
                <h4 className="absolute m-auto top-5 left-5 text-4xl font-semibold tracking-tight text-gray-100">Men's Collection</h4>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer h-fit opacity-75 hover:opacity-100 transition-all ease-in-out duration-500">
                <img className="object-cover w-full hover:scale-105 transition-all ease-in-out duration-300" src={cardImg02} alt="Flower and sky" />
                <h4 className="absolute m-auto top-5 left-5 text-4xl font-semibold tracking-tight text-gray-100">Men's Collection</h4>
            </div>
        </div>
    );
};

export default ManBanner;