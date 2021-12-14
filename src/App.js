import NewElement from "./components/atoms/NewElement";
import Header from "./components/organisms/Header/Header";
import HeaderMobile from "./components/organisms/Header/HeaderMobile";
// import HeaderJS from "./components/organisms/Header/HeaderJS";
import BoardSelect from "./components/organisms/BoardSelect";
import BoxNoResults from "./components/organisms/BoxNoResults";

const App = () => {
  const App = NewElement("App", "", "main");
  
  //     [INICIO] HEADER
  // Foi criado dois componentes do header para que seja atualizado dinamicamente 
  // quando testa resolução no inspetor do browser.
  // Se utilizar o HeaderJS, terá o mesmo resultado, com o detalhe de quer precisara
  // atualizar a pagina/refresh quando tiver em resolução menor ou maior que 800px. 
  document.body.append(Header(), HeaderMobile()); 
  // document.body.append(HeaderJS());
  //      [FIM] HEADER

  App.append(BoardSelect());
  App.append(BoxNoResults());
  
  return App;
};

export default App;
