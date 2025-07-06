

const Button = ({children}: {children: React.ReactNode}) => {
  return (
    <button className="bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap">
      {children}
    </button>
  );
};

export default Button;
