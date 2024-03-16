import React, { useContext, useState } from "react";
import { ProductContext } from "../context/product-context";
import Button from "./Layouts/Button";

const ProductForm = (props) => {
  const [success, setSuccess] = useState(false);
  const productCtx = useContext(ProductContext);

  const addNewProduct = (form) => {
    const formData = new FormData(form);

    const newProduct = {};
    for (const [key, value] of formData.entries()) {
      newProduct[key] = value;
    }
    const productId = productCtx.products.length + 1;
    newProduct["id"] = productId;

    productCtx.addProduct(newProduct);
    setSuccess(true);
  };

  const editProduct = (form) => {
    console.log("edit product");
    const formData = new FormData(form);

    const updatedProduct = {};
    for (const [key, value] of formData.entries()) {
      updatedProduct[key] = value;
    }
    updatedProduct["id"] = props.productId;

    productCtx.editProductById(props.productId, updatedProduct);
    setSuccess(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    if (props.productId) editProduct(form);
    else addNewProduct(form);

    setTimeout(() => {
      props.onClose();
    }, 2000);

    return () => {
      setSuccess(false);
    };
  };

  let successMessage = "New product added successfully!";
  if (props.productId) successMessage = "Product details updated successfully!";

  return (
    <form className="my-4" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="name" className="block mb-1">
          Name
        </label>
        <input
          id="name"
          name="name"
          placeholder="Enter name.."
          className="border rounded-md p-2 w-full"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="image" className="block mb-1">
          Image Url
        </label>
        <input
          id="image"
          name="image"
          placeholder="Enter image url.."
          className="border rounded-md p-2 w-full"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="category" className="block mb-1">
          Category
        </label>
        <input
          id="category"
          name="category"
          placeholder="Enter category.."
          className="border rounded-md p-2 w-full"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="price" className="block mb-1">
          Price
        </label>
        <input
          id="price"
          name="price"
          type="number"
          step="any"
          placeholder="Enter price.."
          className="border rounded-md p-2 w-full"
          required
        />
      </div>

      <div className="mb-8">
        <label htmlFor="quantity" className="block mb-1">
          Quantity
        </label>
        <input
          id="quantity"
          name="quantity"
          type="number"
          placeholder="Enter quantity.."
          className="border rounded-md p-2 w-full"
          required
        />
      </div>

      {success && (
        <div className="bg-green-100 text-green-700 my-4 py-2 px-4 rounded-md">
          {successMessage}
        </div>
      )}
      <div className="flex gap-2 justify-end">
        <Button
          className="bg-transparent text-indigo-700 border-indigo-700 border-2"
          onClick={props.onClose}
        >
          Cancel
        </Button>
        <Button type="submit" className="text-white hover:bg-indigo-800">Confirm</Button>
      </div>
    </form>
  );
};

export default ProductForm;
