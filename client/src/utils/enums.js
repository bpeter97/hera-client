const ENV = "development";

const taskStatus = {
  PENDING: "Pending",
  COMPLETED: "Completed",
  ACCEPTED: "Accepted"
};

const logiStatus = {
  PENDING: "Pending",
  COOKING: "Cooking",
  SHIPPING: "Shipping",
  DELIVERING: "Delivering",
  DELAYED: "Delayed",
  COMPLETED: "Completed"
};

const precedence = {
  LOW: "Low",
  MEDIUM: "Medium",
  HIGH: "High",
  CRITICAL: "Critical"
};

module.exports = { ENV, taskStatus, logiStatus, precedence };
