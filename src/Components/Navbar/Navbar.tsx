import React, { useState } from "react";
import { FaOpencart, FaBars, IoMdCart, RxCross2 } from "react-icons/all";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const selectItems = useSelector((state: any) => state.cart);
  const localItemsCart = JSON.parse(localStorage.getItem("cartItems") || "[]");

  return (
    <div className="border-b-[1px] border-b-grey w-full h-[3rem] flex flex-row items-center gap-10 justify-start px-10">
      <span>
        <FaOpencart size={35} />
      </span>
      <ul className="hidden md:flex md:flex-row justify-end items-center flex-1 gap-5 h-[2rem] p-1">
        <Link
          to={"/"}
          className="items min-w-[4rem] text-[20px] rounded-[4px] hover:bg-slate-200 cursor-pointer px-1 flex flex-row justify-center items-center">
          Home
        </Link>
        <Link
          to={"/cart"}
          className="items min-w-[4rem] text-[20px] rounded-[4px] hover:bg-slate-200 cursor-pointer px-1 flex flex-row justify-center items-center">
          Cart
        </Link>
        <li className="cursor-pointer relative">
          <IoMdCart size={25} />
          <span className="absolute m-0 top-[-0.5rem] right-[-1rem]  text-[#353d48] h-5 flex flex-row items-center p-1 rounded-[4px] text-[14px] font-[400]">
            {localItemsCart.length}
          </span>
        </li>
      </ul>
      <span
        className="ml-auto cursor-pointer md:hidden"
        onClick={() => {
          setIsOpen(isOpen === true ? false : isOpen === false ? true : false);
        }}>
        {isOpen ? <RxCross2 size={25} /> : <FaBars size={25} />}
      </span>
      {isOpen && (
        <ul
          className={`flex flex-col z-[10] ${
            isOpen && "transition-all  ease-in duration-900"
          } top-0 left-0 w-52 h-screen bg-[#353d48] justify-start items-start px-10 flex-1 gap-5 md:hidden absolute py-1`}>
          <span>
            <FaOpencart size={35} className="text-white" />
          </span>
          <Link
            to={"/"}
            className="items min-w-[4rem] text-[20px] rounded-[4px] hover:text-white cursor-pointer px-1 flex flex-row justify-start items-center">
            Home
          </Link>
          <Link
            to={"/cart"}
            className="items min-w-[4rem] text-[20px] rounded-[4px]  hover:text-white cursor-pointer px-1 flex flex-row justify-start items-center">
            Cart
          </Link>
          <li className="min-w-[4rem] cursor-pointer px-1 flex flex-row justify-start items-center hover:text-white  relative">
            <IoMdCart size={25} />{" "}
            <span className="absolute m-0 top-[-0.5rem] right-[1.2rem] text-white h-5 flex flex-row items-center p-1 rounded-[4px] text-[14px] font-[400]">
              {localItemsCart.length}
            </span>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
