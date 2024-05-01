import { Link } from "react-router-dom";

import fallimage from "@/assets/Under construction.gif";
export const Fallback = () => {
  return (
    <>
      <div className="flex justify-center items-center h-120">
        <img src={fallimage} alt="Under Construction" width={600} />
      </div>
      <div className="flex justify-center items-center text-lg font-bold">
        This page is under maintenance and will be back soon
      </div>
      <div className="flex mb-60 mt-10 justify-center items-center text-lg font-bold">
        <Link to="/" className="cursor-pointer">
          <button className="transition-all bg-primary text-white px-6 py-2 rounded-lg border-primary border-b-4 hover:brightness-110 hover:-translate-y-1 hover:border-b-6 active:border-b-2 active:brightness-90 active:translate-y-2 hover:shadow-xl shadow-primary active:shadow-none">
            Back to Homepage
          </button>
        </Link>
      </div>
    </>
  );
};
export default Fallback;
