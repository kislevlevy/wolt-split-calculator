import { motion } from "framer-motion";
import { Form, InputGroup, Input, Label, Button, ButtonGroup } from "../styles";

interface FeesFormProps {
  deliveryFee: number;
  serviceFee: number;
  onDeliveryFeeChange: (fee: number) => void;
  onServiceFeeChange: (fee: number) => void;
  onCalculate: () => void;
  hasCalculated: boolean;
}

export const FeesForm = ({
  deliveryFee,
  serviceFee,
  onDeliveryFeeChange,
  onServiceFeeChange,
  onCalculate,
  hasCalculated,
}: FeesFormProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCalculate();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
    >
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <Label htmlFor="deliveryFee">Delivery Fee ₪</Label>
          <Input
            id="deliveryFee"
            type="number"
            value={deliveryFee || ""}
            onChange={(e) => onDeliveryFeeChange(Number(e.target.value) || 0)}
            placeholder="5.00"
            step="0.01"
            min="0"
            autoComplete="off"
          />
        </InputGroup>

        <InputGroup>
          <Label htmlFor="serviceFee">Service Fee ₪</Label>
          <Input
            id="serviceFee"
            type="number"
            value={serviceFee || ""}
            onChange={(e) => onServiceFeeChange(Number(e.target.value) || 0)}
            placeholder="3.50"
            step="0.01"
            min="0"
            autoComplete="off"
          />
        </InputGroup>

        <ButtonGroup>
          <Button type="submit">
            {hasCalculated ? "Recalculate" : "Calculate Split"}
          </Button>
        </ButtonGroup>
      </Form>
    </motion.div>
  );
};
