import Container from "../layout/Container";
import Image from "../../assets/Container.png";
import CheckBoxGroup from "../Atom/CheckBoxGroup";

const Hero = () => {
  return (
    <main className="w-full max-h-screen">
      <section className="">
        <Container className="grid max-w-6xl px-4 py-8 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 relative">
          <div className="mr-auto place-self-center lg:col-span-7">
            <p className="mb-4 font-light text-gray-500">
              55,000+ trusted Businesses
            </p>
            <div className="max-w-lg mb-4 pl-2 pr-5 border-2 space-y-8 border-dashed border-gray-400">
              <h1 className="max-w-2xl mb-4 text-xl font-medium tracking-tight leading-none md:text-5xl xl:text-6xl">
                Build your next <br /> project faster.
              </h1>
              <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-sm lg:text-base">
                Use Sublime to streamline your processes, save time and effort
                and increase your sales exponentially.
              </p>
              <div className="flex">
                <div className="bg-white rounded-full p-1 flex justify-between shadow-md">
                  <input
                    type="text"
                    className="px-4 py-2 mr-3 text-sm text-left bg-white rounded-full focus:outline-none"
                    placeholder="Enter your email"
                  />
                  <button className=" px-4 py-2 text-sm text-center text-white bg-[#333333] rounded-full">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
            <div className="inline-flex space-x-4">
                <CheckBoxGroup />
            </div>
          </div>

            <img
              src={Image}
              alt="image"
              className="w-[60%] object-contain absolute -right-64 top-1/2 transform -translate-y-1/2"
            />
        </Container>
      </section>
    </main>
  );
};

export default Hero;
