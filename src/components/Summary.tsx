import {
  Summary as SummaryContainer,
  SummaryGrid,
  SummarySection,
  SummaryItem,
  SummaryLabel,
  SummaryValue,
  SectionTitle,
  TotalAmount,
} from "../styles";
import type { Person, BillingMode } from "../types";

interface SummaryProps {
  people: Person[];
  deliveryFee: number;
  serviceFee: number;
  billingMode: BillingMode;
}

export const Summary = ({
  people,
  deliveryFee,
  serviceFee,
  billingMode,
}: SummaryProps) => {
  const totalFees = deliveryFee + serviceFee;
  const totalToPay = people.reduce(
    (sum, person) => sum + (person.finalAmount || 0),
    0
  );

  const getTotalOrderAmount = () => {
    if (billingMode === "percentage") {
      return totalFees; // In percentage mode, we only split fees
    }
    return people.reduce((sum, person) => sum + person.amount, 0);
  };

  const getOrderLabel = () => {
    return billingMode === "percentage"
      ? "Total Fees to Split"
      : "Total Order Amount";
  };

  const formatCurrency = (amount: number) => `₪${amount.toFixed(2)}`;

  return (
    <SummaryContainer>
      <SectionTitle>Payment Summary</SectionTitle>

      <SummaryGrid>
        <SummarySection>
          <h3
            style={{
              color: "#FFFFFF",
              marginBottom: "16px",
              fontSize: "1.125rem",
            }}
          >
            Order Details
          </h3>

          <SummaryItem>
            <SummaryLabel>{getOrderLabel()}</SummaryLabel>
            <SummaryValue>{formatCurrency(getTotalOrderAmount())}</SummaryValue>
          </SummaryItem>

          {billingMode === "amount" && (
            <>
              <SummaryItem>
                <SummaryLabel>Delivery Fee</SummaryLabel>
                <SummaryValue>{formatCurrency(deliveryFee)}</SummaryValue>
              </SummaryItem>

              <SummaryItem>
                <SummaryLabel>Service Fee</SummaryLabel>
                <SummaryValue>{formatCurrency(serviceFee)}</SummaryValue>
              </SummaryItem>
            </>
          )}
        </SummarySection>

        <SummarySection>
          <h3
            style={{
              color: "#FFFFFF",
              marginBottom: "16px",
              fontSize: "1.125rem",
            }}
          >
            Individual Payments
          </h3>

          {people.map((person) => (
            <SummaryItem key={person.id}>
              <SummaryLabel>
                {person.name} {person.isHost && "(Host)"}
              </SummaryLabel>
              <SummaryValue>
                {person.finalAmount !== undefined
                  ? formatCurrency(person.finalAmount)
                  : formatCurrency(person.amount)}
              </SummaryValue>
            </SummaryItem>
          ))}
        </SummarySection>
      </SummaryGrid>

      <TotalAmount>
        <span>Total to Collect</span>
        <span className="amount">{formatCurrency(totalToPay)}</span>
      </TotalAmount>
    </SummaryContainer>
  );
};
