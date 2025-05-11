import type { Person } from "./types";

/**
 * Calculate the final amount each person should pay, rounding up to integers
 * to favor the host (who pays the remainder)
 */
export const calculateFinalAmounts = (
  people: Person[],
  deliveryFee: number,
  serviceFee: number
): Person[] => {
  if (people.length === 0) return [];

  // Find the host
  const host = people.find((person) => person.isHost);
  const hostIndex = host
    ? people.findIndex((person) => person.id === host.id)
    : -1;

  if (!host) {
    // If no host is defined, just distribute fees evenly
    return distributeFees(people, deliveryFee, serviceFee);
  }

  // Calculate total order amount (excluding fees)
  const totalOrderAmount = people.reduce(
    (sum, person) => sum + (isNaN(person.amount) ? 0 : person.amount),
    0
  );

  // Calculate total fees
  const totalFees = deliveryFee + serviceFee;

  // Calculate each person's share of the fees proportionally to their order amount
  const result = people.map((person) => {
    if (person.isHost) {
      // We'll calculate the host's amount last
      return { ...person };
    }

    // Handle NaN values
    const personAmount = isNaN(person.amount) ? 0 : person.amount;

    // Calculate the proportion of fees this person should pay
    const feeShare = (personAmount / totalOrderAmount) * totalFees;

    // Calculate total amount (order + fees) and round up to integer
    const rawTotal = personAmount + feeShare;
    const finalAmount = Math.ceil(rawTotal);

    return { ...person, finalAmount };
  });

  // Calculate how much the non-host people are paying in total
  const nonHostTotal = result
    .filter((person) => !person.isHost)
    .reduce((sum, person) => sum + (person.finalAmount || 0), 0);

  // Calculate the total that should be collected (all orders + all fees)
  const grandTotal = totalOrderAmount + totalFees;

  // The host pays whatever is left to reach the grand total
  const hostTotal = Math.max(0, grandTotal - nonHostTotal);

  // Update the host's amount directly rather than mapping the entire array again
  if (hostIndex !== -1) {
    result[hostIndex] = { ...result[hostIndex], finalAmount: hostTotal };
    return result;
  }

  // Fallback to the original approach if host index wasn't found
  return result.map((person) =>
    person.isHost ? { ...person, finalAmount: hostTotal } : person
  );
};

/**
 * Distributes fees evenly when no host is defined
 */
const distributeFees = (
  people: Person[],
  deliveryFee: number,
  serviceFee: number
): Person[] => {
  const totalPeople = people.length;
  if (totalPeople === 0) return [];

  // Calculate fee per person
  const feePerPerson = (deliveryFee + serviceFee) / totalPeople;

  return people.map((person) => {
    // Handle NaN values
    const personAmount = isNaN(person.amount) ? 0 : person.amount;
    const finalAmount = Math.ceil(personAmount + feePerPerson);
    return { ...person, finalAmount };
  });
};

/**
 * Format currency as a string with 2 decimal places
 */
export const formatCurrency = (amount: number): string => {
  // Handle NaN
  if (isNaN(amount)) return "0.00";
  return amount.toFixed(2);
};
