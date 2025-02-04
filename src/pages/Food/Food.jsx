import React from 'react';
import useFilter from '../../hooks/useFilter';
import ProductMiniCard from '../../components/ProductMiniCard/ProductMiniCard';

function Food() {
  const Products = useFilter('Food:Non-Veg');
  return (
    <div className='w-[90vw] xl:w-[85vw] my-8 mx-auto'>
      <h2 className='text-2xl text-myblue font-bold '>
        Foods
      </h2>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 sm:gap-2 md:gap-3 mt-6 mb-6'>
        {
          Products.map((item) => (
            <ProductMiniCard key={item.id} product={item} />
          ))
        }
      </div>
    </div>
  );
}

export default Food;
