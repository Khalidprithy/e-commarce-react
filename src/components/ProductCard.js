import React from 'react';
import product from '../assets/product10.jpg'

const ProductCard = () => {
    return (

        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="/">
                <img class="rounded-t-lg" src={product} alt="Product" />
            </a>
            <div class="p-2">
                <a href="/">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">12.30$</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Man's cloth</p>
                <a href="/" class="flex w-full items-center justify-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                    Add to cart
                </a>
            </div>
        </div>

    );
};

export default ProductCard;