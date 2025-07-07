import tacoImage from '../../assets/img/TacoHand.png';

function Welcome() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-start bg-yellow-50  p-4 md:pl-24 gap-12 py-12">
      
      {/* Bild links */}
      <img
        src={tacoImage}
        alt="Holding a Taco"
        className="w-72 md:w-96"
      />

      {/* Textblock rechts */}
      <div className="text-center md:text-left md:ml-40">
        <h1 className="mb-4 text-3xl md:text-5xl lg:text-6xl font-extrabold leading-loose tracking-wide text-amber-500 font-headline">
          WELCOME TO <br /> ABY'S TACO
        </h1>

   <p className="mb-8 text-xl md:text-2xl text-gray-700 font-body leading-relaxed">
          <strong>Opening Hours:</strong><br />
          Mon - Sat: 11 AM - 10 PM <br />
          Sun: 12 PM - 8 PM
        </p>
      </div>

    </section>
  );
}

export default Welcome;
