import TeamFoto from '../../assets/img/TeamfotoTransparent.png';
import AbyPortrait from '../../assets/img/Aby_Potrait.png';
import { ProfileCard } from './ProfileCard';

function Team() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-teal-300 text-center px-4">
      
      <h2 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-red-500 md:text-6xl lg:text-7xl">
        Meet the Team!
      </h2>

      <p className="mb-8 text-lg md:text-xl text-gray-700 max-w-xl">
        From Mexico to Europe
      </p>

      <img
        src={TeamFoto}
        alt="Our Team"
        className="w-64 md:w-96 lg:w-[500px] mb-8"
      />

      {/* Team Members */}
      <div className="flex flex-wrap justify-center gap-6">
        
        <ProfileCard
          name="Doña Aby"
          title="Founder & Taco Expert"
          image={AbyPortrait}
        />

        <ProfileCard
          name="Carlos Rivera"
          title="Head of Operations"
          image="/assets/img/carlos-profile.png"
        />

        <ProfileCard
          name="Maria Gomez"
          title="Creative Director"
          image="/assets/img/maria-profile.png"
        />

        <ProfileCard
          name="Carlos Rivera"
          title="Head of Operations"
          image="/assets/img/carlos-profile.png"
        />

        <ProfileCard
          name="Maria Gomez"
          title="Creative Director"
          image="/assets/img/maria-profile.png"
        />

      </div>
      
    </div>
  );
}

export default Team;
