import { useState } from "react";
import { motion } from "framer-motion";
import { Button, Form, InputGroup, Input, Label } from "../styles";
import type { Person } from "../types";

interface PersonFormProps {
  onAddPerson: (person: Omit<Person, "id">) => void;
  peopleCount: number;
}

export const PersonForm = ({ onAddPerson, peopleCount }: PersonFormProps) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [isHost, setIsHost] = useState(peopleCount === 0); // First person is host by default

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
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Form
        onSubmit={handleSubmit}
        style={{ display: "flex", alignItems: "flex-end", gap: "12px" }}
      >
        <InputGroup style={{ flex: "2" }}>
          <Label htmlFor="name">Person Name</Label>
          <Input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            required
          />
        </InputGroup>

        <InputGroup style={{ flex: "1" }}>
          <Label htmlFor="amount">Amount</Label>
          <Input
            id="amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0.00"
            step="0.01"
            min="0"
            required
          />
        </InputGroup>

        <div
          style={{ display: "flex", alignItems: "center", marginBottom: "4px" }}
        >
          <InputGroup style={{ marginRight: "12px" }}>
            <Label htmlFor="isHost">
              <Input
                id="isHost"
                type="checkbox"
                checked={isHost}
                onChange={(e) => setIsHost(e.target.checked)}
              />{" "}
              Host
            </Label>
          </InputGroup>

          <Button type="submit">Add</Button>
        </div>
      </Form>
    </motion.div>
  );
};
