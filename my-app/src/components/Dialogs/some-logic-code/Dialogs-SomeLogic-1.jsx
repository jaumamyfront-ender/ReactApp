import React from "react";
import {
  ActionCreatorAddMessage,
  ActionCreatorReadMessage,
} from "../../Redux/reducer-dialogs";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import classes from "./../dialogs.module.css"

export default function DialogsLogic() {
  const { pathname } = useLocation();

  let GetValueFromRef = React.createRef();

  const dataFromReduxTextAreaRefreshFromState = useSelector(
    (state) => state.MessagesPage.NewMessageBody[0].message
  );
 

  const dataFromReduxUsersList = useSelector(
    (state) => state.MessagesPage.dialogsDataUsersList
  );

  let dialogsdataelements = dataFromReduxUsersList.map((dialog) => (
    <Dialogitems name={dialog.name} id={dialog.id} pathname={pathname} />
  ));

 const dispatch = useDispatch();
  let onSendMessageClick = (value) => {
    // let newobjectmessage = GetValueFromRef.current.value;
    dispatch(ActionCreatorAddMessage(value));
    
  };

  let onNewMessageChange = () => {
    let newobjectmessage = GetValueFromRef.current.value;
    dispatch(ActionCreatorReadMessage(newobjectmessage));
  };

  return {
    GetValueFromRef,
    dataFromReduxTextAreaRefreshFromState,
    onNewMessageChange,
    onSendMessageClick,
    dialogsdataelements,
  };
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
