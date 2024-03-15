import React, { useContext, useState } from "react";
import Table from "../components/Layouts/Table";
import { ProductContext } from "../context/product-context";
import Button from "./Layouts/Button";
import EditProduct from "./EditProduct";

const PRODUCT_TABLE_HEADERS = {
  id: "Id",
  image: "Image",
  name: "Name",
  category: "Category",
  price: "Price",
  quantity: "Quantity",
  quickActions: "Quick Actions",
};

const ProductActions = (props) => {
  const [isEditProductVisible, setIsEditProductVisible] = useState(false);
  const productCtx = useContext(ProductContext);

  const showEditProduct = () => {
    setIsEditProductVisible(true);
  };

  const hideEditProduct = () => {
    setIsEditProductVisible(false);
  };

  return (
    <div className="flex gap-2">
      {isEditProductVisible && (
        <EditProduct onClose={hideEditProduct} productId={props.id} />
      )}
      <Button
        className="bg-orange-100 text-orange-700"
        onClick={showEditProduct}
      >
        Edit
      </Button>
      <Button
        className="bg-red-100 text-red-700"
        onClick={() => productCtx.removeProductById(props.id)}
      >
        Delete
      </Button>
    </div>
  );
};

const ProductTable = () => {
  const productCtx = useContext(ProductContext);

  return (
    <Table
      headers={PRODUCT_TABLE_HEADERS}
      data={productCtx.products}
      QuickActions={ProductActions}
    />
  );
};

export default ProductTable;
