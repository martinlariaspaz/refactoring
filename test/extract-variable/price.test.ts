import { Order, price } from "../../core/extract-variable";

describe("price", () => {
  it("should calculate price the with 10% more", () => {
    const order: Order = {
      itemPrice: 100,
      quantity: 4,
    };

    expect(price(order)).toStrictEqual(440);
  });

  it("should calculate the price with 100 more if 10% of the total amount is more than 100", () => {
    const order: Order = {
      itemPrice: 500,
      quantity: 4,
    };

    expect(price(order)).toStrictEqual(2100);
  });

  it("should calculate the price with a 5% discount on the surplus of 500 units.", () => {
    const order: Order = {
      itemPrice: 5,
      quantity: 600,
    };

    expect(price(order)).toStrictEqual(3075);
  });
});
