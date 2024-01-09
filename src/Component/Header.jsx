import React from "react";
import { GoQuestion } from "react-icons/go";
import { BsFillChatDotsFill } from "react-icons/bs";
import { VscTriangleDown } from "react-icons/vsc";
import { CiSearch } from "react-icons/ci";

function Header() {
  return (
    <div className=" bg-white h-[3.5rem] flex px-5 items-center justify-between">
      <div className=" flex items-center ">
        <span className="bold mr-4">Payouts</span>
        <div className=" hover:text-blue-300 hover:scale-[1.2]">
          <GoQuestion />
        </div>
        <span className=" text-[12px] ml-1">How it works</span>
      </div>
      {/* SearchArea */}
      <div className=" bg-gray-200 flex items-center rounded-md px-3 ">
        <div className=" text-xl">
          <CiSearch />
        </div>
        <input
          className=" bg-gray-200 w-[300px] px-4 py-[.35rem] outline-none rounded-md text-gray-600"
          type="text"
          placeholder="Search features, tutorials, ets."
        />
      </div>
      {/* NotificationArea */}
      <div className=" flex gap-3">
        <div className=" bg-gray-300 p-2 rounded-full cursor-pointer hover:text-[#146EB4]">
          <BsFillChatDotsFill />
        </div>
        <div className=" bg-gray-300 p-2 rounded-full cursor-pointer hover:text-[#146EB4]">
          <VscTriangleDown />
        </div>
      </div>
    </div>
  );
}

export default Header;
