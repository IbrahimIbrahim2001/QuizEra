export default function QuestionOption({ option, isSelected, onSelect }) {
  return (
    <>
      <div
        className={`col-span-2 sm:col-span-1 flex justify-between items-center bg-white border-[3px] rounded-lg mb-3 px-5 ${
          isSelected ? "border-[#4cbcd6]" : "border-[#f2f2f2]"
        }`}
        onClick={onSelect} // that will fire the function of handleSelectOption in the Question component
      >
        <p className="max-h-20 overflow-auto scrollbar-hide">{option}</p>
        <div>
          <button
            className={`button rounded-full border border-[#dcf8ff] w-[15px] h-[15px] ${
              isSelected ? "bg-[#4cbcd6]" : "bg-[#f2f2f2]"
            }`}
          ></button>
        </div>
      </div>
    </>
  );
}
