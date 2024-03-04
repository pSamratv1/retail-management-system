/* eslint-disable @typescript-eslint/no-unused-vars */
// import { useEffect } from "react";
// import { Outlet } from "react-router-dom";
// import {
//   GetAllInventoryServicesThunk,
//   GetAllTrackThunk,
// } from "../../../../../../Inventory_module/src/redux-app/inventory-module/InventorySlice";
// import { useAppDispatch, useAppSelector } from "../../../hooks/useStoreHooks";
// import { RootState } from "../../../../../../Inventory_module/src/redux-app/store";
import { Sidebar } from "./Sidebar.tsx";
import Header from "./Header.tsx";
// import ProductConfig from "../../../../views/retail/pages/ProductConfig.tsx";
import AddItemForm from "../../../../views/components/form/add/AddItemForm.tsx";
import { Outlet } from "react-router-dom";

export default function CommonLayout() {
  // const dispatch = useAppDispatch();

  // const { isSuccess } = useAppSelector(
  //   (state: RootState) => state.Inventory.inventory.item.add.response
  // );

  // Fetch data when the component mounts
  // useEffect(() => {
  //   dispatch(GetAllInventoryServicesThunk());
  // }, [dispatch, isSuccess]);
  // IsSuccess flag for the api fetching
  // const { isSuccess: trackViewSuccess } = useAppSelector(
  //   (state: RootState) => state.Inventory.inventory.track.view.response
  // );
  // IsSuccess flag for the api fetching
  // const { isSuccess: deleteIsSuccess } = useAppSelector(
  //   (state: RootState) => state.Inventory.inventory.item.delete.response
  // );
  // Fetch data when the component mounts
  // useEffect(() => {
  //   dispatch(GetAllTrackThunk(1));
  //   dispatch(GetAllInventoryServicesThunk());
  // }, [dispatch, trackViewSuccess, deleteIsSuccess]);

  return (
    // Set the min width of the uoter most div to 25rem
    // <div className="auth-layout h-screen w-full md:w-full  grid grid-rows-12 grid-cols-12 text-xs ">
    //   <header className="items-end col-span-8 w-full h-[52px] border-b-[1px] border-primary-100 px-4 flex justify-between items-center  gap-2">
    //     <Header />
    //   </header>
    //   <div className="row-span-1 col-span-12 flex min-h-[calc(100vh-58px)] w-full">
    //     <Sidebar />
    //     <main className=" w-full h-full ">
    //       <Outlet />
    //       {/* <h1 className="h1">hi</h1> */}
    //     </main>
    //   </div>
    // </div>
    <div className="w-full h-screen grid grid-rows-12 grid-cols-5">
      <div className="h-full row-span-12 hidden md:block md:col-span-1 ">
        <Sidebar />
      </div>
      <div className="h-screen col-span-5 md:col-span-4 ">
        <Header />
        <div className="h-[calc(100vh-56px)]">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
