import Container from "../layout/Container";
import { LoaderPinwheel, SunMedium } from "lucide-react";
import CardProduct from "../Organisation/CardProduct";

const SublimeProduct = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center">
      <Container className="max-w-5xl">
        <div className="w-full h-full">
          <h1 className="text-lg font-semibold text-[#18181B]">
            Sublime Product
          </h1>
          <div className="w-full h-full flex flex-col gap-4 items-center justify-center">
            <div className="w-full h-full flex items-center justify-between">
              <h1 className="text-5xl font-normal w-3/4">
                Provide powerful
                <br />
                solutions at all times.
              </h1>
              <div className="flex flex-col gap-4">
                <span className="flex items-center gap-4">
                    <SunMedium />
                    <LoaderPinwheel />
                </span>
                <p className="text-sm font-light leading-loose">
                  Supercharge your productivity and optimize your workflow with
                  Sublime. Our intuitive interface and robust features for you
                </p>
              </div>
            </div>

            {/* Card Product */}
            <div className="grid grid-cols-3 gap-4">
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            <CardProduct />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SublimeProduct;
