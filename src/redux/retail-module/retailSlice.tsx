import { createSlice } from "@reduxjs/toolkit";
import { InitialServiceData, RetailSliceSchema } from "./retail";

export const initialState: RetailSliceSchema = {
  platform: {
    inventory: {
      add_ItemForm: {
        input: {
          item_name: "",
          item_category: "",
          item_brand: "",
          package: "",
          retail_unit: "",
          reorder_point: "",
          reorder_quantity: "",
          retil_unit_margin: "",
          wholesale_unit_margin: "",
          max_storage: "",
          product_specification: "",
          product_image: "",
        },
        details: [],
      },
    },
  },
  retail: {
    inventory: InitialServiceData,
  },
};

export const RetailSlice = createSlice({
  name: "retail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder;
  },
});

export const {} = RetailSlice.actions;
export default RetailSlice.reducer;
