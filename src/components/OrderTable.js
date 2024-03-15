import { useContext } from "react";
import Table from "./Layouts/Table";
import { OrderContext } from "../context/order-context";

const ORDER_TABLE_HEADERS = {
  orderId: "Order Id",
  customerName: "Customer Name",
  orderDate: "Order Date",
  status: "Status",
};

const OrderTable = () => {
  const orderCtx = useContext(OrderContext);

  return <Table headers={ORDER_TABLE_HEADERS} data={orderCtx.orders} />;
};

export default OrderTable;
