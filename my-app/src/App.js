import "./App.css";
import Header from "./components/Header/Header.jsx";
import Sidebar from "./components/Sidebar/Sidebar";
// import Content from "./components/Content/Content";
import Dialogs from "./components/Dialogs/Dialogs";

function App() {
  return (
    <div className="containerGrid">
      <Header />
      <Sidebar />

      <Dialogs />
    </div>
  );
}

export default App;
