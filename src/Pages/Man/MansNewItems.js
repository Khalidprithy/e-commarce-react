import React from 'react';
import ProductCard from '../../components/ProductCard';

const MansNewItems = () => {
    return (
        <div>
            <h4 className='text-lg font-semibold p-2'>New Items</h4>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2'>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    );
};

export default MansNewItems;