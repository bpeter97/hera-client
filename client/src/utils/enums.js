const taskStatus = {
  PENDING: "Pending",
  COMPLETED: "Completed",
  ACCEPTED: "Accepted"
};

const logiStatus = {
  PENDING: "Pending",
  ACCEPTED: "Accepted",
  COOKING: "Cooking",
  SHIPPING: "Shipping",
  DELIVERING: "Delivering",
  DELAYED: "Delayed",
  COMPLETED: "Completed"
};

const precedence = {
  LOW: "Low",
  MEDIUM: "Medium",
  HIGH: "High"
};

module.exports = { taskStatus, logiStatus, precedence };
