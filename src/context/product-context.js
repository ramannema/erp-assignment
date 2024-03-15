import React, { createContext, useState } from "react";
import initialProducts from "../data/products.json";

// Create a context object
export const ProductContext = createContext();

// Create a context provider component
const ProductProvider = ({ children }) => {
  // State to hold the list of products
  const [products, setProducts] = useState(initialProducts);

  // Function to add a new product
  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  // Function to edit a product by ID
  const editProductById = (id, updatedProduct) => {
    const updatedProducts = products.map((product) =>
      product.id === id ? updatedProduct : product
    );
    setProducts(updatedProducts);
  };

  // Function to remove a product by ID
  const removeProductById = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  // Function to get a product by ID
  const getProductById = (id) => {
    return products.find((product) => product.id === id);
  };

  return (
    // Provide the product state and functions as value to the context
    <ProductContext.Provider
      value={{
        products,
        addProduct,
        editProductById,
        removeProductById,
        getProductById,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
