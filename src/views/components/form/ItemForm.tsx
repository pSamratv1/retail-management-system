import SelectInput from "../../../helpers/components/common/forms/SelectInput.tsx";
import TextInput from "../../../helpers/components/common/forms/TextInput.tsx";

const ItemForm = ({ formObj, form }: any) => {
  // Props

  // Destucuring Props
  const { handleSubmit, onSubmit } = form;

  // Redux

  // Redux variables

  // Validation
  // Hooks
  // Methods
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full flex flex-col gap-4 "
    >
      <div className="grid grid-cols-12 sm:gap-4">
        <div className="col-span-12 min-w-[160px] justify-items-start">
          <TextInput {...formObj.item_name} />
        </div>
      </div>
      <div className="grid grid-cols-12  sm:gap-4">
        <div className="col-span-6 min-w-[160px] justify-items-start">
          <SelectInput {...formObj.item_category} />
        </div>
        <div className="col-span-6  min-w-[160px] justify-items-start">
          <SelectInput {...formObj.item_brand} />
        </div>
      </div>
      <div className="grid grid-cols-12  sm:gap-4">
        <div className="col-span-6 min-w-[160px] justify-items-start">
          <SelectInput {...formObj.package} />
        </div>
        <div className="col-span-6  min-w-[160px] justify-items-start">
          <SelectInput {...formObj.retail_unit} />
        </div>
      </div>
      <div className="grid grid-cols-12  sm:gap-4">
        <div className="col-span-6 min-w-[160px] justify-items-start">
          <TextInput {...formObj.reorder_point} />
        </div>
        <div className="col-span-6  min-w-[160px] justify-items-start">
          <TextInput {...formObj.reorder_quantity} />
        </div>
      </div>
      <div className="grid grid-cols-12  sm:gap-4">
        <div className="col-span-6 min-w-[160px] justify-items-start">
          <TextInput {...formObj.retail_unit_margin} />
        </div>
        <div className="col-span-6  min-w-[160px] justify-items-start">
          <TextInput {...formObj.wholesale_unit_margin} />
        </div>
      </div>
      <div className="grid grid-cols-12  sm:gap-4">
        <div className="col-span-8 min-w-[160px] justify-items-start">
          <TextInput {...formObj.max_storage} />
        </div>
      </div>
      <div className="grid grid-cols-12  sm:gap-4">
        <div className="col-span-12 min-w-[160px] justify-items-start">
          <TextInput {...formObj.product_specification} />
        </div>
      </div>
      <div className="grid grid-cols-12  sm:gap-4">
        <div className="col-span-12 min-w-[160px] justify-items-start">
          <TextInput {...formObj.product_image} />
        </div>
      </div>

      <div className="flex mt-4 w-full justify-start">
        <button>Addme</button>
      </div>
    </form>
  );
};

export default ItemForm;
