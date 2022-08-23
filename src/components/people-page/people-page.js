import React, { useState } from "react";
import ErrorIndicator from "../error-indicator";
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import SwapiService from "../../services/swapi-service";
import Row from '../row';

const PeoplePage = () => {
    const swapiService = new SwapiService();

    const [selectedPerson, setSelectedPerson] = useState(null);

    const onPersonSelected = (id) => {
        setSelectedPerson(id);
    }

    const hasError = false;

    if (hasError)
        return (<ErrorIndicator />);

    const itemList = <ItemList
        onItemSelected={onPersonSelected}
        getData={swapiService.getAllPeople}
        renderItem={({ name, gender, birthYear }) => `${name} (${gender} ${birthYear})`} />;

    const personDetails = <PersonDetails personId={selectedPerson} />;
    return (
        <Row left={itemList} right={personDetails} />
    );
}

export default PeoplePage;