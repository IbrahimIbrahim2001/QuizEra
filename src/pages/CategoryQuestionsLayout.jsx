//react hooks
import { useState } from "react";

//react router
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

//components
import QuizQuestions from "../components/QuizQuestions";

//asssets
import exit from "../assets/close-square-svgrepo-com.svg";

export default function CategoryQuestions() {
  const { id } = useParams();
  const [openQuiz, setOpenQuiz] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="px-8 sm:px-0 pt-5 grid grid-cols-3 w-full sm:w-[500px] md:w-[600px]">
      <p className="text-md sm:text-lg font-bold text-[#3e3e3e] mb-3  col-span-2 ">
        Category - {id}
      </p>
      <button
        className="mb-3 place-self-end  self-start col-span-1 "
        onClick={() => navigate("/QuizEra")}
      >
        <img src={exit} alt="return home" className="w-10 h-10 " />
      </button>
      {!openQuiz ? (
        <>
          <p className="col-span-3 italic">
            <span className="font-semibold">Note:</span> You will lose your
            progress if you return, so you have to choose again. Sorry, it will
            be fixed soon...
          </p>
          <button
            className="rounded-md bg-[#4cbcd6] shadow-md w-32 h-8 text-[#fafafa] px-3 py-1 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
            onClick={() => setOpenQuiz(true)}
          >
            start quiz
          </button>
        </>
      ) : (
        <QuizQuestions />
      )}
    </div>
  );
}
