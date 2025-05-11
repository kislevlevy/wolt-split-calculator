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
import type { Person } from "./types";
import { calculateFinalAmounts } from "./utils";

function App() {
  const [people, setPeople] = useState<Person[]>([]);
  const [deliveryFee, setDeliveryFee] = useState(0);
  const [serviceFee, setServiceFee] = useState(0);

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
  };

  const handleRemovePerson = (id: string) => {
    setPeople(people.filter((person) => person.id !== id));
  };

  const handleCalculate = () => {
    const calculatedPeople = calculateFinalAmounts(
      people,
      deliveryFee,
      serviceFee
    );

    setPeople(calculatedPeople);
  };

  return (
    <Container>
      <GlobalStyle />

      <Header>
        <Title>Wolt Split Calculator</Title>
        <Subtitle>Calculate each person's share in your group order</Subtitle>
      </Header>

      <Card>
        <SectionTitle>Add People</SectionTitle>
        <PersonForm onAddPerson={handleAddPerson} peopleCount={people.length} />
        <PeopleList people={people} onRemovePerson={handleRemovePerson} />
      </Card>

      <Card>
        <SectionTitle>Fees</SectionTitle>
        <FeesForm
          deliveryFee={deliveryFee}
          serviceFee={serviceFee}
          onDeliveryFeeChange={setDeliveryFee}
          onServiceFeeChange={setServiceFee}
          onCalculate={handleCalculate}
        />
      </Card>

      {people.length > 0 && (
        <Summary
          people={people}
          deliveryFee={deliveryFee}
          serviceFee={serviceFee}
        />
      )}
    </Container>
  );
}

export default App;
