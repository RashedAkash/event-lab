import React from 'react';
import Price from '../../components/Price/Price';
import Team from '../../components/Team/Team';
import Banner from '../../components/Banner/Banner';

const Home = () => {
  return (
    <div className=' absolute top-0 left-0 w-full'>
       
        <Banner />
      
      <Team />
      <Price />
      
      
    </div>
  );
};

export default Home;
