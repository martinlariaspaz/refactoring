import { Invoice, printOwing } from "../../core/extract-function";
import { beforeEach } from "node:test";

describe("printOwingInvoice", () => {
  const mockInvoice: Invoice = {
    customer: "Test User",
    dueDate: new Date("22/04/1992"),
    orders: [
      {
        amount: 10,
      },
      {
        amount: 32,
      },
    ],
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should print banner first", () => {
    const logSpy = jest.spyOn(console, "log").mockImplementation(() => {});

    printOwing(mockInvoice);

    expect(logSpy).toHaveBeenCalledWith("***********************");
    expect(logSpy).toHaveBeenCalledWith("**** Customer Owes ****");
    expect(logSpy).toHaveBeenCalledWith("***********************");
  });

  it("should print customer name", () => {
    const logSpy = jest.spyOn(console, "log").mockImplementation(() => {});

    printOwing(mockInvoice);

    expect(logSpy).toHaveBeenCalledWith("name: Test User");
  });

  it("should print total amount", () => {
    const logSpy = jest.spyOn(console, "log").mockImplementation(() => {});

    printOwing(mockInvoice);

    expect(logSpy).toHaveBeenCalledWith("amount: 42");
  });

  it("should print date", () => {
    const logSpy = jest.spyOn(console, "log").mockImplementation(() => {});
    const fixedDate = new Date("1992-04-22T00:00:00.000");
    jest.spyOn(global, "Date").mockImplementation(() => fixedDate);
    printOwing(mockInvoice);

    expect(logSpy).toHaveBeenCalledWith("due: 22/4/1992");
  });
});
