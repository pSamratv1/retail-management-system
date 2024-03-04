import { useMemo } from "react";
import PageLayout from "../../../helpers/components/common/layouts/PageLayout.tsx";
import {
  ITEM_TABLE_DATA,
  ITEM_TABLE_MEMO,
} from "../../../utils/constants/tableConstant.tsx";
import TableActions from "../../../helpers/components/common/table/TableActions.tsx";
import ViewItemTable from "../../components/tables/ViewItemTable.tsx";
import AddItemForm from "../../../views/components/form/add/AddItemForm.tsx";

const ProductConfig = () => {
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
    <div className="flex flex-col h-full w-full px-6 py-3 gap-4 ">
      <PageLayout />
      {/* <ViewItemTable {...viewItemTableProps} /> */}
      <AddItemForm />
    </div>
  );
};

export default ProductConfig;
