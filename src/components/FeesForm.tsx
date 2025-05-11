import { motion } from "framer-motion";
import { Form, InputGroup, Label, Input, Button } from "../styles";

interface FeesFormProps {
  deliveryFee: number;
  serviceFee: number;
  onDeliveryFeeChange: (fee: number) => void;
  onServiceFeeChange: (fee: number) => void;
  onCalculate: () => void;
}

export const FeesForm = ({
  deliveryFee,
  serviceFee,
  onDeliveryFeeChange,
  onServiceFeeChange,
  onCalculate,
}: FeesFormProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
    >
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          onCalculate();
        }}
        style={{ display: "flex", alignItems: "flex-end", gap: "12px" }}
      >
        <InputGroup style={{ flex: "1" }}>
          <Label htmlFor="deliveryFee">Delivery Fee</Label>
          <Input
            id="deliveryFee"
            type="number"
            value={deliveryFee || ""}
            onChange={(e) =>
              onDeliveryFeeChange(parseFloat(e.target.value) || 0)
            }
            placeholder="0.00"
            step="0.01"
            min="0"
          />
        </InputGroup>

        <InputGroup style={{ flex: "1" }}>
          <Label htmlFor="serviceFee">Service Fee</Label>
          <Input
            id="serviceFee"
            type="number"
            value={serviceFee || ""}
            onChange={(e) =>
              onServiceFeeChange(parseFloat(e.target.value) || 0)
            }
            placeholder="0.00"
            step="0.01"
            min="0"
          />
        </InputGroup>

        <div
          style={{ display: "flex", alignItems: "center", marginBottom: "4px" }}
        >
          <Button type="submit">Calculate</Button>
        </div>
      </Form>
    </motion.div>
  );
};
