export enum OrderStatus {
  // order created, but ticket not connected
  Created = "created",
  // ticket is already reserved, or user cancelled the order,
  // or the order has timed out
  Cancelled = "cancelled",
  // order reserved, and awaiting payment
  AwaitingPayment = "awaiting:payment",
  // order is reserved and payment is complete
  Complete = "complete",
}
