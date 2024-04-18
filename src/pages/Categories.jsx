//react hooks
import { useState } from "react";

//components
import Category from "../components/Category";

//assets
import basketballLogo from "../assets/basketball-svgrepo-com.svg";
import computerLogo from "../assets/coding-programming-language-svgrepo-com.svg";
import mapsLogo from "../assets/maps-and-flags-map-svgrepo-com.svg";
import historyLogo from "../assets/colosseum-svgrepo-com.svg";
import animalsLogo from "../assets/deer-svgrepo-com.svg";
import artLogo from "../assets/drawing-brush-education-learning-painting-school-study-svgrepo-com.svg";
import moviesLogo from "../assets/entertainment-svgrepo-com.svg";

const CATEGORIES = [
  {
    id: 1,
    category: "Sports",
    name: "Sports",
    icon: basketballLogo,
  },
  {
    id: 2,
    category: "Art",
    name: "Art",
    icon: artLogo,
  },
  {
    id: 3,
    category: "History",
    name: "History",
    icon: historyLogo,
  },
  {
    id: 4,
    category: "Movies",
    name: "Movies",
    icon: moviesLogo,
  },
  {
    id: 5,
    category: "Computer",
    name: "Computer",
    icon: computerLogo,
  },
  {
    id: 6,
    category: "Geography",
    name: "Geography",
    icon: mapsLogo,
  },
  {
    id: 7,
    category: "Animals",
    name: "Animals",
    icon: animalsLogo,
  },
];

export default function Categories() {
  const [categories] = useState(CATEGORIES);
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 overflow-auto text-[#2b2b2b] px-5  sm:w-3/4 ">
      <p className="text-xl sm:text-2xl font-bold text-[#3e3e3e] col-span-full mx-3 my-4 ">
        Test your Knowladge:
      </p>
      {categories.map((category) => (
        <Category key={category.id} category={category} />
      ))}
    </div>
  );
}
