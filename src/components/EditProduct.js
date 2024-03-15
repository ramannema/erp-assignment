import React from "react";
import Modal from "./Layouts/Modal";
import Button from "./Layouts/Button";
import ProductForm from "./ProductForm";

const EditProduct = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <div className="flex gap-2 justify-between items-center pb-4 border-b-2">
        <h2 className="font-semibold text-2xl text-indigo-700">Edit Product</h2>
        <Button onClick={props.onClose} className="bg-transparent text-black">
          X
        </Button>
      </div>
      <ProductForm onClose={props.onClose} productId={props.productId} />
    </Modal>
  );
};

export default EditProduct;
