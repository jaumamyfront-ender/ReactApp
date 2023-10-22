import "./App.css";
import Header from "./components/Header.jsx";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";

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
