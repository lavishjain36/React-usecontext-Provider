import Product from "./components/Product";
import ProductDetails from "./components/ProductDetails";

import { ProductProvider } from "./context/ProductContext";

function App() {
  
  return (
    <ProductProvider>
          <h1>Product Management</h1>
          <Product/>
          <ProductDetails/>
    </ProductProvider>
  
  )
}

export default App
