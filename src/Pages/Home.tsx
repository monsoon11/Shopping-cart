import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Products } from "../Components/Products/Products";

const Home = () => {
  return (
    <div className=" flex flex-col justify-start items-center">
      <Navbar />
      <h2 className="flex flex-row justify-center items-center md:h-10 py-5 w-[100%] md:w-full capitalize md:text-[20px] text-[15px] font-sans font-semi">
        Welcome To the Redux Toolkit Shopping Cart
      </h2>
      <div className=" w-full h-screen flex flex-row flex-wrap justify-center">
        <Products />
        <span
          onClick={() => {
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }}
          className="bg-rd-500 w-full h-[10rem] flex flex-row justify-center items-center py-5 ">
          <button className="top  cursor-pointer w-[4rem] rounded-full h-10 border-[1px] border-black hover:bg-green-200">
            Top
          </button>
        </span>
      </div>
    </div>
  );
};

export default Home;
