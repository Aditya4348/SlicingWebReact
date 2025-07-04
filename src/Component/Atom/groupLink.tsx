const GroupLink = () => {
  return (
    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:bg-white">
      <li>
        <a
          href="#"
          className="block py-2 px-3 rounded-sm md:p-0"
          aria-current="page"
        >
          Home
        </a>
      </li>
      <li>
        <a
          href="#"
          className="block py-2 px-3 rounded-sm md:p-0"
        >
          About
        </a>
      </li>
      <li>
        <a
          href="#"
          className="block py-2 px-3rounded-sm md:p-0"
        >
          Services
        </a>
      </li>
      <li>
        <a
          href="#"
          className="block py-2 px-3 rounded-sm md:p-0"
        >
          Contact
        </a>
      </li>
    </ul>
  );
};

export default GroupLink;
