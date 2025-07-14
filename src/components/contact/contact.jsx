import bar from '../../assets/img/Alcohol.png';
import cactus from '../../assets/img/Cactus.png';

 function Contact() {
  return (
    <section className="bg-yellow-50 px-6 py-16 lg:px-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-loose tracking-wide text-amber-500 font-headline">
          COME FOR THE HEAT,<br /> STAY FOR THE CHILL
        </h1>
       <div className="flex justify-center mb-12">
        <img src={bar} loading="lazy"  alt="Bar with Alcohol" className="w-72 md:w-96" />
      </div>
      </div>
      

      <div className="text-center text-gray-700 text-lg md:text-xl mb-16 space-y-3">
        <p><strong>Address:</strong> Taco Street 123, 11201 Brooklyn, NY</p>
        <p><strong>Phone:</strong> +49 123 456789</p>
        <p><strong>Email:</strong> hello@yourbar.com</p>
        <p><strong>Opening Hours:</strong><br />Mon - Sat: 11 AM – 10 PM<br />Sun: 12 PM – 8 PM</p>
      </div>

  
  
      <div className="text-center mb-10">
        <h2 className="text-3xl font-semibold text-gray-900">Stay in Contact with us</h2>
        <p className="mt-2 text-lg text-gray-600">Send us a message — we’ll get back to you soon!</p>
      </div>

   
      <form action="#" method="POST" className="mx-auto max-w-2xl">
        <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
          <div>
            <label htmlFor="first-name" className="block text-sm font-medium text-gray-900">
              First Name
            </label>
            <input
              type="text"
              name="first-name"
              id="first-name"
              autoComplete="given-name"
              required
              className="mt-2 block w-full rounded-md border border-gray-300 px-3.5 py-2 text-gray-900 shadow-sm focus:border-amber-500 focus:ring-amber-500"
            />
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm font-medium text-gray-900">
              Last Name
            </label>
            <input
              type="text"
              name="last-name"
              id="last-name"
              autoComplete="family-name"
              required
              className="mt-2 block w-full rounded-md border border-gray-300 px-3.5 py-2 text-gray-900 shadow-sm focus:border-amber-500 focus:ring-amber-500"
            />
          </div>
        </div>
        <div className="mt-6">
          <label htmlFor="email" className="block text-sm font-medium text-gray-900">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="email"
            required
            className="mt-2 block w-full rounded-md border border-gray-300 px-3.5 py-2 text-gray-900 shadow-sm focus:border-amber-500 focus:ring-amber-500"
          />
        </div>
        <div className="mt-6">
          <label htmlFor="message" className="block text-sm font-medium text-gray-900">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows={4}
            required
            className="mt-2 block w-full rounded-md border border-gray-300 px-3.5 py-2 text-gray-900 shadow-sm focus:border-amber-500 focus:ring-amber-500"
          />
        </div>
        <div className="mt-8">
          <button
            type="submit"
            className="w-full rounded-md bg-amber-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-400 focus:outline focus:ring-2 focus:ring-amber-500"
            aria-label="Send Message">
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
}

export default Contact;