import "./App.css";
import raster from "./assets/Raster.png";
import profile from "./assets/profile.jpeg";
import profileImage from "./assets/profileImage.jpg";

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
      <div className="content">
        <div className="content__preview">
          <img src={profile} alt="/#" />
        </div>
        <div className="content__profile">
          <div className="profile__image">
            {" "}
            <img src={profileImage} alt="/#" />{" "}
          </div>
          <div className="profile__description">
            <p>Dmitry K.</p>
            <p>
              Date of Birth: 2 january City: Minsk Education: BSU '11 Web Site:
              https://samuraijs.com
            </p>
          </div>
        </div>
        <div className="content__posts">
          <div className="my__posts">
            <p>My posts</p>
          </div>
          <div className="my__poststextarea">
            <textarea name="assasasa" id="" cols="10" rows="5">
              your newssqqsqsqsqs
            </textarea>
          </div>
          <div className="my__postssendbutton">
            <button>Send</button>
          </div>
        </div>
        <div className="content__footer">
          <div className="item__one">
            <div className="item__one__image">
              {/* <img src="" alt="/#" /> */}
            </div>
            <div className="item__one__comment">
              <span>Hey, why nobody love me?</span>
            </div>
          </div>
          <div className="item__one">
            <div className="item__one__image">
              {/* <img src="" alt="/#" /> */}
            </div>
            <div className="item__one__comment">
              <span>Hey, why nobody love me?</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
