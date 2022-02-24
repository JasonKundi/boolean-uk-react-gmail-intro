import "./styles/app.css";
import "./styles/header.css";
import "./styles/left-menu.css";

import Header from "./header";
import LeftMenu from "./left-menu";
import Main from "./main";

function App() {
  return (
    <div className="app">
      <Header />
      <LeftMenu />
      <Main />
    </div>
  );
}

export default App;
