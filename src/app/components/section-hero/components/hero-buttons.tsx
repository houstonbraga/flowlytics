import { FiPlayCircle } from "react-icons/fi";
import Button from "../../Button";

const HeroButtons = () => {
  return (
    <div className="flex justify-center gap-3 pb-16">
      <button className="flex items-center justify-center gap-1 px-5 py-3 font-semibold rounded-[8px] text-gray-600 border border-gray-400 cursor-pointer hover:opacity-90">
        <FiPlayCircle width={20} /> Demonstração
      </button>
      <Button text="Inscrever-se" />
    </div>
  );
};

export default HeroButtons;
