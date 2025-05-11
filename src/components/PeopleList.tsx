import { motion, AnimatePresence } from "framer-motion";
import {
  PersonList,
  PersonItem,
  PersonName,
  PersonAmount,
  Tag,
  IconButton,
} from "../styles";
import type { Person } from "../types";
import { formatCurrency } from "../utils";
import { theme } from "../theme";

interface PeopleListProps {
  people: Person[];
  onRemovePerson: (id: string) => void;
}

export const PeopleList = ({ people, onRemovePerson }: PeopleListProps) => {
  if (people.length === 0) {
    return <p>No people added yet. Add someone to get started!</p>;
  }

  return (
    <PersonList>
      <AnimatePresence>
        {people.map((person) => (
          <motion.div
            key={person.id}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <PersonItem>
              <div>
                <PersonName>
                  {person.name}
                  {person.isHost && <Tag>Host</Tag>}
                </PersonName>
                <div
                  style={{
                    color: theme.colors.comment,
                    fontSize: "0.9rem",
                    marginTop: "4px",
                  }}
                >
                  Order: ₪{formatCurrency(person.amount)}
                </div>
              </div>
              <div style={{ textAlign: "right" }}>
                <PersonAmount>
                  Pay: ₪
                  {person.finalAmount !== undefined
                    ? formatCurrency(person.finalAmount)
                    : formatCurrency(person.amount)}
                </PersonAmount>
                <IconButton
                  onClick={() => onRemovePerson(person.id)}
                  style={{ marginLeft: "8px" }}
                >
                  ✕
                </IconButton>
              </div>
            </PersonItem>
          </motion.div>
        ))}
      </AnimatePresence>
    </PersonList>
  );
};
