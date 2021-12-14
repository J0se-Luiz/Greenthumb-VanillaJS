import ImageGlobal from "../../../helpers/ImageGlobal";
import Img from "../../atoms/Img";
import NewElement from "../../atoms/NewElement";
import CardPlant from "../../molecules/CardPlant";

export default (data) => {
  const BoxPlants = NewElement("box-plants", "", "section");
  BoxPlants.setAttribute("id", "box-plants");

  const contianerIconTitle = NewElement("contianer-icon-title", "", "div");
  const iconBoxPlants = Img(
    "icon-box-plants",
    ImageGlobal.iconBoxPlants,
    "icon picks"
  );
  const titleBoxPlants = NewElement("title-plants", "Our picks for you", "h2");
  contianerIconTitle.append(iconBoxPlants, titleBoxPlants);

  const containerPlants = NewElement("container-plants", "", "div"); 

   data.map((infCard, index) => containerPlants.append(CardPlant(index, infCard.url, infCard.name)));
  // data.map((infCard) => console.log(".....ggggg...", infCard.name));
  // containerPlants.append(plant1,plant2,plant3,plant4,plant5,plant6, plant7)
  
  BoxPlants.append(contianerIconTitle,containerPlants);
  return BoxPlants;
};
