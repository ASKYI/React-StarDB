import React, { useState } from "react";
import ItemList from "../item-list";
import ItemDetails from "../item-details";
import SwapiService from "../../services/swapi-service";
import Row from '../row';
import ErrorBoundry from "../error-boundry";

const PeoplePage = () => {
    const swapiService = new SwapiService();

    const [selectedPerson, setSelectedPerson] = useState(5);

    const onPersonSelected = (id) => {
        setSelectedPerson(id);
    }

    const itemList = <ItemList
        onItemSelected={onPersonSelected}
        getData={swapiService.getAllPeople}
        renderItem={({ name, gender, birthYear }) => `${name} (${gender} ${birthYear})`} />;

    const personDetails =
        <ErrorBoundry>
            <ItemDetails itemId={selectedPerson} />
        </ErrorBoundry>;

    return (
        <Row left={itemList} right={personDetails} />
    );
}

export default PeoplePage;