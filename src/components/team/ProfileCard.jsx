import LocalBeerImage from '../../assets/img/Aby_Potrait.png';

function ProfileCard() {
  return (
    <div className="bg-lime-200 rounded-3xl p-8 max-w-md mx-auto relative overflow-hidden">
      
      {/* Text Content */}
      <div className="relative z-10">
        <h1 className="text-blue-800 font-black text-4xl leading-tight mb-6">
          DOÑA<br />ABY
        </h1>
        
        <p className="text-blue-800 text-xl font-medium">
          from<br />
          Hendersons<br />
          Brewing
        </p>
      </div>
      
      {/* Image Container */}
      <div className="absolute -bottom-4 -right-4 w-64 h-64 rounded-full overflow-hidden bg-orange-200">
        <img 
          src={LocalBeerImage}
          alt="Person holding a beer can"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-4 right-4 w-8 h-8 bg-blue-800 rounded-full opacity-20"></div>
      <div className="absolute bottom-20 left-4 w-4 h-4 bg-blue-800 rounded-full opacity-30"></div>
    </div>
  );
}

export default ProfileCard;
