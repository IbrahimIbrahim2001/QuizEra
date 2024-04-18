export default function QuizResultItem({ item }) {
  const status =
    item.correctAnswer === item.selectedAnswer
      ? "bg-[#54b571]"
      : "bg-[#ff7a6c] ";

  console.log(status);

  return (
    <div
      className={`col-span-3 md:col-span-1 lg:col-span-1 ${status} flex flex-col justify-between px-5 py-3 my-2 mr-4 rounded-md shadow-md`}
    >
      <div>
        <span className="font-bold text-[#fafafa]">question:</span>{" "}
        <p className="font-semibold">{item.question}</p>
      </div>
      <div>
        <span className="font-bold text-[#fafafa]">selected answer:</span>
        <p className="font-semibold">
          {item.selectedAnswer ? item.selectedAnswer : "empty answer"}
        </p>
      </div>
      <div>
        {" "}
        <span className="font-bold text-[#fafafa]">correct answer:</span>
        <p className="font-semibold">{item.correctAnswer}</p>
      </div>
    </div>
  );
}
