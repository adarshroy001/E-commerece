import React from 'react'

function Cartoffer() {
  return (
    <div className="cart-summary h-full w-full">
      <h3 className="text-myblue mb-8">Promo Code</h3>
      <label htmlFor="" className=''>
        Enter Cupon Code (if applicable)
      <input type="text" placeholder='Enter your Code'  className='w-full bg-[#f0f2f5] p-3  text-[#1f2933] rounded-lg mt-4'/>
      </label>
      <button className="bg-blue-500 text-white px-6 py-2 rounded-md mt-8">Apply</button>        
      </div>
  )
}

export default Cartoffer