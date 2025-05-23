import { motion, AnimatePresence } from "framer-motion";
import {
  PersonList,
  PersonItem,
  PersonInfo,
  PersonName,
  PersonAmount,
  PersonFinalAmount,
  Tag,
  IconButton,
} from "../styles";
import type { Person } from "../types";

interface PeopleListProps {
  people: Person[];
  onRemovePerson: (id: string) => void;
}

export const PeopleList = ({ people, onRemovePerson }: PeopleListProps) => {
  const formatAmount = (amount: number) => {
    return `₪${amount.toFixed(2)}`;
  };

  const formatFinalAmount = (amount: number | undefined) => {
    if (amount === undefined) return "";
    return `₪${amount.toFixed(2)}`;
  };

  if (people.length === 0) {
    return null;
  }

  return (
    <PersonList>
      <AnimatePresence mode="popLayout">
        {people.map((person, index) => (
          <motion.div
            key={person.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.2, delay: index * 0.05 }}
            layout
          >
            <PersonItem>
              <PersonInfo>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <PersonName>{person.name}</PersonName>
                  {person.isHost && <Tag>Host</Tag>}
                </div>

                <div
                  style={{ display: "flex", alignItems: "center", gap: "16px" }}
                >
                  <PersonAmount>
                    Order: {formatAmount(person.amount)}
                  </PersonAmount>

                  {person.finalAmount !== undefined && (
                    <PersonFinalAmount>
                      Pays: {formatFinalAmount(person.finalAmount)}
                    </PersonFinalAmount>
                  )}
                </div>
              </PersonInfo>

              <IconButton
                onClick={() => onRemovePerson(person.id)}
                aria-label={`Remove ${person.name}`}
                title={`Remove ${person.name}`}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </IconButton>
            </PersonItem>
          </motion.div>
        ))}
      </AnimatePresence>
    </PersonList>
  );
};
