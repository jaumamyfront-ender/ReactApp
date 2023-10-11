import "./App.css";
import raster from "./assets/Raster.png";

function App() {
  return (
    <div className="containerGrid">
      <div className="header">
        <div className="headerImage">
          <img src={raster} alt="/#"></img>
        </div>
      </div>
      <div className="sidebar">
        <div className="sidebar__list">
          {" "}
          <a href="/#">Profile</a>
          <a href="/#">Messages</a>
          <a href="/#">News</a>
          <a href="/#">Music</a>
          <a href="/#">Settings</a>
        </div>
        <div className="sidebar__friends">
          <a href="/#" alt="/#" className="qqq">
            Friends
          </a>
          <div className="userspictures one">
            <img></img>
          </div>
          <div className="userspictures second">
            <img></img>
          </div>
          <div className="userspictures three">
            <img></img>
          </div>
          <div className="users__name">sdfsd</div>
          <div className="users__name">fdsfs</div>
          <div className="users__name">fdsfsd</div>
        </div>
      </div>
      <div className="content">content</div>
    </div>
  );
}

export default App;
