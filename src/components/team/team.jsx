import ProfileCard from "./ProfileCard";
import Abigail from "../../assets/img/Aby_Potrait.png";
import Aykut from "../../assets/img/Aykut_Portrait.png";
import Juan from "../../assets/img/Juan_Portrait.png";
import Lisa from "../../assets/img/Lisa_Portrait.png";
import Kadir from "../../assets/img/Kadir_Portrait.png";

function TeamGrid() {
const teamMembers = [
  {
    title: "Doña Aby",
    subtitle: "CEO & Founder",
    description: "The heart and soul of Aby's Tacos — passionate about authentic flavors and bringing people together.",
    bgColor: "bg-red-500",
    textColor: "text-yellow-100",
    image: Abigail
  },
  {
    title: "Aykut Yildiz",
    subtitle: "Head of Operations",
    description: "Keeps the taco shop running like clockwork — logistics, planning and making sure nothing burns.",
    bgColor: "bg-green-500",
    textColor: "text-white",
    image: Aykut
  },
  {
    title: "Juan Martínez",
    subtitle: "Master of Salsas",
    description: "Known for his secret spicy recipes — if it burns, Juan made it. Fresh ingredients, bold flavors.",
    bgColor: "bg-orange-500",
    textColor: "text-yellow-100",
    image: Juan
  },
  {
    title: "Lisa Meier",
    subtitle: "Marketing & Design",
    description: "Brings the brand to life — from creative campaigns to making sure the tacos look as good as they taste.",
    bgColor: "bg-pink-500",
    textColor: "text-white",
    image: Lisa
  },
  {
    title: "Kadir Demir",
    subtitle: "Customer Happiness",
    description: "Always smiling, always helpful — ensures every guest leaves with a full belly and a happy heart.",
    bgColor: "bg-teal-500",
    textColor: "text-yellow-100",
    image: Kadir
  }
];

  return (
    <div className="min-h-screen bg-[#fffbb6] p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="mb-6 text-4xl md:text-6xl lg:text-7xl font-extrabold leading-relaxed tracking-wide text-orange-600 font-headline text-right">
  MEET OUR <br />
  TEAM
</h1>


<div className="flex flex-wrap justify-center gap-10">
  {teamMembers.map((member, index) => (
    <ProfileCard
      key={index}
      title={member.title}
      subtitle={member.subtitle}
      description={member.description}
      bgColor={member.bgColor}
      textColor={member.textColor}
      image={member.image}
      loading="lazy"
    />

  ))}
  
</div>
      </div>
    </div>
  );
}

export default TeamGrid;
