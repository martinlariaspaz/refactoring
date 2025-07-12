import { rating } from "../../core/inline-function";
import Driver from "../../core/inline-function/types";

describe("rating", () => {
  it("Should return 2 if driver has more than 5 late deliveries", () => {
    const mockDriver: Driver = {
      numberOfLateDeliveries: 6,
    };

    expect(rating(mockDriver)).toStrictEqual(2);
  });

  it("Should return 1 if driver has 5 late deliveries", () => {
    const mockDriver: Driver = {
      numberOfLateDeliveries: 5,
    };

    expect(rating(mockDriver)).toStrictEqual(1);
  });

  it("Should return 1 if driver less than 5 late deliveries", () => {
    const mockDriver: Driver = {
      numberOfLateDeliveries: 2,
    };

    expect(rating(mockDriver)).toStrictEqual(1);
  });
});
