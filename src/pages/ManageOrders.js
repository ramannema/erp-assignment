import OrderTable from "../components/OrderTable";
import OrderProvider from "../context/order-context";

const ManageOrders = () => {
  return (
    <OrderProvider>
      <section className="px-10">
        <div className="max-w-7xl m-auto py-10">
          <div className="border rounded-md w-full max-w-sm">
            <input placeholder="Search order.." className="p-2 w-full" />
          </div>

          <OrderTable />
        </div>
      </section>
    </OrderProvider>
  );
};

export default ManageOrders;
