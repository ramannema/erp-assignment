import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  BarElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import Tile from "../components/Tile";
import Card from "../components/Layouts/Card";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ORDER_LINECHART_OPTIONS = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },
    title: {
      display: true,
      text: "Sales in last 2 years",
    },
  },
};

const PRODUCT_LINECHART_OPTIONS = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Products sold in last 2 years",
    },
  },
};

const PRODUCT_METRICES = [
  {
    key: "totalProducts",
    title: "Total Number of Products",
    value: 1200,
  },
  {
    key: "averagePrice",
    title: "Average Price",
    value: 150.0,
  },
  {
    key: "totalStock",
    title: "Total Stock",
    value: 5000,
  },
  {
    key: "mostPopularCategory",
    title: "Most Popular Category",
    value: "Electronics",
  },
];

const ORDER_METRICS = [
  {
    key: "totalOrders",
    title: "Total Number of Orders",
    value: 5000,
  },
  {
    key: "averageOrderValue",
    title: "Average Order Value",
    value: 100.5,
  },
  {
    key: "totalRevenue",
    title: "Total Revenue",
    value: 502500.0,
  },
  {
    key: "mostCommonOrderStatus",
    title: "Most Common Order Status",
    value: "Completed",
  },
];

const labels = [
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
  "January",
  "February",
  "March",
];

export const PRODUCT_DATA = {
  labels,
  datasets: [
    {
      label: "Products sold in FY-22",
      data: labels.map(() => faker.datatype.number({ min: 50, max: 500 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Products sold in FY-23",
      data: labels.map(() => faker.datatype.number({ min: 100, max: 1000 })),
      borderColor: "rgb(75, 192, 192)",
      backgroundColor: "rgba(75, 192, 192, 0.5)",
    },
  ],
};

export const SALES_DATA = {
  labels,
  datasets: [
    {
      label: "Sales in FY-22",
      data: labels.map(() =>
        faker.datatype.number({ min: 100000, max: 250000 })
      ),
      borderColor: "rgb(255, 205, 86)",
      backgroundColor: "rgba(255, 205, 86, 0.5)",
    },
    {
      label: "Sales in FY-23",
      data: labels.map(() =>
        faker.datatype.number({ min: 200000, max: 500000 })
      ),
      borderColor: "rgb(153, 102, 255)",
      backgroundColor: "rgba(153, 102, 255, 0.5)",
    },
  ],
};

const Dashboard = () => {
  return (
    <section className="px-10">
      <div className="max-w-7xl m-auto py-10">
        <div className="product-metrics mb-10">
          <h2 className="text-2xl font-semibold mb-5">
            Product Inventory and Sales Insights
          </h2>
          <div className="flex gap-10 mb-10 flex-col md:flex-row">
            {PRODUCT_METRICES.map((product) => (
              <Tile
                key={product.key}
                title={product.title}
                value={product.value}
              />
            ))}
          </div>
          <div className="flex gap-10 flex-col lg:flex-row">
            <Card className="lg:max-w-[50%] max-w-full min-h-full">
              <Line data={PRODUCT_DATA} options={PRODUCT_LINECHART_OPTIONS} />
            </Card>
            <Card className="lg:max-w-[50%] max-w-full min-h-full">
              <Bar data={PRODUCT_DATA} options={PRODUCT_LINECHART_OPTIONS} />
            </Card>
          </div>
        </div>
        <div className="order-metrics">
          <h2 className="text-2xl font-semibold mb-5">
            Order Performance Overview
          </h2>
          <div className="flex gap-10 mb-10 flex-col md:flex-row">
            {ORDER_METRICS.map((order) => (
              <Tile key={order.key} title={order.title} value={order.value} />
            ))}
          </div>
          <div className="flex gap-10 flex-col lg:flex-row">
            <Card className="lg:max-w-[50%] max-w-full min-h-full">
              <Bar data={SALES_DATA} options={ORDER_LINECHART_OPTIONS} />
            </Card>
            <Card className="lg:max-w-[50%] max-w-full min-h-full">
              <Line data={SALES_DATA} options={ORDER_LINECHART_OPTIONS} />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
