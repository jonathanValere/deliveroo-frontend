import "./App.css";
import Content from "./components/Content";
import Header from "./components/Header/Header";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
library.add(faStar);

function App() {
  return (
    <>
      <Header />
      <Content />
    </>
  );
}

export default App;
