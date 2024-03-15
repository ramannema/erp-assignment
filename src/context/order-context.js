import React, { createContext, useState } from "react";
import initialOrders from "../data/orders.json";

// Create a context object
export const OrderContext = createContext();

// Create a context provider component
const OrderProvider = ({ children }) => {
  // State to hold the list of orders
  const [orders, setOrders] = useState(initialOrders);

  // Function to update order status by ID
  const updateOrderStatusById = (orderId, newStatus) => {
    const updatedOrders = orders.map((order) =>
      order.orderId === orderId ? { ...order, status: newStatus } : order
    );
    setOrders(updatedOrders);
  };

  return (
    // Provide the order state and function as value to the context
    <OrderContext.Provider
      value={{
        orders,
        updateOrderStatusById,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export default OrderProvider;
