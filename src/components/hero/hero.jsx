import TacoImage from '../../assets/img/TacoSetTransparent.png';

function Hero() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-teal-100 text-center px-4">
      
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-red-500 md:text-6xl lg:text-7xl">
        Welcome to Aby's Tacos
      </h1>

      <p className="mb-8 text-lg md:text-xl text-gray-700 max-w-xl">
        Enjoy the best tacos in town!
      </p>

      <img
        src={TacoImage}
        alt="Delicious tacos"
        className="w-64 md:w-96 lg:w-[500px]"
      />

    </div>
  );
}

export default Hero;
