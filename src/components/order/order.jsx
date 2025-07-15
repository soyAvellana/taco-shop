import React from 'react';
import DeliveryGuy from '../../assets/img/delivery_guy.png';

function Order() {
  return (
    <div>
      <section className="w-full bg-[#fff3a4f5] py-12 px-6 text-white text-center">
        <h1 className="mb-6 text-4xl md:text-6xl lg:text-7xl font-extrabold leading-relaxed tracking-wide text-[#506659] font-headline">
            ORDER </h1>

        <div className="flex justify-center">
          <img 
            src={DeliveryGuy}
            alt="Delivery Guy"
            className="w-[200px] md:w-[260px] h-auto object-contain"
          />
        </div>
      </section>


      <section className="w-full bg-[rgb(202,255,251)] py-12 px-6 text-center">
        <h3 className="text-3xl font-bold text-red-500 mb-4">Choose Your Order Method</h3>

        <p className="mb-8 text-gray-800 max-w-xl mx-auto">
          Whether you're picking it up or having it delivered, your food is just a click away.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            type="button"
            className="text-white bg-green-600 hover:bg-green-700 font-medium rounded-full text-lg px-6 py-3 transition"
          >
            PICK UP
          </button>

          <button
            type="button"
            className="text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-full text-lg px-6 py-3 transition"
          >
            DELIVERY
          </button>
        </div>
      </section>

    </div>
  );
}

export default Order;
