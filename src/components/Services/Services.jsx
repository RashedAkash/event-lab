import React from 'react';
import Service from '../Service/Service';

const Services = ({ services }) => {

  return (
    <div className='py-16 bg-gray-200'>
       <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
      {
        services.map(service => <Service service={service } key={service.id} />)
      }
    </div>
   </div>
  );
};

export default Services;