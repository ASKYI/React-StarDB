import React, { useState } from "react";
import Row from '../row';
import { StarshipList } from '../sw-components/item-lists';
import { StarshipDetails } from '../sw-components/details';
import { Record } from '../item-details/item-details';

const StarshipsPage = () => {
    const [selectedStarship, setSelectedStarship] = useState(null);

    const starshipList = (
        <StarshipList onItemSelected={(id) => setSelectedStarship(id)} />
    );
    const starshipDetails = (
        <StarshipDetails itemId={selectedStarship}>
            <Record field="model" label="Model"></Record>
            <Record field="length" label="Length"></Record>
            <Record field="costInCredits" label="Cost"></Record>
        </StarshipDetails>
    );

    return (
        <Row
            left={starshipList}
            right={starshipDetails} >
        </Row>
    );
}

export default StarshipsPage;