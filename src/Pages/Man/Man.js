import React from 'react';
import ManBanner from './ManBanner';
import ManCategory from './ManCategory';
import MansNewItems from './MansNewItems';
import MansTopSold from './MansTopSold';

const Man = () => {
    return (
        <div className='h-screen'>
            <ManBanner />
            <ManCategory />
            <MansTopSold />
            <MansNewItems />
        </div>
    );
};

export default Man;