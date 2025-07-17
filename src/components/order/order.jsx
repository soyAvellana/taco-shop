import React, { useState } from 'react';
import DeliveryGuy from '../../assets/img/delivery_guy.png';

function Order() {
  const [selectedMethod, setSelectedMethod] = useState(null);

  const orderMethods = [
    {
      id: 'pickup',
      title: 'PICK UP',
      description: 'Fast & Fresh',
      icon: '🏪',
      bgColor: 'bg-[#56b75e]',
      buttonBg: 'bg-white',
      buttonText: 'text-emerald-700',
    },
    {
      id: 'delivery',
      title: 'DELIVERY',
      description: 'To Your Door',
      icon: '🚚',
      bgColor: 'bg-[#f28500]',
      buttonBg: 'bg-white',
      buttonText: 'text-orange-700',
    }
  ];

  return (
    <div className="min-h-screen bg-yellow-50">
      {/* Hero Section */}
      <section className="w-full bg-yellow-100 py-16 px-6 text-center">
        <h1 className="mb-6 text-4xl md:text-6xl lg:text-7xl font-extrabold leading-relaxed tracking-wide text-[#506659] font-headline">
          ORDER <br /> NOW
        </h1>

        <p className="text-xl md:text-2xl text-[#506659] font-semibold mb-8 max-w-2xl mx-auto">
          Ready to spice up your day? Choose your preferred way to get your delicious tacos!
        </p>

        <div className="flex justify-center mb-8">
          <img 
            src={DeliveryGuy}
            alt="Delivery Guy"
            className="w-[180px] md:w-[220px] h-auto object-contain"
          />
        </div>
      </section>

      {/* Order Methods Section */}
      <section className="w-full py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-red-600 font-headline mb-4">
              Choose Your Order Method
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Whether you're picking it up or having it delivered, your food is just a click away.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {orderMethods.map((method) => (
              <div
                key={method.id}
                className="relative group cursor-pointer transition-transform duration-300 hover:scale-105"
                onClick={() => setSelectedMethod(method.id)}
              >
                <div className={`${method.bgColor} text-white rounded-3xl p-8 shadow-xl h-full`}>
                  <div className="text-6xl mb-6 text-center">
                    {method.icon}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black text-center mb-4 font-headline">
                    {method.title}
                  </h3>
                  <p className="text-lg text-center mb-8">
                    {method.description}
                  </p>
                  <div className="text-center">
                    <button
                      type="button"
                      className={`${method.buttonBg} ${method.buttonText} font-bold rounded-full text-xl px-8 py-4 transition-transform duration-300 hover:scale-105 shadow-md`}
                    >
                      SELECT {method.title}
                    </button>
                  </div>
                  <div className="mt-8 space-y-3 text-white">
                    {method.id === 'pickup' ? (
                      <>
                        <div className="flex items-center">
                          <span className="mr-3">⚡</span>
                          <span>Ready in 15–20 minutes</span>
                        </div>
                        <div className="flex items-center">
                          <span className="mr-3">💰</span>
                          <span>No delivery fee</span>
                        </div>
                        <div className="flex items-center">
                          <span className="mr-3">🌮</span>
                          <span>Fresh and hot</span>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex items-center">
                          <span className="mr-3">🚚</span>
                          <span>Fast delivery 30–45 min</span>
                        </div>
                        <div className="flex items-center">
                          <span className="mr-3">📍</span>
                          <span>Track your order</span>
                        </div>
                        <div className="flex items-center">
                          <span className="mr-3">🛡️</span>
                          <span>Contactless delivery</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {selectedMethod === method.id && (
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <span className="text-red-600 text-sm">✓</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Order;
