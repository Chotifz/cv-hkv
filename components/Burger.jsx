"use client";

const Burger = ({ handleClick, isActive }) => {
  return (
    <ul
      onClick={handleClick}
      className={`flex flex-col hover:cursor-pointer gap-[3px] justify-center hover:bg-slate-300 lg:hidden border-2 b p-[10px] ${
        isActive ? "active" : ""
      }`}
    >
      <li
        className={`w-[18px] h-[3px] bg-black transition-transform duration-500 rounded-sm ${
          isActive ? "translate-y-[6px] rotate-[225deg]" : ""
        }`}
      />
      <li
        className={`w-[18px] h-[3px] bg-black transition-transform duration-500 rounded-sm ${
          isActive ? "rotate-[-585deg]" : ""
        }`}
      />
      <li
        className={`w-[18px] h-[3px] bg-black transition-transform duration-500 rounded-sm ${
          isActive ? "translate-y-[-5.5px] rotate-[315deg]" : ""
        }`}
      />
    </ul>
  );
};

export default Burger;
