//react hooks
import { useEffect, useState } from "react";

//components
import QuestionOption from "./QuestionOption";

export default function Question({ question, openModal, selectOption }) {
  // const { selectedOption, setSelectedOption } = useQuestionOptionContext();
  const [selectedOption, setSelectedOption] = useState(null);

  const [options, setOptions] = useState([
    ...question.incorrect_answers,
    question.correct_answer,
  ]);

  const handleSelectOption = (index) => {
    if (!openModal) setSelectedOption(index);

    if (selectedOption === index) setSelectedOption(null);
    selectOption(options[index]);
  };

  useEffect(() => {
    setSelectedOption(null);
    setOptions([...question.incorrect_answers, question.correct_answer]);
  }, [question, setSelectedOption]);
  return (
    <>
      <div className="w-full h-52  sm:min-h-20 sm:max-h-24 bg-[#dcf8ff] border shadow-lg rounded-lg  mb-3 px-5 py-2 text-[#3e3e3e] font-semibold">
        <p>{question?.question}</p>
      </div>
      <div className="grid grid-cols-2 gap-x-3 rounded-lg w-full h-48 sm:h-auto">
        {options?.map((option, index) => (
          <QuestionOption
            key={index}
            option={option}
            isSelected={selectedOption === index}
            onSelect={() => handleSelectOption(index)}
          />
        ))}
      </div>
    </>
  );
}
