//store
import { useSelector } from "react-redux";
import { deleteQuizResults } from "../features/questionsSlice/questionsSlice";

//router
import { useNavigate } from "react-router-dom";

//asssets
import exit from "../assets/close-square-svgrepo-com.svg";
import QuizResultItem from "./QuizResultItem";

export default function QuizResult() {
  const { result, score } = useSelector((state) => state.result);
  const navigate = useNavigate();

  const handleClick = () => {
    deleteQuizResults();
    navigate("/");
  };

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 px-5 sm:px-10 my-3 w-full">
      <div className="flex justify-between col-span-2 lg:col-span-3 my-2 me-4">
        <div className="text-md sm:text-lg text-[#3e3e3e]">
          <span className=" font-bold">Your score is:</span>{" "}
          <span className=" font-semibold">
            {score} / {result.length}
          </span>
        </div>
        <button className="mb-3 place-self-end ml-auto" onClick={handleClick}>
          <img src={exit} alt="return home" className="w-10 h-10 " />
        </button>
      </div>

      {result.map((item) => (
        <QuizResultItem key={item.id} item={item} />
      ))}
    </div>
  );
}
