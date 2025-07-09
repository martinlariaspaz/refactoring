import { Invoice } from "../types";

const recordDueDate = (invoice: Invoice) => {
  const today = new Date();

  invoice.dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  );
};

export default recordDueDate;
