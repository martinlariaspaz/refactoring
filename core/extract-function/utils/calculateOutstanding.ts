import { Invoice } from "../types";

const calculateOutstanding = (invoice: Invoice): number => {
  let result: number = 0;

  for (const o of invoice.orders) {
    result += o.amount;
  }

  return result;
};

export default calculateOutstanding;
