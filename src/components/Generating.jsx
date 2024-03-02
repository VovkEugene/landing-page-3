import { loading } from "../assets";

const Generating = ({ className }) => {
  return (
    <div
      className={`h-[3.5rem] px-6 flex items-center rounded-[1.7rem] text-base bg-n-8/80 ${
        className || ""
      }`}
    >
      <img src={loading} alt="Loading" className="w-5 h-5 mr-4" />
      AI is Generating
    </div>
  );
};

export default Generating;
