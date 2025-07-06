import CheckBoxGroup from "../Atom/CheckBoxGroup";
import Container from "../layout/Container";
import { ArrowRight } from "lucide-react";
import Performance from "../../assets/Performance.png";
import Penempa from "../../assets/Penempa.png";


const AboutSolution = () => {
  return (
    <section className="w-full ">
      <Container className="max-w-5xl flex items-center justify-between">
        <div className="flex flex-col items-start justify-center gap-6 ">
          <img src={Penempa} alt="" className="w-[10%] "/>
          <h1 className="font-normal text-5xl ">Provide powerful<br />solutions at all times.</h1>
          <p>
            Use Sublime to streamline your processes, save time and effort and
            increase your sales exponentially.
          </p>
          <div className="inline-flex gap-4">
            <CheckBoxGroup />
          </div>
          <button className="flex items-center gap-2 border border-black px-4 py-2 font-medium rounded-full">
            Learn More 
            <ArrowRight />
          </button>
        </div>

        <img src={Performance} alt="" className="w-1/2 "/>
      </Container>
    </section>
  );
};

export default AboutSolution;
