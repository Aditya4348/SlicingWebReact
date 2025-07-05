const ReviewCustomer = () => {
  return (
    <section className="w-full h-1/2 flex md:flex-row flex-col items-center justify-around py-8 px-3 border-y border-black/20">
      <div className="flex flex-col items-start justify-start gap-2">
        <h1 className="text-3xl font-medium text-[#18181B]">
          15,000+ happy
          <br />
          customers.
        </h1>
        <p className="text-sm font-light text-[#4D4D56]">
          Using Sublime everyday and loving it!
        </p>
      </div>
      <div className="flex items-center gap-14">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-5xl font-medium text-[#18181B]">24K</h1>
          <p className="text-sm font-light text-[#4D4D56]">Trusted Reviews</p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-5xl font-medium text-[#18181B]">96%</h1>
          <p className="text-sm font-light text-[#4D4D56]">
            customer satisfaction
          </p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-5xl font-medium text-[#18181B]">32K</h1>
          <p className="text-sm font-light text-[#4D4D56]">Expenses Saved</p>
        </div>
      </div>
    </section>
  );
};

export default ReviewCustomer;
