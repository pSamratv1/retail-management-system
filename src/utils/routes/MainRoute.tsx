import CommonLayout from "../../helpers/components/common/layouts/CommonLayout.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ErrorPage404 } from "../../views/index.ts";
import ProductConfig from "../../views/retail/pages/ProductConfig.tsx";
// import ItemPage from "../../views/organization/pages/ItemPage";

export function MainRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CommonLayout type="small" />}>
          {/* Retail module routes */}
          <Route path="/" element={<ProductConfig />} />
        </Route>

        {/* Other routes */}
        <Route path="*" element={<ErrorPage404 />} />
      </Routes>
    </BrowserRouter>
  );
}
