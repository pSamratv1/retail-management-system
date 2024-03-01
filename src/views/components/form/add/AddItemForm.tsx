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
    // reset();
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

      ...remaining,
    },

    item_brand: {
      common: brandProps({}),

      form: remaining.form,
    },
    // ...remaining,
    package: {
      common: packageProps({}),
      form: remaining.form,

      css: {
        divCss:
          "min-w-[140px] col-span-7 relative h-[75px] pt-1 flex flex-col gap-1 text-[11px] text-dark-100 w-11/12 min-w-[4.6rem] px-2 sm:min-w-full md:min-w-full",
        inputCss:
          "bg-input-100 rounded-md relative h-[2.5rem] flex px-2 gap-1 text-[11px] text-dark-100 justify-items-center w-[6rem] md:px-[6px]",
      },
      actions: { ...remaining.actions },
      // ...remaining,
      // ...remaining,
    },

    retail_unit: {
      common: retailUnitProps({}),

      form: remaining.form,

      css: {
        divCss:
          "min-w-[45px] col-span-4 relative h-[75px] pt-1 flex flex-col gap-1 text-[11px] text-dark-100 w-11/12 w-full px-[3.2px] sm:min-w-[3rem] sm:px-[6px] md:px-[8px] ",
        inputCss:
          "bg-input-100 rounded-md h-[2.5rem] flex gap-1 text-[11px] text-dark-100 justify-items-center  w-[4.6rem] ",
      },
      actions: { ...remaining.actions },
    },
    reorder_point: {
      common: reorderPointProps({}),
      form: remaining.form,

      css: {
        divCss:
          "min-w-[140px] col-span-8 relative h-[75px] pt-1 flex flex-col gap-1 text-[11px] text-dark-100 w-11/12 w-full px-2 sm:min-w-full md:min-w-full",
        inputCss:
          "bg-input-100 rounded-md relative h-[2.5rem] flex px-2 gap-1 text-[11px] text-dark-100 justify-items-center w-[6rem] md:px-[6px]",
      },
      actions: { ...remaining.actions },
    },

    reorder_quantity: {
      common: reorderQuantityProps({}),
      ...remaining,
    },
    retail_unit_margin: {
      common: retailMarginProps({}),
      ...remaining,
    },
    wholesale_unit_margin: {
      common: wholesaleMarginProps({}),

      ...remaining,
    },
    max_storage: {
      common: maxStorageProps({}),

      ...remaining,
    },
    product_specification: {
      common: productSpecificaitonProps({}),

      ...remaining,
    },
    product_image: {
      common: productImageProps({}),

      ...remaining,
    },
  };
  return <ItemForm formObj={formObj} form={form} />;
};

export default AddItemForm;
