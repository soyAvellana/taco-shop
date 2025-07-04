function ProfileCard({ title, subtitle, description, bgColor, textColor, image }) {
  return (
    <div className={`${bgColor} ${textColor} font-body rounded-3xl p-8 h-[460px] w-80 flex flex-col justify-between relative overflow-hidden transform hover:scale-105 transition-transform duration-300`}>
      
      <div className="z-10">
        
        {/* Titel */}
        <h2 className="text-3xl font-black mb-2 leading-tight">{title}</h2>
        
        {/* Untertitel fett */}
        <div className="text-lg font-medium opacity-90">
          {subtitle && <div className="mb-2 font-bold">{subtitle}</div>}
          {description && <div>{description}</div>}
        </div>
      
      </div>

      {/* Bild */}
      <div className="absolute bottom-4 right-4 w-36 h-50 rounded-full overflow-hidden shadow-lg">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default ProfileCard;
