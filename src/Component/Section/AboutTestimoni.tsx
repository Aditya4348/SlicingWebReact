import Container from "../layout/Container";
import Performance from "../../assets/Performance.png";
import Penempa from "../../assets/Penempa.png";
import Profile from "../../assets/profile.png";
import Card from "../layout/Card";
import { ArrowRight } from "lucide-react";

const AboutTestimoni = () => {
  return (
    <section className="w-full">
      <Container className="max-w-5xl flex md:flex-row-reverse flex-col items-center justify-between">
        <div className="flex flex-col items-start justify-center gap-6 ">
          <img src={Penempa} alt="" className="w-[10%] " />
          <h1 className="font-normal text-5xl ">
            Provide powerful
            <br />
            solutions at all times.
          </h1>
          <div className="flex flex-col items-end">
            <Card className="flex flex-col items-start space-y-4 rounded-t-lg rounded-l-lg">
              <p className="text-sm font-light text-[#4D4D56] font-serif">
                "Sublime took our business to the next level. It provided the
                solution we were hunting for at an affordable price and was easy
                to integrate."
              </p>
              <div className="flex items-center gap-4">
                <img src={Profile} alt="" />
                <div className="flex flex-col gap-1">
                  <h2 className="font-medium text-sm">Sarah Smith</h2>
                  <p className="font-light text-sm text-[#6A6A77]">
                    Marketing Leader @Mailchimp
                  </p>
                </div>
              </div>
            </Card>
            <button className="w-20 h-10flex items-center gap-2 font-medium bg-white rounded-l-none rounded-b-3xl shadow-md">
              <div className="px-4 py-2">
                <ArrowRight />
              </div>
            </button>
          </div>
        </div>

        <img src={Performance} alt="" className="w-1/2 " />
      </Container>
    </section>
  );
};

export default AboutTestimoni;
