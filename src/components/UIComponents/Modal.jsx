//modal library - {Rodal}
import Rodal from "rodal";

import { useNavigate } from "react-router-dom";

export default function Modal({ onCloseModal }) {
  const navigate = useNavigate();
  return (
    <Rodal visible={true} onClose={onCloseModal}>
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-lg border shadow-lg bg-[#dcf8ff] px-5 py-3  min-w-[270px] sm:w-96 h-44 flex flex-col justify-between">
        <div className="flex justify-between">
          <p className="text-[#3e3e3e] font-medium">Want to see your Result?</p>
          <button
            className="rounded-full bg-[#4cbcd6] border-white w-8 shadow-xl h-8 mb-3 place-self-end text-white"
            onClick={onCloseModal}
          >
            X
          </button>
        </div>
        <button
          className="rounded-lg bg-white border border-[#f2f2f2] shadow-sm text-[#3e3e3e]"
          onClick={() => navigate("../quiz-result")}
        >
          Show Result
        </button>
      </div>
    </Rodal>
  );
}
