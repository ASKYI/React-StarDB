import React, { useState } from "react";
import Row from '../row';
import { PlanetList } from '../sw-components/item-lists';
import { Record } from '../item-details/item-details';
import { PlanetDetails } from '../sw-components/details';

const PlanetsPage = () => {
    const [selectedPlanet, setSelectedPlanet] = useState(null);

    const planetList = (
        <PlanetList onItemSelected={(id) => setSelectedPlanet(id)} />
    );
    const planetDetails = (
        <PlanetDetails itemId={selectedPlanet}>
            <Record field="population" label="Population"></Record>
            <Record field="rotationPeriod" label="Rotation"></Record>
            <Record field="diameter" label="Diameter"></Record>
        </PlanetDetails>
    );

    return (
        <Row
            left={planetList}
            right={planetDetails} >
        </Row>
    );
}

export default PlanetsPage;