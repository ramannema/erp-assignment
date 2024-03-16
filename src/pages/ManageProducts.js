import { useState } from "react";
import ProductProvider from "../context/product-context";
import Button from "../components/Layouts/Button";
import AddProduct from "../components/AddProduct";
import ProductTable from "../components/ProductTable";

const ManageProducts = () => {
  const [isAddProductVisible, setIsAddProductVisible] = useState(false);

  const showAddProduct = () => {
    setIsAddProductVisible(true);
  };

  const hideAddProduct = () => {
    setIsAddProductVisible(false);
  };

  return (
    <ProductProvider>
      <section className="px-10">
        {isAddProductVisible && <AddProduct onClose={hideAddProduct} />}
        <div className="max-w-7xl m-auto py-10">
          <div className="flex justify-between gap-2">
            <div className="border rounded-md w-full max-w-sm">
              <input placeholder="Search product.." className="p-2 w-full" />
            </div>
            <div className="cta">
              <Button onClick={showAddProduct} className="text-white">Add Product</Button>
            </div>
          </div>
          <ProductTable />
        </div>
      </section>
    </ProductProvider>
  );
};

export default ManageProducts;
