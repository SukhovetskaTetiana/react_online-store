import { createSlice } from "@reduxjs/toolkit";
import productsArr from "../data/products.json";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: productsArr,
  },
  reducers: {
    //**фільтрує початковий стан масиву по "зачищеному" "id" та
    // формує новий масив з унікальними "shop_name"* => для виводу кнопок в Sidebar/

    filterProducts: (state, data) => {
      let articul = data.payload;

      let replaceArticul = articul.replace(/[0-9_]/g, "");
      let filteredArr = [];
      for (const product of productsArr) {
        if (product.id.indexOf(replaceArticul) !== -1) {
          filteredArr.push(product);
        }
      }
      return {
        ...state,
        products: filteredArr,
      };
    },
    updateProducts: (state) => {
      return {
        ...state,
        products: productsArr,
      };
    },
  },
});

export const { filterProducts, updateProducts } = productsSlice.actions;
export const selectProducts = (state) => state.products.products;
export default productsSlice.reducer;
