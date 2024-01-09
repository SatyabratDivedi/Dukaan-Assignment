import React from "react";
import Header from "./Header";
import Card from "./Card";
import TransactionArea from "./TransactionArea";

function HeroSection() {
  return (
    <>
      <div className=" w-[85%] bg-slate-50">
        <Header />
        <div className=" flex justify-between items-center px-5 py-5 ">
          <span className=" bold ">Overview</span>
          <select className=" px-2 p-[.35rem] rounded-md border w-[110px] outline-none text-sm cursor-pointer">
            <option value="thisMonth">This Month</option>
            <option value="lastMonth">Last Month</option>
            <option value="thisYear">This Year</option>
            <option value="allTime">All Time</option>
          </select>
        </div>
        {/* CardSection */}
        <div className=" grid grid-cols-3 gap-8 px-5">
          <Card />
        </div>
        <div className="px-5 py-7">
          <TransactionArea/>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
