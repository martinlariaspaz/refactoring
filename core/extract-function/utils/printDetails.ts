import { Invoice } from "../types";

const printDetails = (invoice: Invoice, outstanding: number) => {
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
  console.log(`due: ${invoice?.dueDate?.toLocaleDateString?.()}`);
};

export default printDetails;
