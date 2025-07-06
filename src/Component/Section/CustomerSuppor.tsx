import Container from "../layout/Container";
import ProfileBig from "../../assets/ProfileBig.png";
import Card from "../layout/Card";
import { PowerCircle, Plus, Sun, SunMedium, TriangleAlert } from "lucide-react";

const CustomerSupport = () => {
  const CardData = [
    {
      id: 1,
      icon: <PowerCircle />,
      title: "Our team shares values of success",
      text: "At Sublime, our team is focussed on working with you to achieve success.",
    },
    {
      id: 2,
      icon: <PowerCircle />,
      title: "We’re on a mission to power our customers",
      text: "At Sublime, our team is focussed on working with you to achieve success.",
    },
    {
      id: 2,
      icon: <TriangleAlert />,
      title: "We’re on a mission to power our customers",
      text: "At Sublime, our team is focussed on working with you to achieve success.",
    },
  ];

  return (
    <section className="w-full ">
      <Container className="max-w-5xl flex items-center justify-between">
        <div className="w-full flex flex-col items-center gap-6 p-9 border-2 border-dashed border-gray-400">
          <div className="flex items-center justify-around gap-10">
            <div className="w-[60%] flex items-center gap-9">
              <div className="flex items-center w-[30%] -space-x-6">
                <img src={ProfileBig} alt="" className="w-[40%]" />
                <img src={ProfileBig} alt="" className="w-[40%]" />
                <img src={ProfileBig} alt="" className="w-[40%]" />
              </div>
              <h1 className="font-normal text-3xl ">
                Powerful
                <br />
                Customer Support
              </h1>
            </div>
            <div className="flex gap-4 justify-between">
              <Plus />
              <Sun />
              <SunMedium />
            </div>
          </div>

          <div className="flex items-center justify-center gap-6">
            {CardData.map((card) => (
              <Card
                className="flex flex-col items-center justify-center gap-4 w-1/2 shadow-md"
                key={card.id}
              >
                {card.icon}
                <h1 className="text-xl text-center font-normal">
                  {card.title}
                </h1>
                <p className="text-sm font-light text-center">{card.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CustomerSupport;
