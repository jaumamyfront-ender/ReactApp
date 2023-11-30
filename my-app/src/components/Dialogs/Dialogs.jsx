import React from "react";
import classes from "./dialogs.module.css";
import { NavLink, useLocation } from "react-router-dom";
import {
  ActionCreatorAddMessage,
  ActionCreatorReadMessage,
} from "../../Redux/State";
import UserMessage from "./UserMessage";

export default function Dialogs(props) {
  const { pathname } = useLocation();
  // {props.state.MessagesPage.NewMessageBody}

  let GetValueFromRef = React.createRef();
  // let state = props.state.getState().MessagesPage;
  //left side (users list)
  let dialogsdataelements = props.data.map((dialog) => (
    <Dialogitems name={dialog.name} id={dialog.id} pathname={pathname} />
  ));

  //all site

  let onSendMessageClick = () => {
    let newobjectmessage = GetValueFromRef.current.value;
    props.dispatch(ActionCreatorAddMessage(newobjectmessage));
  };
  //read new value FROM STATE to textarea and read new value FROM TEXTAREA and send to state
  let valuefortextarea = props.state.MessagesPage.NewMessageBody;
  let onNewMessageChange = (e) => {
    // let newobjectmessage = e.target.value;
    let newobjectmessage = GetValueFromRef.current.value;
    props.dispatch(ActionCreatorReadMessage(newobjectmessage));
  };

  return (
    <div className="Wrapper">
      <div className={classes.Container}>
        <div className={classes.Head}>
          <p>Dialogs</p>
        </div>
        <div className={`${classes.SideBar} ${classes.LeftWrapper}`}>
          {dialogsdataelements}
        </div>
        <div className={classes.Barrier}></div>
        <div className={`${classes.SideBar} ${classes.RightWrapper}`}>
          {/* {usermessagee} */}
          <UserMessage state={props.state} />
          <div className={`${classes.rightwrapper__items} ${classes.user}`}>
            <div className={classes.user__info}>
              <div className={classes.user__picture}></div>
              <div className={classes.user__name}>
                <p>Me</p>
              </div>
            </div>
            <div className={`${classes.user__message} ${classes.me}`}>
              <textarea
                name=""
                id=""
                cols="20"
                rows="10"
                value={valuefortextarea}
                onChange={onNewMessageChange}
                ref={GetValueFromRef}
              ></textarea>
            </div>
            <button
              onClick={onSendMessageClick}
              className={classes.sendMessageFromUser}
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
//return links users and color onchange
const Dialogitems = (props) => {
  let path = "/dialogs/" + props.id;
  let isSelectPath = props.pathname.includes(path);
  return (
    <NavLink
      to={path}
      alt="/#"
      style={{
        color: isSelectPath ? "red" : "grey",
        fontWeight: isSelectPath ? "700" : "300",
        fontSize: isSelectPath ? "32px" : "22px",
      }}
      className={classes.sidebar__items}
    >
      {props.name}
    </NavLink>
  );
};
