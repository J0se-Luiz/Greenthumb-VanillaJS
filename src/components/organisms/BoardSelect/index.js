import ImageGlobal from "../../../helpers/ImageGlobal";
import Img from "../../atoms/Img";
import NewElement from "../../atoms/NewElement";
import CardSelect from "../../molecules/CardSelect";

export default () => {
  const BoardSelect = NewElement("board-select", "", "section");

  const optionsSun = ["no", "low", "high"];

  const CardSun = CardSelect(
    "sun",
    ImageGlobal.iconSun,
    "1. ",
    "Set the amount of",
    " sunlight ",
    "your plant will get.",
    changeSelect,
    optionsSun
  );

  // [INIT] CARD SUN
  const changeSelect = () => {
    console.log("deuuuuuuuuuuuuuuuuu bommmmmmmm");
    const test = document.getElementById("option-Select...");
    console.log("............ass", test.value);
  };
  // const CardSun = NewElement("card-select", "", "aside");
  // const TextCardSun = NewElement("text-card", "", "p");
  // TextCardSun.append(
  //   NewElement("text-bold", "1. ", "span"),
  //   "Set the amount of",
  //   NewElement("text-bold", " sunlight ", "span"),
  //   "your plant will get."
  // );

  // const newOption = NewElement("option-sun", "Select...", "option");
  // newOption.setAttribute("disabled", true);
  // newOption.setAttribute("selected", true);

  // const SelectSun = NewElement("select-sun", "", "select");

  // const removeFocus = () => {
  // document.activeElement.blur();
  // document.querySelector('.arrow-select-sun').style.transform = "rotate(0deg)";
  // };

  // const changeSelect = () => {
  //   removeFocus();
  // }

  // const boxSelect = NewElement("box-select", "", "div");
  // const arrowSelect = NewElement("arrow-select-sun", "", "div");

  // const selectInFocus = () => {
  // arrowSelect.style.transform = "rotate(180deg)";
  // };

  // SelectSun.addEventListener("focus", selectInFocus);
  // SelectSun.addEventListener("blur", removeFocus);
  // SelectSun.addEventListener("change", changeSelect);

  // SelectSun.append(
  //   newOption,
  //   NewElement("option-sun", "no", "option"),
  //   NewElement("option-sun", "low", "option"),
  //   NewElement("option-sun", "high", "option"),
  //   );

  // boxSelect.append(SelectSun, arrowSelect)

  // CardSun.append(
  //   Img("icon-card-select", ImageGlobal.iconSun, "icon Sun"),
  //   TextCardSun,
  //   boxSelect
  // );

  // [END] CARD SUN

  // [INIT] CARD WATER
  const CardWater = NewElement("card-select", "", "aside");
  const TextCardWater = NewElement("text-card-water", "", "p");
  TextCardWater.append(
    NewElement("text-bold", "2. ", "span"),
    "How often do you want to",
    NewElement("text-bold", " water ", "span"),
    "your plant?"
  );
  CardWater.append(
    Img("icon-card-select", ImageGlobal.iconWater, "icon Water"),
    TextCardWater
  );
  // [END] CARD SUN

  // [INIT] CARD DOG
  const CardDog = NewElement("card-select", "", "aside");
  const TextCardDog = NewElement("text-card-dog", "", "p");
  TextCardDog.append(
    NewElement("text-bold", "3. ", "span"),
    "Do you have pets? Do they",
    NewElement("text-bold", " chew ", "span"),
    "plants?"
  );
  CardDog.append(
    Img("icon-card-select", ImageGlobal.iconChew, "icon Chew"),
    TextCardDog
  );
  // [INIT] CARD DOG

  BoardSelect.append(CardSun, CardWater, CardDog);

  // <select id="nameSelect" onfocus="javascript:document.getElementById('nameSelect').selectedIndex=-1;" onchange="doSomething(this);">
  //     <option value="A">A</option>
  //     <option value="B">B</option>
  //     <option value="C">C</option>
  // </select>

  return BoardSelect;
};
