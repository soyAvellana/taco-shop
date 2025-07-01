

function Hero() {
  return (
    <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold mb-4">Welcome to Taco Shop</h1>
      <p className="text-lg">Your one-stop shop for delicious tacos!</p>
      <button className="mt-4 bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600">
        Order Now
      </button>
    </div>
  );
}

export default Hero;