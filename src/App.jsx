import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/pages/Home";
import { CartProvider } from "./context/CartContext";
import { Suspense, lazy } from "react";
import PageLoader from "./component/Ui/PageLoader";
// Lazy loading
const ProductDetails = lazy(() => import("./component/pages/ProductDetails"));

const App = () => {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products/:id" element={<ProductDetails />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </CartProvider>
    </>
  );
};

export default App;

