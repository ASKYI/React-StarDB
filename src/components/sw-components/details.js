import SwapiService from "../../services/swapi-service";
import { withData } from "../hoc-helpers";
import ItemDetails from "../item-details";

const {getPerson, getPlanet, getStarship} = new SwapiService();

const PersonDetails = withData(ItemDetails, getPerson);
const PlanetDetails = withData(ItemDetails, getPlanet);
const StarshipDetails = withData(ItemDetails, getStarship);
export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
}