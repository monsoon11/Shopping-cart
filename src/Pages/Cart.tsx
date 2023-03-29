import React, { useEffect } from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Products } from "../Components/Products/Products";
import { useSelector, useDispatch } from "react-redux";
import CardComponent from "../Components/Navbar/CardComponent/CardComponent";
import { remove } from "../Store/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: any) => state.cart);
  const localItemsCart = JSON.parse(localStorage.getItem("cartItems") || "[]");

  useEffect(() => {
    if (localItemsCart.length === 0) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  const removeItem = (item: any) => {
    dispatch(remove(item));
    const storedItems = JSON.parse(localStorage.getItem("cartItems") || "[]");

    const itemIndex = storedItems.findIndex(
      (storedItem: any) => storedItem.id === item.id
    );
    if (itemIndex !== -1) {
      storedItems.splice(itemIndex, 1);
      localStorage.setItem("cartItems", JSON.stringify(storedItems));
    }
  };

  return (
    <div className="flex flex-col justify-start items-center">
      <Navbar />
      <h2 className="flex flex-row justify-center items-center flex-nowrap h-10 capitalize md:text-[20px] text-[15px] font-sans font-[400] min-w-[20rem]">
        Your Shopping Cart
      </h2>
      <div className="w-full h-auto flex flex-col justify-center gap-5 items-center relative py-10">
        {localItemsCart.map((item, index) => (
          <div key={index} className="relative">
            <CardComponent
              otherSection={true}
              title={item.title}
              price={item.price}
              image={item.image}
              button={
                <button
                  onClick={() => {
                    removeItem(item);
                  }}>
                  Remove
                </button>
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
