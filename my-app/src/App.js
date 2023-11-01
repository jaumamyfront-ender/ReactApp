import "./App.css";
import Header from "./components/Header/Header.jsx";
import Sidebar from "./components/Sidebar/Sidebar";
// import Content from "./components/Content/Content";
import Messages from "./components/Messages/Messages";

function App() {
  return (
    <div className="containerGrid">
      <Header />
      <Sidebar />

      <Messages />
    </div>
  );
}

export default App;
