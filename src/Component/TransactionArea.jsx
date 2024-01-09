import React from "react";
import { CiSearch } from "react-icons/ci";
import { MdOutlineSwapVert } from "react-icons/md";
import { GoDownload } from "react-icons/go";
import { GoDotFill } from "react-icons/go";
import TransactionData from './TransactionData.jsx';


const TransactionArea = () => {
  return (
    <>
      <div className=" flex flex-col gap-3">
        <span className=" bold text-sm mb-2">Transaction | This Month</span>
        <div className=" flex items-center gap-3 pb-3">
          <span className=" bg-[#E6E6E6] text-xs bold px-3 py-1 rounded-xl text-gray-500">
            Payouts(22)
          </span>
          <span className=" bg-[#146EB4] text-xs bold px-3 py-1 rounded-xl text-white/90">
            Refunds(6)
          </span>
        </div>
        {/* TransactionArea */}
        <div className=" bg-white rounded-md px-3">
          <div className=" flex justify-between py-3">
            <div className=" bg-white flex items-center rounded-md px-3 border">
              <div className=" text-xl">
                <CiSearch />
              </div>
              <input
                className=" bg-white w-[200px] px-4 py-[.35rem] outline-none rounded-md text-gray-600"
                type="text"
                placeholder="Order ID or transaction ID"
              />
            </div>
            <div className=" flex gap-3">
              <div className=" px-2 rounded-md border border-gray-400 flex items-center gap-1">
                Sort
                <MdOutlineSwapVert />
              </div>
              <div className=" px-2 rounded-md border border-gray-400 flex items-center gap-1">
                <GoDownload />
              </div>
            </div>
          </div>

          <div className=" bg-gray-300 text-black bold tracking-wide px-2 py-3  rounded-md flex justify-between text-xs ">
            <span>Order Id</span>
            <span>Status</span>
            <span>Transaction Id</span>
            <span>Refund date</span>
            <span>Order amount</span>
          </div>
          <div>
            {TransactionData.map((Data)=>{
                return(
                <div key={Data.id} className=" border-b-2 py-3 tracking-wide  border-b-slate-300  text-gray-600 bold p-2 rounded-md flex justify-between text-xs">
                    <span className=" text-[#146EB4]">{Data.id}</span>
                    <span className="flex items-center"> {Data.status === 'Successful'? <div className=" text-green-500"><GoDotFill/></div>: <GoDotFill/> } {Data.status}</span>
                    <span>{Data.transactionId}</span>
                    <span>{Data.refundDate}</span>
                    <span>₹{Data.orderAmount}</span>
                  </div>
                )
            })}
          
          </div>
        </div>
      </div>
    </>
  );
};

export default TransactionArea;
