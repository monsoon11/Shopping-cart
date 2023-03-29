import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const STATUS = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});
const products = createSlice({
  name: "product",
  initialState: { data: [], status: STATUS.IDLE },

  reducers: {
    setProducts(state, action) {
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setProducts, setStatus } = products.actions;
export default products.reducer;

// thunk
export function fetchProducts() {
  return async function fetchProductThunk(dispatch, getState) {
    dispatch(setStatus(STATUS.LOADING));
    const productData = await axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        dispatch(setProducts(res.data));
        dispatch(setStatus(STATUS.IDLE));
      })
      .catch((err) => {
        console.log("ERROR");
        dispatch(setStatus(STATUS.ERROR));
      });
  };
}
