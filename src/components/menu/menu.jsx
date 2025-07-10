import { useState } from "react";
import ChiliImg from "../../assets/img/chili.png";

import BeefTaco from "../../assets/img/Beef_Taco.png";
import ChickenTaco from "../../assets/img/Chicken_Taco.png";
import PulledPorkTaco from "../../assets/img/Pulled_Pork_Taco.png";
import ShrimpsTaco from "../../assets/img/Shrimps_Taco.png";
import Burritos from "../../assets/img/Burritos.png";
import Quesadilla from "../../assets/img/Quesadilla.png";
import Tamales from "../../assets/img/Tamales.png";
import Torta from "../../assets/img/Torta.png";

import Guacamole from "../../assets/img/Guacamole.png";
import SalsaDip from "../../assets/img/Salsa_Dip.png";
import KorianderDip from "../../assets/img/Korianderdip.png";
import Bohnenmus from "../../assets/img/Bohnenmus.png";

import Churros from "../../assets/img/Churros.png";
import Flan from "../../assets/img/Flan.png";

import Horcata from "../../assets/img/Horcata.png";
import Jamaica from "../../assets/img/Jamaica.png";
import Tamarind from "../../assets/img/Tamarind.png";
import Softdrinks from "../../assets/img/Softgetränke.png";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("mains");
const menuData = {
  mains: {
    title: "Mains",
    items: [
      { name: "Beef Taco", description: "Grilled beef with onions & cilantro", price: "4.50€", spicy: 1, image: BeefTaco },
      { name: "Chicken Taco", description: "Marinated chicken with salsa & guacamole", price: "4.20€", spicy: 2, image: ChickenTaco },
      { name: "Pulled Pork Taco", description: "Slow-cooked pork with pico de gallo", price: "4.50€", spicy: 2, image: PulledPorkTaco },
      { name: "Shrimps Taco", description: "Spicy shrimps with fresh lime", price: "4.80€", spicy: 3, image: ShrimpsTaco },
      { name: "Burritos", description: "Filled with beans, rice, meat & cheese", price: "8.90€", spicy: 2, image: Burritos },
      { name: "Quesadilla", description: "Cheesy tortilla with salsa dip", price: "6.50€", spicy: 1, image: Quesadilla },
      { name: "Tamales", description: "Traditional steamed corn dough with filling", price: "7.00€", spicy: 1, image: Tamales },
      { name: "Torta", description: "Mexican sandwich with your choice of meat", price: "7.80€", spicy: 1, image: Torta },
    ],
  },
  starters: {
    title: "Starters",
    items: [
      { name: "Guacamole & Chips", description: "Fresh guacamole with tortilla chips", price: "5.50€", spicy: 1, image: Guacamole },
      { name: "Salsa Dip", description: "Homemade spicy salsa", price: "2.00€", spicy: 2, image: SalsaDip },
      { name: "Cilantro Dip", description: "Creamy dip with fresh cilantro", price: "2.00€", spicy: 0, image: KorianderDip },
      { name: "Refried Beans", description: "Creamy mashed black beans", price: "3.50€", spicy: 0, image: Bohnenmus },
    ],
  },
  desserts: {
    title: "Desserts",
    items: [
      { name: "Churros", description: "Fried dough with cinnamon sugar & chocolate", price: "5.20€", spicy: 0, image: Churros },
      { name: "Flan", description: "Classic creamy caramel dessert", price: "5.80€", spicy: 0, image: Flan },
    ],
  },
  drinks: {
    title: "Drinks",
    items: [
      { name: "Horchata", description: "Sweet rice milk with cinnamon", price: "3.00€", spicy: 0, image: Horcata },
      { name: "Agua de Jamaica", description: "Hibiscus flower iced tea", price: "3.00€", spicy: 0, image: Jamaica },
      { name: "Tamarind Drink", description: "Sweet & sour tamarind juice", price: "3.00€", spicy: 0, image: Tamarind },
      { name: "Soft Drinks", description: "Coke, Fanta, Sprite & more", price: "2.50€", spicy: 0, image: Softdrinks },
    ],
  },
};


   const categories = [
    { id: "mains", name: "Mains" },
    { id: "starters", name: "Starters" },
    { id: "desserts", name: "Desserts" },
    { id: "drinks", name: "Non-Alcoholic Drinks" },

  ];

  return (
    <div className="min-h-screen bg-yellow-50 flex flex-col">
      
      {/* Category Banner */}
      <div className="bg-pink-500 text-red-800 py-12 text-center">
        <h2 className="text-5xl md:text-7xl font-black font-headline mb-2">
          {menuData[activeCategory].title}
        </h2>
      </div>

      {/* Buttons */}
      <div className="bg-white shadow-md py-6">
        <div className="max-w-7xl mx-auto flex justify-center gap-4 px-4 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-3 rounded-xl text-lg font-bold border-2 transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-red-700 text-yellow-100 border-red-900 scale-105 shadow-lg"
                  : "bg-white text-red-700 border-red-700 hover:bg-yellow-100"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {menuData[activeCategory].items.map((item, idx) => (
          <div
            key={idx}
            className="bg-white border border-orange-200 rounded-3xl p-8 shadow-md hover:shadow-xl hover:scale-105 transition-all flex flex-col justify-between"
          >
            <img src={item.image} alt={item.name} className="w-32 h-32 mx-auto mb-4 object-contain" />
            <h3 className="text-2xl font-black text-red-500 font-headline mb-2">{item.name}</h3>
            <p className="text-gray-700 mb-4">{item.description}</p>
            
            <div className="flex justify-between items-center mt-auto">
              <span className="text-2xl font-black text-red-700">{item.price}</span>
              {item.spicy > 0 && (
                <div className="flex gap-1">
                  {Array.from({ length: item.spicy }).map((_, i) => (
                    <img key={i} src={ChiliImg} alt="Spicy Level" className="w-5 h-5 inline-block" />
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;