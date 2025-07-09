import { Invoice } from "./types";
import {
  calculateOutstanding,
  printBanner,
  printDetails,
  recordDueDate,
} from "./utils";

function printOwing(invoice: Invoice) {
  const outstanding = calculateOutstanding(invoice);

  printBanner();
  recordDueDate(invoice);
  printDetails(invoice, outstanding);
}

export default printOwing;
