import { CommonLayout } from "../../helpers/components/common";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ErrorPage404 } from "../../views";
// import ItemPage from "../../views/organization/pages/ItemPage";

export default function MainRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CommonLayout />}>
          {/* Inventory module routes */}
        </Route>

        {/* Other routes */}
        <Route path="*" element={<ErrorPage404 />} />
      </Routes>
    </BrowserRouter>
  );
}
