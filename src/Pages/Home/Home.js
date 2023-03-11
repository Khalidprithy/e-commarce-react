import React, { useContext, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import AppContext from '../../context/AppContext';
import HomeBanner from './HomeBanner';
import SpecialOffer from './SpecialOffer';

const Home = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await fetch('../../assets/jsonData.json');
        const jsonData = await response.json();
        setData(jsonData);
    };
    console.log(data)

    return (
        <div className='p-2'>
            <HomeBanner />
            <SpecialOffer />
            <SpecialOffer />
        </div>
    );
};

export default Home;