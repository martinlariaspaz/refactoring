import Order from "../../core/extract-variable/orderClass";

describe("classPrice", () => {
  it("should create a new class", () => {
    const order = new Order(5, 4);

    expect(order).toBeDefined();
  });

  it("should get quantity", () => {
    const order = new Order(5, 4);

    expect(order.getQuantity()).toStrictEqual(5);
  });

  it("should get itemPrice", () => {
    const order = new Order(5, 4);

    expect(order.getItemPrice()).toStrictEqual(4);
  });

  it("should get price", () => {
    const order = new Order(5, 4);

    expect(order.getPrice()).toStrictEqual(22);
  });

  it("should get price with discount", () => {
    const order = new Order(600, 4);

    expect(order.getPrice()).toStrictEqual(2480);
  });
});
