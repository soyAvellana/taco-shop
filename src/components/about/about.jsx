import TeamImage from '../../assets/img/TeamfotoTransparent.png';

function About() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-[80vh] bg-[rgb(250,222,129)] px-4 md:px-12 pt-20 pb-12 text-center md:text-left">
      
      <div className="max-w-xl mb-12 md:mb-0 md:mr-8">
        
   <h1 className="mb-6 text-4xl md:text-6xl lg:text-7xl font-extrabold leading-relaxed tracking-wide text-orange-600 font-headline">
  ABOUT <br></br>
  US
</h1>

<p className="mb-8 text-xl md:text-2xl text-gray-700 font-body leading-relaxed">
  We’re not just about tacos — we’re about bringing people together with <strong>good food and good energy. </strong>
  <br></br>From sizzling quesadillas to juicy burritos, everything we serve is handmade with love and a little extra spice.
</p>


      </div>

      <div className="w-72 md:w-[300px] lg:w-[500px]">
        <img
          src={TeamImage} loading="lazy" alt="Our team" className="w-full" />
      </div>

    </div>
  );
}

export default About;
