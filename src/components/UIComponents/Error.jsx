//react router
import { useNavigate } from "react-router-dom";

//assets
import errorSvg from "../../assets/error-svg.svg";

export default function Error() {
  const navigate = useNavigate();
  return (
    <div className=" text-white ">
      <div className="flex w-full h-[90vh] bg-[#fafafa]">
        <div className="m-auto text-center">
          <div>
            <img src={errorSvg} alt="error" />
          </div>
          <p className="text-[#4cbcd6] p-2 mb-4 text-xl font-bold">
            There is an Error, Sorry...
          </p>
          <button
            onClick={() => navigate("/")}
            className="font-semibold bg-[#4cbcd6] hover:bg-[#4cbcd6] text-[#3e3e3e] hover:text-white rounded   py-2 px-4 border border-[#4cbcd6] shadow-lg"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
