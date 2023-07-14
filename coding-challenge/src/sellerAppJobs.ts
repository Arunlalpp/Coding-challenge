export default {
  invokingJobs: [
    "ORDER_ITEMS_API",
    "SALES_SKU_TASK",
    "ORDERS_BY_UPDATED_DATE_API",
    "SALES_ORDER_API",
  ],
  orderByUpdatedDateAPIjobs: ["SALES_ORDER_API", "SALES_SKU_TASK"],
  orderItemAPIOrSalesOrderAPIJobs: ["SALES_SKU_TASK"],
  orderAPI: "ORDERS_API",
  orderByUpdatedDateAPI: "ORDERS_BY_UPDATED_DATE_API",
  salesOrderAPI: "SALES_ORDER_API",
  orderItemAPI: "ORDER_ITEMS_API",
};
