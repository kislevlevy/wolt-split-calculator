export interface Person {
  id: string;
  name: string;
  amount: number;
  isHost: boolean;
  finalAmount?: number;
}

export type BillingMode = "amount" | "percentage";

export interface CalculatorState {
  people: Person[];
  deliveryFee: number;
  serviceFee: number;
  billingMode: BillingMode;
}
