export type Orders = {
  amount: number;
};

export type Invoice = {
  orders: Orders[];
  customer: string;
  dueDate?: Date;
};
