import SwapiService from "../../services/swapi-service";
import { withDataById } from "../hoc-helpers";
import ItemDetails from "../item-details";

const { getPerson, getPlanet, getStarship, getPersonImage, getPlanetImage, getStartshipImage } = new SwapiService();

const PersonDetails = withDataById(ItemDetails, getPerson, getPersonImage);
const PlanetDetails = withDataById(ItemDetails, getPlanet, getPlanetImage);
const StarshipDetails = withDataById(ItemDetails, getStarship, getStartshipImage);
export {
    PersonDetails,
    StarshipDetails,
    PlanetDetails
}