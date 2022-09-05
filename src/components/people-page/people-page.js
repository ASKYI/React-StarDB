import React, { useState } from "react";
import Row from '../row';
import { PersonList } from '../sw-components/item-lists';
import { PersonDetails } from '../sw-components/details';
import { Record } from '../item-details/item-details';

const PeoplePage = () => {
    const [selectedPerson, setSelectedPerson] = useState(null);

    const personList = (
        <PersonList onItemSelected={(id) => setSelectedPerson(id)} />
    );
    const personDetails = (
        <PersonDetails itemId={selectedPerson}>
            <Record field="gender" label="Gender"></Record>
            <Record field="eyeColor" label="Eye color"></Record>
        </PersonDetails>
    );

    return (
        <Row
            left={personList}
            right={personDetails} >
        </Row>
    );
}

export default PeoplePage;