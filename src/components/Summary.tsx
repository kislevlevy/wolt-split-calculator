import { motion } from "framer-motion";
import { Card, SectionTitle, TotalAmount } from "../styles";
import type { Person } from "../types";
import { formatCurrency } from "../utils";

interface SummaryProps {
  people: Person[];
  deliveryFee: number;
  serviceFee: number;
}

export const Summary = ({ people, deliveryFee, serviceFee }: SummaryProps) => {
  const orderTotal = people.reduce((sum, person) => sum + person.amount, 0);
  const grandTotal = orderTotal + deliveryFee + serviceFee;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
    >
      <Card>
        <SectionTitle>Summary</SectionTitle>

        <div>
          <p>Total Orders: ₪{formatCurrency(orderTotal)}</p>
          <p>Delivery Fee: ₪{formatCurrency(deliveryFee)}</p>
          <p>Service Fee: ₪{formatCurrency(serviceFee)}</p>
        </div>

        <TotalAmount>Total: ₪{formatCurrency(grandTotal)}</TotalAmount>
      </Card>
    </motion.div>
  );
};
