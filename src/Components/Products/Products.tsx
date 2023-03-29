import axios from "axios";
import React, { useState, useEffect } from "react";
import CardComponent from "../Navbar/CardComponent/CardComponent";
import { add } from "../../Store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../Store/productSlice";
import { STATUS } from "../../Store/productSlice";

export const Products = () => {
  //before fetching on redux thunk
  //   const [products, setProducts] = useState<any>([]);
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state: any) => state.product);
  useEffect(() => {
    // @ts-ignore
    dispatch(fetchProducts());
    //remove dispatch to fetch on product page
    // const fetchProdData = async () => {
    //   const res = await axios
    //     .get("https://fakestoreapi.com/products")
    //     .then((res) => {
    //       setProducts(res.data);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // };
    // fetchProdData();
  }, []);
  const handleAdd = (item: any) => {
    dispatch(add(item));
    const storedItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
    storedItems.push(item);
    localStorage.setItem("cartItems", JSON.stringify(storedItems));
  };

  if (status === STATUS.LOADING) {
    return <h1>loading...</h1>;
  }
  if (status === STATUS.ERROR) {
    return <h1>Error</h1>;
  }
  return (
    <div className="flex flex-row  flex-wrap gap-10 justify-center items-start p-10">
      {products.map((item: any, index: number) => (
        <div key={index}>
          <CardComponent
            title={item.title}
            price={item.price}
            image={item.image}
            otherSection={false}
            button={
              <button
                onClick={() => {
                  handleAdd(item);
                }}>
                Add to cart
              </button>
            }
          />
        </div>
      ))}
    </div>
  );
};
