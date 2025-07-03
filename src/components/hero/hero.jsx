import TacoImage from '../../assets/img/TacoSetTransparent.png';

function Hero() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-teal-100 text-center p-4">
      
      <h1 className="mb-2 text-4xl font-extrabold leading-none tracking-tight text-red-500 md:text-6xl lg:text-6xl">
        Welcome to Aby's Tacos
      </h1>

      <p className="mb-6 text-lg text-gray-700">
        Enjoy the best tacos in town!
      </p>

      <img
        src={TacoImage}
        alt="Delicious tacos"
        className="w-80 md:w-90 lg:w-100"
      />

    </div>
  );
}

export default Hero;
