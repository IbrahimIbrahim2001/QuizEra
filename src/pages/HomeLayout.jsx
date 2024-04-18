//react router
import { Outlet } from "react-router-dom";

export default function HomeLayout() {
  return (
    <div className="bg-[#fafafa]">
      <div className="shadow sticky top-0 rounded-md rounded-t-none bg-[#4cbcd6] text-[#fafafa] w-full h-16  mx-auto  flex items-center justify-between z-10">
        <p className="text-2xl w-full text-center font-bold">QuizEra</p>
      </div>
      <div className="sm:flex justify-center">
        <Outlet />
      </div>
    </div>
  );
}
