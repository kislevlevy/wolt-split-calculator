import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Button,
  Form,
  InputGroup,
  Input,
  Label,
  ModeToggle,
  ToggleLabel,
} from "../styles";
import type { Person, BillingMode } from "../types";

interface PersonFormProps {
  onAddPerson: (person: Omit<Person, "id">) => void;
  peopleCount: number;
  billingMode: BillingMode;
  onBillingModeChange: (mode: BillingMode) => void;
}

export const PersonForm = ({
  onAddPerson,
  peopleCount,
  billingMode,
  onBillingModeChange,
}: PersonFormProps) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [isHost, setIsHost] = useState(peopleCount === 0);

  const nameInputRef = useRef<HTMLInputElement>(null);

  // Auto-focus on name input when component mounts or after adding a person
  useEffect(() => {
    if (nameInputRef.current) {
      nameInputRef.current.focus();
    }
  }, [peopleCount]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !amount.trim()) return;

    // Validate amount is a valid number
    const parsedAmount = parseFloat(amount);
    if (isNaN(parsedAmount) || parsedAmount < 0) {
      alert("Please enter a valid amount");
      return;
    }

    onAddPerson({
      name: name.trim(),
      amount: parsedAmount,
      isHost,
    });

    // Reset form
    setName("");
    setAmount("");
    setIsHost(false);

    // Focus back on name input
    if (nameInputRef.current) {
      nameInputRef.current.focus();
    }
  };

  const getAmountPlaceholder = () => {
    return "15.50";
  };

  const getAmountLabel = () => {
    return "Order Amount ₪";
  };

  return (
    <>
      <ModeToggle>
        <ToggleLabel>
          <input
            type="checkbox"
            checked={billingMode === "percentage"}
            onChange={(e) =>
              onBillingModeChange(e.target.checked ? "percentage" : "amount")
            }
          />
          Proportional fee billing
        </ToggleLabel>
        <span
          style={{ fontSize: "0.875rem", color: "#9CA3AF", marginLeft: "8px" }}
        >
          {billingMode === "percentage"
            ? "Split fees proportionally by order amount"
            : "Split fees evenly between all people"}
        </span>
      </ModeToggle>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <Label htmlFor="name">Person Name</Label>
            <Input
              ref={nameInputRef}
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter name"
              required
              autoComplete="off"
            />
          </InputGroup>

          <InputGroup>
            <Label htmlFor="amount">{getAmountLabel()}</Label>
            <Input
              id="amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder={getAmountPlaceholder()}
              step="0.01"
              min="0"
              required
              autoComplete="off"
            />
          </InputGroup>

          <InputGroup style={{ minWidth: "auto" }}>
            <Label htmlFor="isHost">
              <Input
                id="isHost"
                type="checkbox"
                checked={isHost}
                onChange={(e) => setIsHost(e.target.checked)}
              />
              Host
            </Label>
          </InputGroup>

          <Button type="submit">Add Person</Button>
        </Form>
      </motion.div>
    </>
  );
};
