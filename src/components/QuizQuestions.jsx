//react hooks
import { useState } from "react";

//components
import Question from "./Question";

//ui compomnent
import Error from "./UIComponents/Error";
import Loader from "./UIComponents/Loader";
import Modal from "./UIComponents/Modal";
import QuizProgress from "./UIComponents/QuizProgress";

//react router

import { useParams } from "react-router-dom";

//react query
import useFetchQuestionsData from "../hooks/useFetchQuestionsData";

//assets
import prev from "../assets/wave-arrow-left-svgrepo-com.svg";
import next from "../assets/wave-arrow-right-svgrepo-com.svg";

//store
import { useDispatch } from "react-redux";
import { addQuestion } from "../features/questionsSlice/questionsSlice";

export default function QuizQuestions() {
  const [selectedOptionValue, setSelectedOptionValue] = useState();

  const dispatch = useDispatch();

  const categoryName = useParams();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const {
    isLoading,
    isError,
    data: questions,
  } = useFetchQuestionsData(categoryName.id);

  const handleNextClick = () => {
    if (currentQuestionIndex < questions?.data.results.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setOpenModal(true);
    }

    dispatch(
      addQuestion({
        id: currentQuestionIndex,
        question: questions.data.results[currentQuestionIndex].question,
        selectedAnswer: selectedOptionValue,
        correctAnswer:
          questions.data.results[currentQuestionIndex].correct_answer,
      })
    );
    setSelectedOptionValue(undefined);
  };
  const handlePrevClick = () => {
    if (currentQuestionIndex !== 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    } else if (currentQuestionIndex != questions?.data.results.length) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setOpenModal(false);
    }
  };

  const handlePrevButtonDisabled = () => {
    if (openModal) {
      return { backgroundColor: "grey", display: "flex" };
    }
    if (currentQuestionIndex === 0) {
      return { backgroundColor: "#4cbcd6", display: "none" };
    }
  };

  const handleSelectedOption = (selectedOption) => {
    setSelectedOptionValue(selectedOption);
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  if (isLoading) return <Loader />;

  if (isError) return <Error />;

  return (
    <>
      <div className="col-span-3 w-full  sm:w-[500px]  md:w-[600px] text-[#1b1b1b] rounded-xl p-2 h-[70vh] sm:h-full">
        {questions &&
          questions.data &&
          questions.data.results &&
          questions.data.results.length > 0 && (
            <>
              <QuizProgress
                questionIndex={currentQuestionIndex + 1}
                questionsLength={questions?.data.results.length}
              />

              <Question
                question={questions?.data.results[currentQuestionIndex]}
                openModal={openModal}
                selectOption={handleSelectedOption}
              />

              <div className="flex justify-between items-center">
                <button
                  style={handlePrevButtonDisabled()}
                  className={`w-12 h-6 rounded-lg bg-[#4cbcd6] flex justify-center items-center`}
                  onClick={handlePrevClick}
                  disabled={currentQuestionIndex === 0 || openModal}
                >
                  <img src={prev} alt="previous question" className="w-6 h-6" />
                </button>
                <button
                  className="ml-auto w-12 h-6 rounded-lg bg-[#4cbcd6] flex justify-center items-center disabled:bg-slate-500"
                  onClick={handleNextClick}
                  disabled={openModal}
                >
                  <img src={next} alt="next question" className="w-6 h-6" />
                </button>
              </div>
            </>
          )}
      </div>

      {openModal && <Modal onCloseModal={() => closeModal()} />}
    </>
  );
}
