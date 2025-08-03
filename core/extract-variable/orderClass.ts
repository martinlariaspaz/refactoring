/**
 * The benefits of work with objects is that they give you reasonable amount
 * of context for logic to share other bits of logic and data
 */

class Order {
  private quantity: number;
  private itemPrice: number;

  constructor(quantity: number, itemPrice: number) {
    this.itemPrice = itemPrice;
    this.quantity = quantity;
  }

  getPrice() {
    return (
      this.quantity * this.itemPrice -
      Math.max(0, this.quantity - 500) * this.itemPrice * 0.05 +
      Math.min(this.quantity * this.itemPrice * 0.1, 100)
    );
  }

  public getQuantity() {
    return this.quantity;
  }

  public getItemPrice() {
    return this.itemPrice;
  }
}

export default Order;
