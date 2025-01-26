import React from 'react'
import error from '../../assets/error.avif'

function Error() {
  return (
<div class="bg-white flex items-center justify-center !h-[75vh] ">
  <div class="text-center p-6 max-w-screen-lg mx-auto bg-white shadow-lg rounded-lg">
    <div class="mb-6">
      <img src={error} 
           alt="Error Illustration" 
           class="w-52 h-40 mx-auto rounded-md"/>
    </div>
    <h1 class="text-2xl font-semibold text-gray-800 mb-4">
      Oops! Something Went Wrong
    </h1>
    <p class="text-gray-600 mb-6">
      We couldn't find the page you're looking for. It might have been moved or deleted.
    </p>
    <a href="/" 
       class="px-6 py-2 bg-mypink text-white font-medium rounded hover:bg-myblue transition duration-300">
      Return to Home
    </a>
  </div>
</div>
  )
}

export default Error