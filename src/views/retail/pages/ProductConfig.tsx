import { useMemo } from "react";
import PageLayout from "../../../helpers/components/common/layouts/PageLayout.tsx";
import {
  ITEM_TABLE_DATA,
  ITEM_TABLE_MEMO,
} from "../../../utils/constants/tableConstant.tsx";
import TableActions from "../../../helpers/components/common/table/TableActions.tsx";
import ViewItemTable from "../../components/tables/ViewItemTable.tsx";
import AddItemForm from "../../../views/components/form/add/AddItemForm.tsx";
import Label from "src/stories/Label.tsx";
import { useAppSelector } from "../../../helpers/hooks/useStoreHooks.ts";
import { RootState } from "src/redux/store.ts";
import { RetailSlice } from "src/redux/retail-module/retailSlice.tsx";
import { useSelector } from "react-redux";

const ProductConfig = () => {
  const { isFlag } = useSelector(
    (state: RootState) => state.Retail.retail.inventory.add
  );
  // Memo for column and data
  const column = useMemo(() => ITEM_TABLE_MEMO, []);
  const columns = column[0].columns;
  const data = useMemo(() => ITEM_TABLE_DATA, []);

  // Routes for actions
  const getRoutes = (id: number) => ({
    handleViewAction: () => {},
    handleEditAction: () => {},
    handleDeleteAction: () => {},
  });
  const datas = data?.map((item: any) => ({
    ...item,
    action: <TableActions {...getRoutes(item.id)} />,
  }));

  // console.log(datas, "anotherData");
  const viewItemTableProps = { columns, data: datas };

  return (
    <div className="flex flex-col h-full w-full px-6 py-3 gap-4 scrollbar scrollbar-mt-30px overflow-y-scroll">
      <PageLayout />
      {/* <ViewItemTable {...viewItemTableProps} /> */}
      {!isFlag ? <ViewItemTable {...viewItemTableProps} /> : <AddItemForm />}
    </div>
  );
};

export default ProductConfig;
