import { BrowserRouter, Routes, Route } from "react-router-dom";
import SweatshirtPage from "./pages/SweatshirtPage";
import ProductDetailPage from "./pages/ProductDetailPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SweatshirtPage />} />
        <Route path="/category/:category" element={<SweatshirtPage />} />
        <Route path="/product/:productSlug" element={<ProductDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;