import React from "react";
import { GoQuestion } from "react-icons/go";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';
function Card() {
  return (
    <>
      {/* FirstCard */}
      <div className="w-full bg-[#146EB4] flex flex-col duration-300 text-white leading-7 rounded-md shadow-gray-400  hover:shadow-blue-200 shadow-xl">
        <div className=" flex items-center gap-3 px-4 pt-2">
          <span className=" text-[13px] text-gray-300">Next Payout</span>
          <div className=" text-sm hover:text-red-300 hover:scale-[1.2]">
            <GoQuestion />
          </div>
        </div>
        <div className=" flex justify-between items-center px-4 pt-2">
          <span className="text-2xl mb-4 bold">₹2,312.23</span>
          <a
            className=" text-sm flex items-center gap-1 hover:scale-[1.04] hover:text-red-300 duration-150"
            href="">
            <span className=" -translate-y-[.15rem] text-white/90 underline hover:cursor-pointer">
              23 orders
            </span>
            <FaAngleRight />
          </a>
        </div>
        <div className=" flex items-center justify-between bg-[#0E4F82] px-4 py-1 rounded-lg">
          <span className=" text-[13px] text-gray-300">Next Payout date:</span>
          <span className=" text-[13px] text-gray-50 ">Today, 04:00PM</span>
        </div>
      </div>

      {/* Second Card */}
      <div className="w-full h-[94px] bg-white flex flex-col text-black leading-7 rounded-md shadow-gray-400  hover:shadow-blue-200 shadow-md">
        <div className=" flex items-center gap-3 px-4 pt-2">
          <span className=" text-[13px] text-gray-500">Amount Pending</span>
          <div className=" text-sm hover:text-red-300 hover:scale-[1.2]">
            <GoQuestion />
          </div>
        </div>
        <div className=" flex justify-between items-center px-4 pt-2 ">
          <span className="text-2xl mb-4 bold">₹92,312.20</span>
          <a
            className=" text-sm flex items-center gap-1 hover:scale-[1.04] duration-150"
            href="">
            <span className=" -translate-y-[.15rem] text-[#146EB4] underline hover:cursor-pointer">
              23 orders
            </span>
            <div className=" text-[#146EB4] hover:text-red-300">
              <FaAngleRight />
            </div>
          </a>
        </div>
      </div>
      {/* Third Card */}
      <div className="w-full h-[94px] bg-white flex flex-col text-black leading-7 rounded-md shadow-gray-400  hover:shadow-blue-200 shadow-md ">
        <div className=" flex items-center gap-3 px-4 pt-2">
          <span className=" text-[13px] text-gray-500">Amount Pending</span>
          <div className=" text-sm hover:text-red-300 hover:scale-[1.2]">
            <GoQuestion />
          </div>
        </div>
        <div className=" flex justify-between items-center px-4 pt-2 ">
          <span className="text-2xl mb-4 bold">₹23,92,312.19</span>
        </div>
      </div>
    </>
  );
}

export default Card;
