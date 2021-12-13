import Img from "../../atoms/Img";
import NewElement from "../../atoms/NewElement";

export default (
  nameComp,
  icon,
  numberCard,
  initDescription,
  textBold,
  endDescription,
  changeSelect,
  valuesOptions
) => {
  const Card = NewElement("card-select", "", "aside");
  Card.setAttribute("id", `card-select-${nameComp}`);

  const boxSelect = NewElement("box-select", "", "div");
  const iconCard = Img("icon-card-select", icon, `icon ${nameComp}`);

  const TextCardSun = NewElement(`text-card-${nameComp}`, "", "p");
  TextCardSun.setAttribute("id", `text-card-${nameComp}`);
  TextCardSun.append(
    NewElement("text-bold", `${numberCard}`, "span"),
    `${initDescription}`,
    NewElement("text-bold", `${textBold}`, "span"),
    `${endDescription}`
  );

  const select = NewElement(`select-to-options`, "", "select");
  select.setAttribute("id", `select-${nameComp}`);

  const firstOption = NewElement("first-option", "Select...", "option");
  firstOption.setAttribute("id", "option-Select...");
  firstOption.setAttribute("disabled", true);
  firstOption.setAttribute("selected", true);
  firstOption.setAttribute("value", "Select...");

  const theOptions = (valueOption) => {
    const option = NewElement("options-card", valueOption, "option");
    option.setAttribute("id", `option-${valueOption}`);
    option.setAttribute("value", valueOption);

    return option;
  };

  select.append(firstOption);
  valuesOptions.map((option) => select.append(theOptions(option)));

  const arrowSelect = NewElement("arrow-select", "", "div");

  const removeFocus = () => {
    document.activeElement.blur();
    arrowSelect.style.transform = "rotate(0deg)";
  };

  const change = () => {
    removeFocus();
    changeSelect();
  };

  const selectInFocus = () => {
    arrowSelect.style.transform = "rotate(180deg)";
  };

  select.addEventListener("focus", selectInFocus);
  select.addEventListener("blur", removeFocus);
  select.addEventListener("change", change);

  boxSelect.append(select, arrowSelect);

  Card.append(iconCard, TextCardSun, boxSelect);

  return Card;
};
