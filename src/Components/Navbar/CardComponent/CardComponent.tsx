import React from "react";

const CardComponent = (props: {
  image: string;
  title: string;
  price: number;
  button: React.ReactElement;
  otherSection: boolean;
}) => {
  const { image, price, title, button, otherSection } = props;
  return (
    <div
      className={`${
        otherSection === true
          ? "w-[50vw] min-w-[20rem] md:w-[95vw] h-[10rem] flex flex-row gap-10 justify-start items-center px-10 border-[1px] border-black capitalize overflow-hidden flex-nowrap"
          : " w-[17rem] h-[18rem] rounded-[4px] flex flex-col justify-start items-center gap-1 border-[1px] border-black capitalize overflow-hidden"
      }`}>
      <div className="min-h-[50%]">
        <img
          src={image}
          alt="a"
          className={`${
            otherSection === true
              ? "0rder-1 max-h-[10rem] h-[5rem] md:h-[8rem] min-w-[5rem] w-[8rem] flex flex-row justify-center items-center bg-fixed bg-contain p-2 bg-no-repeat bg-origin-content"
              : "0rder-1 h-full min-w-full flex flex-row justify-center items-center bg-fixed bg-contain p-2 bg-no-repeat bg-origin-content"
          }`}
        />
      </div>
      <div
        className={`listItems ${
          otherSection == true
            ? "w-[50%] md:w-full min-h-[50%] order-2 flex flex-col md:flex-row justify-start items-center gap-2"
            : "w-full min-h-[50%] order-2 flex flex-col justify-start items-center gap-2"
        }`}>
        <span className="title flex flex-row whitespace-wrap text-center justify-center items-center flex-wrap px-1 text-[13px] font-[600] w-full min-h-[4rem] overflow-hidden">
          {title}
        </span>
        <span className="price flex flex-row justify-center items-center text-[15px] font-[500] leading-6 w-full h-[1rem]">
          Rs.{price}
        </span>
        <span
          className={`${
            otherSection && "w-[10rem] md:w-[20rem]"
          } add flex flex-row justify-center items-center text-[15px] font-[500] border-[1px] border-black rounded-[4px] bg-[#353d48] text-white px-2 py-1 capitalize cursor-pointer`}>
          {button}
        </span>
      </div>
    </div>
  );
};

export default CardComponent;
