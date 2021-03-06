export default (clas, src, alt) => {
  const Img = document.createElement("img");

  Img.classList.add(clas);
  Img.setAttribute("src", src);
  Img.setAttribute("alt", alt);
  Img.setAttribute("loading", "lazy");

  return Img;
};
