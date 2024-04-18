//react router
import { useNavigate } from "react-router-dom";

export default function Category({ category }) {
  const navigate = useNavigate();
  let categoryHeight = category.id % 2 === 0 ? "h-44" : "h-40";
  //   let categoryMarginBottom = category.id % 2 === 0 ? "mt-4" : "mb-0";
  //   let translateY = category.id % 2 === 0 ? "" : "translate-y-[-25px]";

  return (
    <div
      className={`bg-white mx-3 mt-6 mb-4 px-5 lg:px-2 ${categoryHeight} sm:h-44 rounded-lg shadow-lg z-0 flex flex-col md:flex-row justify-between md:justify-evenly sm:items-center`}
      onClick={() => navigate(`category-questions/${category.name}`)}
    >
      <>
        <img
          src={category.icon}
          className="logo react w-20 md:w-24 relative bottom-3"
          alt={`${category.name}  logo`}
        />
      </>
      <div className="relative md:ms-2 bottom-8 md:bottom-0">
        <p className="text-sm sm:text-lg font-bold text-[#3e3e3e]">
          {category.name}
        </p>
        <p className="text-sm truncate text-[#646464]">10 questions</p>
      </div>
    </div>
  );
}
