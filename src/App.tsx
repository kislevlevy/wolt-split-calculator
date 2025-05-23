import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  GlobalStyle,
  Container,
  Header,
  Title,
  Subtitle,
  Card,
  SectionTitle,
} from "./styles";
import { PersonForm } from "./components/PersonForm";
import { PeopleList } from "./components/PeopleList";
import { FeesForm } from "./components/FeesForm";
import { Summary } from "./components/Summary";
import type { Person, BillingMode } from "./types";
import { calculateFinalAmounts } from "./utils";

function App() {
  const [people, setPeople] = useState<Person[]>([]);
  const [deliveryFee, setDeliveryFee] = useState(0);
  const [serviceFee, setServiceFee] = useState(0);
  const [billingMode, setBillingMode] = useState<BillingMode>("amount");
  const [hasCalculated, setHasCalculated] = useState(false);

  const handleAddPerson = (personData: Omit<Person, "id">) => {
    // If this person is marked as host, remove host status from others
    let updatedPeople = people;
    if (personData.isHost) {
      updatedPeople = people.map((person) => ({
        ...person,
        isHost: false,
      }));
    }

    setPeople([
      ...updatedPeople,
      {
        ...personData,
        id: uuidv4(),
      },
    ]);

    // Reset calculation when adding new person
    setHasCalculated(false);
  };

  const handleRemovePerson = (id: string) => {
    setPeople(people.filter((person) => person.id !== id));
    setHasCalculated(false);
  };

  const handleBillingModeChange = (mode: BillingMode) => {
    setBillingMode(mode);
    setHasCalculated(false);

    // Reset people's final amounts when switching modes
    setPeople(people.map((person) => ({ ...person, finalAmount: undefined })));
  };

  const handleCalculate = () => {
    const calculatedPeople = calculateFinalAmounts(
      people,
      deliveryFee,
      serviceFee,
      billingMode
    );

    setPeople(calculatedPeople);
    setHasCalculated(true);
  };

  return (
    <Container>
      <GlobalStyle />

      <Header>
        <Title>Wolt Split Calculator</Title>
        <Subtitle>
          Calculate each person's share in your group order with smart fee
          distribution
        </Subtitle>
      </Header>

      <Card>
        <SectionTitle>Add People</SectionTitle>
        <PersonForm
          onAddPerson={handleAddPerson}
          peopleCount={people.length}
          billingMode={billingMode}
          onBillingModeChange={handleBillingModeChange}
        />
        <PeopleList people={people} onRemovePerson={handleRemovePerson} />
      </Card>

      <Card>
        <SectionTitle>Fees & Calculation</SectionTitle>
        <FeesForm
          deliveryFee={deliveryFee}
          serviceFee={serviceFee}
          onDeliveryFeeChange={setDeliveryFee}
          onServiceFeeChange={setServiceFee}
          onCalculate={handleCalculate}
          hasCalculated={hasCalculated}
        />
      </Card>

      {people.length > 0 && hasCalculated && (
        <Summary
          people={people}
          deliveryFee={deliveryFee}
          serviceFee={serviceFee}
          billingMode={billingMode}
        />
      )}
    </Container>
  );
}

export default App;
