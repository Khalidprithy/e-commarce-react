import React from 'react';
import men from '../../assets/men.jpeg'
import women from '../../assets/women.jpg'
import food from '../../assets/Food.jpg'
import kids from '../../assets/kids.jpg'

const HomeBanner = () => {

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-2 p-1'>
            <div class="relative overflow-hidden rounded-lg shadow-lg cursor-pointer h-fit opacity-75 hover:opacity-100 transition-all ease-in-out duration-500">
                <img class="object-cover w-full hover:scale-105 transition-all ease-in-out duration-300" src={men} alt="Flower and sky" />
                <h4 class="absolute m-auto top-5 left-5 text-4xl font-semibold tracking-tight text-gray-100">Men's Collection</h4>
            </div>
            <div className='flex flex-col justify-between'>
                <div class="relative overflow-hidden rounded-lg shadow-lg mb-2 cursor-pointer h-fit opacity-75 hover:opacity-100 transition-all ease-in-out duration-500">
                    <img class="object-cover w-full hover:scale-105 transition-all ease-in-out duration-300" src={kids} alt="Flower and sky" />
                    <h4 class="absolute m-auto top-5 left-5 text-2xl font-semibold tracking-tight text-gray-900">Kid's Collection</h4>
                </div>
                <div class="relative overflow-hidden rounded-lg shadow-lg mb-2 cursor-pointer h-fit opacity-75 hover:opacity-100 transition-all ease-in-out duration-500">
                    <img class="object-cover w-full hover:scale-105 transition-all ease-in-out duration-300" src={food} alt="Flower and sky" />
                    <h4 class="absolute m-auto top-5 left-5 text-2xl font-semibold tracking-tight text-gray-50">Foods</h4>
                </div>
            </div>
            <div class="relative overflow-hidden rounded-lg shadow-lg cursor-pointer h-fit opacity-75 hover:opacity-100 transition-all ease-in-out duration-500">
                <img class="object-cover w-full hover:scale-105 transition-all ease-in-out duration-300" src={women} alt="Flower and sky" />
                <h4 class="absolute m-auto top-5 left-5 text-2xl font-semibold tracking-tight text-gray-500">Women's Collection</h4>
            </div>
        </div>
    );
};

export default HomeBanner;