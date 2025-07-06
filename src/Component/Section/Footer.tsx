import { Loader, Sparkles, SunDim } from "lucide-react";
import Button from "../Atom/Button";
import CheckBoxGroup from "../Atom/CheckBoxGroup";
import Container from "../layout/Container";

const footerMenu = [
  {
    title: "PRODUCT",
    menu: [
      {
        title: "Home",
      },
      {
        title: "About",
      },
      {
        title: "Pricing",
      },
      {
        title: "Blog",
      },
      {
        title: "Contact",
      },
    ],
  },
  {
    title: "FEATURES",
    menu: [
      {
        title: "Blog Detail",
      },
      {
        title: "Login",
      },
      {
        title: "Sign Up",
      },
      {
        title: "404 Page",
      },
    ],
  },
];

const Footer = () => {
  return (
    <section className="w-full h-full">
      {/* ADS SECTION  */}
      <section className="h-[30%] py-5 border-t-4 border-dashed border-gray-500">
        {/* ads here */}
        <Container className="max-w-5xl flex items-end justify-between ">
          {/* Title ads */}
          <div className="flex flex-col items-start gap-5">
            <h1 className="text-5xl font-normal">
              Start your
              <br />
              7-day free trial
            </h1>
            <div className="flex gap-5">
              <CheckBoxGroup />
            </div>
          </div>

          {/* button ads */}
          <div className="flex flex-col items-start gap-4">
            <span className="flex items-center gap-2">
              <Loader />
              <SunDim />
            </span>
            <div className="flex items-center gap-2">
              <Button>Learn More</Button>
              <span className="text-sm font-normal flex flex-col">
                4.80/5
                <p className="text-sm font-normal">
                  From 300+ Customer Reviews
                </p>
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Footer */}
      <section className="h-[70%] bg-white py-2">
        <Container className="max-w-5xl flex flex-col items-center gap-10">
          <div className="w-full flex items-center gap-5 justify-between">
            <div className="flex flex-col items-start gap-4">
              <h1 className="text-2xl flex font-semibold whitespace-nowrap">
                Sublime
                <Sparkles color="black" />
              </h1>
              <p className="text-sm font-normal text-[#4D4D56]">
                Powering business to streamline <br /> processes and grow sales.
              </p>
              <span className="text-sm py-3 px-2 bg-[#F7F7F8] rounded-full font-medium">
                (01) 0000 0000
              </span>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex items-start space-x-20">
                {footerMenu.map((item, index) => (
                  <div key={index} className="flex flex-col gap-6">
                    <h1 className="text-xl flex font-normal whitespace-nowrap">
                      {item.title}
                    </h1>
                    <ul className="flex flex-col items-start gap-7">
                      {item.menu.map((link, index) => (
                        <li
                          key={index}
                          className="text-sm font-normal text-[#4D4D56]"
                        >
                          {link.title}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full flex items-end gap-2 justify-between border-t border-black/20 pt-7">
                <h1 className="text-sm font-normal text-[#4D4D56] cursor-default">Copyright ©2025 Aditya</h1>
                <span className="flex items-center gap-10">
                    <a href="#" className="text-sm font-normal text-[#4D4D56]">Legal</a>
                    <a href="#" className="text-sm font-normal text-[#4D4D56]">Terms & Conditions</a>
                </span>
          </div>
        </Container>
      </section>
    </section>
  );
};

export default Footer;
