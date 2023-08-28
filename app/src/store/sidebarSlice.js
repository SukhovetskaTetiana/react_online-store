import { createSlice } from "@reduxjs/toolkit";
import productsArr from "../data/products.json";

export const sidebarSlice = createSlice({
  name: "button",
  initialState: {
    button: productsArr.reduce((uniqueShops, item) => {
      if (!uniqueShops.find((shop) => shop.shop_name === item.shop_name)) {
        uniqueShops.push(item);
      }
      return uniqueShops;
    }, []),
  },
  reducers: {},
});

export const selectButton = (state) => state.button.button;
export default sidebarSlice.reducer;
