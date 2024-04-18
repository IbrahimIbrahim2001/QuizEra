//framer motion
import { motion } from "framer-motion";

function QuizProgress({ questionIndex, questionsLength }) {
  const completionPercentage = (questionIndex / questionsLength) * 100;

  return (
    <>
      <div className=" text-[#3e3e3e] mb-2 flex items-center">
        <p className="text-md sm:text-lg font-semibold self-start mr-auto">
          question:
        </p>
        <p className="text-sm">
          {" "}
          {questionIndex}/{questionsLength}
        </p>
      </div>
      <div className="relative w-full h-4 bg-gray-200 rounded-full mb-2 ">
        <motion.div
          className="absolute h-full bg-[#4cbcd6] rounded-full text-center"
          style={{ width: `${completionPercentage}% + 10%` }}
          initial={{ width: 0 }}
          animate={{ width: `${completionPercentage}%` }}
        />
      </div>
    </>
  );
}

export default QuizProgress;

// CircularProgressBar.js

// import { motion } from "framer-motion";

// const QuizProgress = ({ questionIndex, questionsLength }) => {
//   const completionPercentage = (questionIndex / questionsLength) * 100;
//   const radius = 30; // Adjust the radius of the circle
//   const circumference = 2 * Math.PI * radius;
//   const progressLength = (completionPercentage / 100) * circumference;

//   // Calculate the starting point based on completion percentage
//   const startingPoint = circumference - progressLength;

//   return (
//     <svg
//       width="100"
//       height="100"
//       viewBox="0 0 100 100"
//       aria-label="Quiz Progress"
//     >
//       <circle
//         cx="50"
//         cy="50"
//         r={radius}
//         fill="none"
//         stroke="#E2E8F0"
//         strokeWidth="8" // Adjust the thickness
//       />
//       <motion.circle
//         cx="50"
//         cy="50"
//         r={radius}
//         fill="none"
//         stroke="#48BB78" // Adjust the progress color
//         strokeWidth="8"
//         strokeDasharray={`${progressLength} ${circumference}`}
//         initial={{ strokeDashoffset: startingPoint }} // Set the fixed starting point
//         animate={{ strokeDashoffset: circumference - progressLength }}
//       />
//       <text
//         x="50"
//         y="55"
//         textAnchor="middle"
//         fontSize="12"
//         fill="#333" // Adjust the font color
//       >
//         {completionPercentage.toFixed(1)}%
//       </text>
//     </svg>
//   );
// };

// export default QuizProgress;
