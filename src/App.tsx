import { BrowserRouter, Routes, Route } from "react-router-dom";
import SweatshirtPage from "./pages/SweatshirtPage";
import ProductDetailPage from "./pages/ProductDetailPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SweatshirtPage />} />
        <Route path="/category/sweatshirt" element={<SweatshirtPage />} />
        <Route path="/product/brooklyn-nyc-sweatshirt" element={<ProductDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
