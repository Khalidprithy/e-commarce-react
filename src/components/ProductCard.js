import React from 'react';
import product from '../assets/product10.jpg'

const ProductCard = ({ item }) => {
    return (

        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="/">
                <img className="rounded-t-lg" src={product} alt="Product" />
            </a>
            <div className="p-2">
                <a href="/">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item?.price}$</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item?.title}</p>
                <a href="/" className="flex w-full items-center justify-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                    Add to cart
                </a>
            </div>
        </div>

    );
};

export default ProductCard;