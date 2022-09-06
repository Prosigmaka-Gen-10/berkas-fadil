import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import BestSeller from "./parts/category/BestSeller";
import NewProduct from "./parts/category/NewProduct";
import ProductDetail from "./parts/produckdetail/ProductDetail";
import Description from "./parts/produckdetail/Description";
import BestSellerMingguan from "./parts/category/BestSeller/BestSellerMingguan";

function App() {
  return (
    <div className="p-32">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="product" element={<Product />}>
            <Route index element={<NewProduct />} />
            <Route path="bestseller" element={<BestSeller />}>
              <Route path="bestsellermingguan" element={<BestSellerMingguan />}>
                <Route path="description" element={<Description />} />
                <Route
                  path="productdetail/:productname"
                  element={<ProductDetail />}
                />
              </Route>
            </Route>
          </Route>
          <Route path="contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
