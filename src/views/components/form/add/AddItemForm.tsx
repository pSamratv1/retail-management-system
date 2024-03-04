import React from "react";
import { useForm } from "react-hook-form";
import {
  AddItemFormValidation,
  brandProps,
  categoryProps,
  commonActions,
  maxStorageProps,
  nameProps,
  packageProps,
  productImageProps,
  productSpecificaitonProps,
  reorderPointProps,
  reorderQuantityProps,
  retailMarginProps,
  retailUnitProps,
  wholesaleMarginProps,
} from "../formProps.tsx";
import ItemForm from "../ItemForm.tsx";
import { yupResolver } from "@hookform/resolvers/yup";

interface FormData {
  item_name: string;
  item_category: string;
  item_brand: string;
  package: string;
  retail_unit: string;
  reorder_point: string;
  reorder_quantity: string | number;
  retail_unit_margin: string | number;
  wholesale_unit_margin: string | number;
  max_stage: string;
  product_specification: string;
  product_image: string;
}

const AddItemForm = () => {
  // OnSubmit handler
  const onSubmit = (data: FormData) => {
    console.log(data, "data");
    // // Ensure item_date is defined and has purchase_date and expiry_date properties
    // // Extract purchase_date and expiry_date from data
    // const {
    //   purchase_date,
    //   expiry_date,
    //   price,
    //   quantity,
    //   supplier_name,
    //   ...restData
    // } = data;
    // // Combine restData with itemDate
    // const updatedData = {
    //   ...restData,
    //   organization_id: 1,
    //   purchase_date: dayjs(purchase_date).format("YYYY-MM-DD"),
    //   expiry_date: dayjs(expiry_date).format("YYYY-MM-DD"),
    //   quantity: quantity,
    //   price: price,
    //   supplier: supplier_name,
    // };
    // dispatch(CreateInventoryThunk(updatedData));
    // // Now, updatedData contains the original data excluding
    reset();
  };
  // validations
  const validationSchema: any = AddItemFormValidation();

  // react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    getValues,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  // Form variables
  const form = {
    register,
    handleSubmit,
    errors,
    onSubmit,
    setValue,
    getValues,
  };
  const remaining = { actions: commonActions, form, css: {} };

  // Form Object for add
  const formObj: any = {
    item_name: {
      common: nameProps({}),

      ...remaining,
    },
    item_category: {
      common: categoryProps({}),
      actions: { ...remaining.actions },
      form: remaining.form,
      css: { ...remaining.css },
    },

    item_brand: {
      common: brandProps({}),
      actions: { ...remaining.actions },
      form: remaining.form,
      css: { ...remaining.css },
    },
    // ...remaining,
    package: {
      common: packageProps({}),
      form: remaining.form,
      css: {
        ...remaining.css,
      },
      actions: { ...remaining.actions },
      // ...remaining,
      // ...remaining,
    },

    retail_unit: {
      common: retailUnitProps({}),

      form: remaining.form,

      css: {
        ...remaining.css,
      },
      actions: { ...remaining.actions },
    },
    reorder_point: {
      common: reorderPointProps({}),
      form: remaining.form,

      css: {
        ...remaining.css,
      },
      actions: { ...remaining.actions },
    },

    reorder_quantity: {
      common: reorderQuantityProps({}),
      actions: { ...remaining.actions },
      form: remaining.form,
      css: { ...remaining.css },
    },
    retail_unit_margin: {
      common: retailMarginProps({}),
      actions: { ...remaining.actions },
      form: remaining.form,
      css: { ...remaining.css },
    },
    wholesale_unit_margin: {
      common: wholesaleMarginProps({}),
      actions: { ...remaining.actions },
      form: remaining.form,
      css: { ...remaining.css },
    },
    max_storage: {
      common: maxStorageProps({}),
      actions: { ...remaining.actions },
      form: remaining.form,
      css: { ...remaining.css },
    },
    product_specification: {
      common: productSpecificaitonProps({}),
      actions: { ...remaining.actions },
      form: remaining.form,
      css: { ...remaining.css },
    },
    product_image: {
      common: productImageProps({}),
      actions: { ...remaining.actions },
      form: remaining.form,
      css: { ...remaining.css },
    },
  };
  return (
    <div className="max-w-full h-full">
      <ItemForm formObj={formObj} form={form} />
    </div>
  );
};

export default AddItemForm;
