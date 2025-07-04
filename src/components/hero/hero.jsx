import TacoImage from '../../assets/img/TacoSetTransparent.png';

function Hero() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-[100vh] bg-teal-100 px-4 md:px-12 pt-20 pb-12 text-center md:text-left">
      
      {/* Text-Bereich */}
      <div className="max-w-xl mb-12 md:mb-0 md:mr-8">
        
<h1 className="mb-8 text-3xl md:text-5xl lg:text-6xl font-extrabold leading-loose tracking-wide text-red-500 font-headline">
  <div className="mb-4">SPICE UP YOUR DAY</div>
  <div className="mb-4">ABY'S TACO</div>
  <div>TACOS, QUESADILLAS, BURRITOS Y MÁS...</div>
</h1>




    <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-xl px-8 py-4 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
  ORDER HERE
</button>
      </div>

      {/* Bild-Bereich */}
      <div className="w-72 md:w-[400px] lg:w-[600px]">
        <img
          src={TacoImage}
          alt="Delicious tacos"
          className="w-full"
        />
      </div>

    </div>
  );
}

export default Hero;
