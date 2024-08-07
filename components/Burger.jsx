"use client";

const Burger = ({ handleClick, isActive }) => {
  return (
    <ul
      onClick={handleClick}
      className={`flex flex-col hover:cursor-pointer gap-[3px] justify-center lg:hidden border-2 border-separate p-3 ${
        isActive ? "active" : ""
      }`}
    >
      <li
        className={`w-[16px] h-[2.5px] bg-white transition-transform duration-500 rounded-sm ${
          isActive ? "translate-y-[6px] rotate-[225deg]" : ""
        }`}
      />
      <li
        className={`w-[16px] h-[2.5px] bg-white transition-transform duration-500 rounded-sm ${
          isActive ? "rotate-[-585deg]" : ""
        }`}
      />
      <li
        className={`w-[16px] h-[2.5px] bg-white transition-transform duration-500 rounded-sm ${
          isActive ? "translate-y-[-5px] rotate-[315deg]" : ""
        }`}
      />
    </ul>
  );
};

export default Burger;
