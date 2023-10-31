import "./App.css";
import Header from "./components/Header/Header.jsx";
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./components/Content/Content";

function App() {
  return (
    <div className="containerGrid">
      <Header />
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;
