import "./App.css";
import Main from "./components/Main";
import Header from "./components/Header/Header";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
library.add(faStar);

function App() {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;
