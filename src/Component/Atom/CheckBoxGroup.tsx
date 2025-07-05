const CheckBoxGroup = () => {
  return (
    <>
      <label className="inline-flex items-center space-x-2 cursor-pointer">
        <input
          type="checkbox"
          className="w-3 h-3 appearance-none rounded-full border-2 border-black checked:bg-black transition duration-200"
        />
        <span className="text-sm">On Demand Support</span>
      </label>
      <label className="inline-flex items-center space-x-2 cursor-pointer">
        <input
          type="checkbox"
          className="w-3 h-3 appearance-none rounded-full border-2 border-black checked:bg-black transition duration-200"
        />
        <span className="text-sm">Seamless Cloud Technology</span>
      </label>
    </>
  );
};

export default CheckBoxGroup;
