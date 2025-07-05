import { Plus, SunMedium } from "lucide-react";
import Container from "../layout/Container";
import Balok from "../../assets/Balok.png";
import BoxContent from "../../assets/BoxContent.png";

const Featured = () => {
  return (
    <section className="w-full max-h-screen">
      <Container className="max-w-5xl flex flex-col items-center justify-between gap-10">
        <div className="space-y-9 w-1/2">
          <span className="flex items-center gap-2 justify-center">
            <Plus />
            <SunMedium />
          </span>
          <h1 className="font-normal text-5xl text-center">
            Power your business with Sublime
          </h1>
          <p className="text-sm font-light text-[#4D4D56] text-center">
            Sublime seamlessly integrates with your existing infrastructure,
            allowing you to effortlessly connect and consolidate data from
            various sources.
          </p>
        </div>

        <div className="w-full h-full flex items-center justify-between gap-16">
          <div className="flex flex-col gap-6 items-start">
            <div className="flex flex-col items-start gap-2">
              <img src={Balok} alt="" className="w-[20%]"/>
              <h1 className="font-normal text-2xl">Increased Efficiency</h1>
              <p className="text-sm font-light text-[#4D4D56]">
                Our workflows are streamlined, optimised and built to perform.
              </p>
            </div>
            <div className="flex flex-col items-start gap-2">
              <img src={Balok} alt="" className="w-[20%]"/>
              <h1 className="font-normal text-2xl">Great Communication</h1>
              <p className="text-sm font-light text-[#4D4D56]">
                We're here for you at any time of the day and would love to hear
                from you.
              </p>
            </div>
          </div>

          <img src={BoxContent} alt="" className="w-[35%]"/>

          <div className="flex flex-col gap-6 items-start">
            <div className="flex flex-col items-start gap-2">
              <img src={Balok} alt="" className="w-[20%]"/>
              <h1 className="font-normal text-2xl">Simple Systems</h1>
              <p className="text-sm font-light text-[#4D4D56]">
                Sublime is easy to use and even easy to integrate with existing
                systems.
              </p>
            </div>
            <div className="flex flex-col items-start gap-2">
              <img src={Balok} alt="" className="w-[20%]"/>
              <h1 className="font-normal text-2xl">Easily Customized</h1>
              <p className="text-sm font-light text-[#4D4D56]">
                Need a more custom solution? Done - let's chat about it.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Featured;
