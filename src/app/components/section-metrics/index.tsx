import { FiZap } from "react-icons/fi";
import GridContainer from "../GridContainer";
import Metrics from "./components/metrics";

const SectionMetrics = () => {
  return (
    <section>
      <GridContainer>
        <div className="flex flex-col gap-16 items-center mt-36">  
          <div className="flex flex-col items-center">
            <div className="flex justify-center items-center bg-brand text-white w-14 h-14 rounded-full mb-6">
              <FiZap className="text-3xl" />
            </div>
            <h1 className="text-4xl font-semibold mb-5 text-center">Liberar todo o poder dos dados</h1>
            <p className="text-xl text-gray-500 text-center">Tudo o que você precisa para converter, envolver e reter mais usuários.</p>
          </div>
          <Metrics />
        </div>
      </GridContainer>
    </section>
  );
};

export default SectionMetrics;
