import React, { useState } from 'react';
import DeliveryGuy from '../../assets/img/delivery_guy.png';

function Order() {
  const [selectedMethod, setSelectedMethod] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-r from-amber-100 via-yellow-100 to-orange-100 py-16 px-6 text-center overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23fbbf24" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="relative z-10">
          <h1 className="mb-8 text-5xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-green-700 font-headline drop-shadow-sm">
            ORDER
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto font-medium">
            Fresh, delicious meals delivered to your doorstep or ready for pickup
          </p>

          <div className="flex justify-center transform hover:scale-105 transition-transform duration-300">
            <div className="relative">
              <img 
                src={DeliveryGuy}
                alt="Delivery Guy"
                className="w-[220px] md:w-[300px] h-auto object-contain drop-shadow-2xl"
              />
              {/* Floating animation effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full blur-xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Order Method Selection */}
      <section className="w-full bg-gradient-to-b from-teal-50 to-cyan-50 py-20 px-6 text-center relative">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%2306b6d4" fill-opacity="0.05"%3E%3Cpath d="M20 20l10-10v10h10l-10 10-10-10z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-600 mb-6">
            Choose Your Order Method
          </h2>

          <p className="mb-12 text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Whether you're picking it up or having it delivered, your delicious food is just a click away.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {/* Pickup Option */}
            <div 
              className={`group relative p-8 rounded-3xl border-2 transition-all duration-300 cursor-pointer transform hover:-translate-y-2 ${
                selectedMethod === 'pickup' 
                  ? 'border-green-400 bg-green-50 shadow-2xl shadow-green-200/50' 
                  : 'border-gray-200 bg-white hover:border-green-300 hover:shadow-xl'
              }`}
              onClick={() => setSelectedMethod('pickup')}
            >
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm transform group-hover:scale-110 transition-transform">
                🏪
              </div>
              
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center text-white text-2xl mb-4 transform group-hover:rotate-6 transition-transform">
                  📦
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">PICK UP</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Ready in 15-20 minutes. Skip the delivery fee and grab your fresh meal!
                </p>
              </div>

              <button
                type="button"
                className="w-full text-white bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 font-semibold rounded-2xl text-lg px-8 py-4 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Choose Pickup
              </button>
            </div>

            {/* Delivery Option */}
            <div 
              className={`group relative p-8 rounded-3xl border-2 transition-all duration-300 cursor-pointer transform hover:-translate-y-2 ${
                selectedMethod === 'delivery' 
                  ? 'border-blue-400 bg-blue-50 shadow-2xl shadow-blue-200/50' 
                  : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-xl'
              }`}
              onClick={() => setSelectedMethod('delivery')}
            >
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm transform group-hover:scale-110 transition-transform">
                🚚
              </div>
              
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center text-white text-2xl mb-4 transform group-hover:rotate-6 transition-transform">
                  🏠
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">DELIVERY</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Delivered in 30-45 minutes. Enjoy your meal from the comfort of home!
                </p>
              </div>

              <button
                type="button"
                className="w-full text-white bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 font-semibold rounded-2xl text-lg px-8 py-4 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Choose Delivery
              </button>
            </div>
          </div>

          {/* Selected Method Feedback */}
          {selectedMethod && (
            <div className="mt-12 p-6 bg-white rounded-2xl shadow-lg border border-gray-200 max-w-md mx-auto transform animate-fade-in">
              <div className="flex items-center justify-center space-x-3">
                <span className="text-2xl">
                  {selectedMethod === 'pickup' ? '📦' : '🚚'}
                </span>
                <p className="text-lg font-semibold text-gray-800">
                  Great choice! You've selected{' '}
                  <span className={`${selectedMethod === 'pickup' ? 'text-green-600' : 'text-blue-600'} font-bold`}>
                    {selectedMethod.toUpperCase()}
                  </span>
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Order;
