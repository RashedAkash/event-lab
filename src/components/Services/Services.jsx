import React from 'react';
import Service from '../Service/Service';

const Services = ({ services }) => {

  return (
    <div className='pb-16 bg-base-100'>
      <div className=' mb-10 '>
        <h2 className='text-black border-b-4 border-pink-700 inline-block pb-2 font-bold text-5xl mb-3'>Our Services</h2>
      <p className=' text-gray-600'>Conferences are more than just gatherings; they are vibrant hubs of knowledge exchange, innovation, and collaboration.</p>
      </div>
       <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
      {
        services.map(service => <Service service={service } key={service.id} />)
      }
    </div>
   </div>
  );
};

export default Services;