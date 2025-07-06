import { Loader, Star } from "lucide-react";
import Container from "../layout/Container";
import Card from "../layout/Card";
import Profile from "../../assets/profile.png";
import Sponsor1 from "../../assets/Sponsor1.png";
import Sponsor2 from "../../assets/Sponsor2.png";
import Sponsor3 from "../../assets/Sponsor3.png";
import Sponsor4 from "../../assets/Sponsor4.png";
import { useState } from "react";

const Testimoni = () => {
  const [rating, setRating] = useState(5);

  function handleRating(rating: number) {
    setRating(rating);
  }

  const Sponsors = [
    Sponsor1,
    Sponsor2,
    Sponsor3,
    Sponsor4,
  ];

  const Commentar = [
    {
      id: 1,
      name: "Sarah Smith",
      job: "Marketing Leader @Mailchimp",
      testimoni:
        "Sublime took our business to the next level. It provided the solution we were hunting for at an affordable price and was easy to integrate.",
    },
    {
      id: 2,
      name: "John Doe",
      job: "Web Developer @Twitter",
      testimoni:
        "I was blown away by the power and flexibility of Sublime. It was exactly what I needed to take my development to the next level.",
    },
    {
      id: 3,
      name: "Jane Doe",
      job: "Content Writer @Medium",
      testimoni:
        "Sublime is the best tool I have ever used. It's so easy to use and has helped me become a better writer.",
    },
    {
      id: 4,
      name: "Bob Smith",
      job: "Software Engineer @Google",
      testimoni:
        "Sublime is an amazing tool. It has saved me so much time and has made my job so much easier.",
    },
  ];

  return (
    <section className="w-full flex flex-col items-center justify-center">
      <Container className="max-w-6xl space-y-5 flex flex-col items-center">
        <div className="w-full space-y-7">
          <p className="text-sm font-light text-gray-500 text-center">
            OUR TESTIMONIALS
          </p>
          <div className="w-full flex justify-between items-center">
            <Loader />

            <h1 className="text-4xl font-normal text-[#18181B] text-center">
              Check out what
              <br />
              our customers have to say
            </h1>

            <Loader />
          </div>
        </div>

        <div className="w-full h-full flex flex-col gap-4 items-center justify-center">

            {/* Card Testimoni */}
          <div className="w-full px-4 py-6 flex flex-wrap items-start justify-center gap-4">
            {/* Card Testimoni */}
            {Commentar.map((item) => (
              <Card
                className="sm:w-[48%] lg:w-[30%] flex flex-col items-start justify-center gap-4"
                key={item.id}
              >
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((value) => (
                    <Star
                      key={value}
                      onClick={() => handleRating(value)}
                      className={`w-5 h-5 cursor-pointer ${
                        value <= rating ? "text-yellow-400" : "text-gray-300"
                      }`}
                      fill={value <= rating ? "currentColor" : "none"}
                    />
                  ))}
                </div>

                <p className="text-sm font-light text-[#4D4D56] font-serif">
                  {item.testimoni}
                </p>
                <div className="flex items-center gap-4">
                  <img src={Profile} alt="" />
                  <div className="flex flex-col gap-1">
                    <h2 className="font-medium text-sm">{item.name}</h2>
                    <p className="font-light text-sm text-[#6A6A77]">
                      {item.job}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <p className="text-sm font-medium text-[#4D4D56] text-center">CLINTS USING SUBLIME</p>
        </div>

        {/* Sponsor Logo */}
        <div className="md:w-1/2 w-full flex items-center md:justify-between justify-center gap-4 md:gap-0">
            {Sponsors.map((item) => (
              <img src={item} alt="" className="" />
            ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimoni;
