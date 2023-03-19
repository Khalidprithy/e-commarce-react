import React from 'react';
import girlImage from '../../assets/girlsCard.jpg'
import boyImage from '../../assets/boysCard.jpg'

const KidsBanner = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2 p-2'>
            <div className="relative w-full overflow-hidden rounded-lg shadow-lg cursor-pointer h-fit opacity-75 hover:opacity-100 transition-all ease-in-out duration-500">
                <img className="object-cover w-full hover:scale-105 transition-all ease-in-out duration-300" src={girlImage} alt="Flower and sky" />
                <h4 className="absolute m-auto top-5 left-5 text-4xl font-semibold tracking-tight text-gray-100">Girl's Collection</h4>
            </div>
            <div className="relative w-full overflow-hidden rounded-lg shadow-lg cursor-pointer h-fit opacity-75 hover:opacity-100 transition-all ease-in-out duration-500">
                <img className="object-cover w-full hover:scale-105 transition-all ease-in-out duration-300" src={boyImage} alt="Flower and sky" />
                <h4 className="absolute m-auto top-5 left-5 text-4xl font-semibold tracking-tight text-gray-100">Boy's Collection</h4>
            </div>
        </div>
    );
};

export default KidsBanner;