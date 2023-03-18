import React, { useContext } from 'react';
import ProductCard from '../../components/ProductCard'
import { MyContext } from '../../context/AppContext';

const SpecialOffer = () => {

    const { data } = useContext(MyContext);

    console.log(data)
    return (
        <div>
            <h4 className='text-lg font-semibold p-2'>Special Offers</h4>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2'>
                {
                    data?.map((item) => <ProductCard
                        key={item._id}
                        item={item}
                    />)
                }
            </div>
        </div>
    );
};

export default SpecialOffer;