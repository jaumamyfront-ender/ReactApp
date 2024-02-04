import React from "react";
import { Navigate } from "react-router-dom";

export  const WithAuthRedirect =(Component) =>{

    class RedirectComponent extends React.Component{
      
        render(){
           let getAuthStatus = this.props.isAuth
            if (!getAuthStatus) return <Navigate to={"/login/"} />;
            return <Component{...this.props}/>
        }
    }
    return RedirectComponent

}
