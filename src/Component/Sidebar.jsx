import React from "react";
import DukanImg from "./../assets/Dukaan.png";
import { FaChevronDown } from "react-icons/fa6";
import { CiWallet } from "react-icons/ci";
import SideBarList from "./SideBarList.jsx";

function Sidebar() {
  return (
    <>
      <div className=" bg-[#1e2640] w-[210px] p-3 text-white flex flex-col">
        {/* imgArea */}
        <div className=" flex items-center">
          <img
            className=" w-11 rounded-md object-cover"
            src={DukanImg}
            alt=""
          />
          <div className="px-3 ">
            <h3 className="font-medium text-[15px]">Nishayn</h3>
            <a
              href="https://foodiess-react-web.netlify.app/"
              target="_blank"
              className="text-[13px] text-white/70 underline hover:cursor-pointer">
              Visit store
            </a>
          </div>
          <div className=" ml-11">
            <FaChevronDown />
          </div>
        </div>
        {/* Home to plugins area with icons */}
        <div className=" flex flex-col mt-4">
          {SideBarList.map((List) => {
            return (
              <div
                key={List.id}
                className=" flex items-center py-2 gap-3 px-2 rounded-lg hover:scale-105 hover:bg-white/10 duration-75 hover:shadow-sm hover:shadow-white">
                <div className={`text-xl`}>{List.icon}</div>
                <a href="#" className={`text-[14px] duration-100`}>
                  {List.name}
                </a>
              </div>
            );
          })}
        </div>
        {/* Available Credit Area */}
        <div className=" flex items-center py-1 gap-3 px-2 rounded-lg bg-white/10 mt-[100%] translate-y-[75px]">
          <div className="text-3xl  bg-white/15 px-[.16rem] rounded-md">
            <CiWallet />
          </div>
          <div className=" flex flex-col">
            <span className="text-[12px] text-gray-400">
              Available credits{" "}
            </span>
            <span className="text-[14px]">222.10 </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
