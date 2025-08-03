import { Order } from "./types";

/**
 * Motivation:
 *   1. Provide to a debugger an easy hook.
 *   2. Add a name to an expression in my code.
 *
 * Mechanics
 *   1. Ensure that the expression you want to extract does not have side effects.
 *   2. Declare an immutable variable. Set it to a copy of the expression you want to name.
 *   3. Replace the original expression with the new variable.
 *   4. Test.
 *
 */

function price(order: Order) {
  const basePrice = order.quantity * order.itemPrice;
  const quantityDiscount =
    Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
  const shippingPrice = Math.min(basePrice * 0.1, 100);

  return basePrice - quantityDiscount + shippingPrice;
}

export default price;
