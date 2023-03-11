import React from 'react';
import ProductCard from '../../components/ProductCard';

const MansTopSold = () => {
    return (
        <div>
            <h4 className='text-lg font-semibold p-2'>Top sold product</h4>
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

export default MansTopSold;