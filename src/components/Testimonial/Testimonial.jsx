import React from 'react';
import maleavtar from '../../assets/manlogo.png'
import femalavtar from '../../assets/female-avatar.png'

function Testimonials() {
    const testimonials = [
        {
          name: 'Amit Verma',
          title: 'Regular Customer',
          image: maleavtar,
          feedback: 'The variety of products and the fast delivery make this app a lifesaver for me!',
        },
        {
          name: 'Neha Sharma',
          title: 'Food Lover',
          image: femalavtar,
          feedback: 'I love the quick food delivery and the discounts on my favorite meals!',
        },
        {
          name: 'Rajiv Mehta',
          title: 'College Student',
          image: maleavtar,
          feedback: 'Getting all essentials delivered to my hostel has never been easier. Highly recommend!',
        },
      ];
      

  return (
    <section className="w-[90vw] xl:w-[85vw]   mx-auto mt-8 mb-16  ">
        <div className="heading">
          <h2 className="capitalize text-xl font-bold sm:uppercase  sm:text-2xl sm:font-semibold  text-gray-800 ">Testimonials</h2>
          <p className="text-lg text-gray-600 mb-8">Hear from our satisfied users</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-8 ">
          {testimonials.map((testimonial, index) => (
            <div key={index} className=" rounded-lg border border-[rgba(255,254,243,1)] bg-[rgba(255,254,243,1)] p-6 lg:hover:scale-105 transition-all ">
              <div className="flex items-center mb-4">
                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.title}</p>
                </div>
              </div>
              {/* Replace the parent <p> with <div> */}
              <div className="text-gray-700">{testimonial.feedback}</div>
            </div>
          ))}
        </div>
    </section>
  );
}

export default Testimonials;


