import React from 'react'
import {StateType} from "../Redux/Store";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";


export const withAuthRedirect = (Component: any) => {

    const mapStateToPropsForRedirect = (state: any): any => ({
        isAuth: state.Auth.isAuth
    })

    class RedirectComponent extends React.Component<any, StateType> {
        render() {
            if (!this.props.isAuth) return <Redirect to='/login'/>
            return <Component {...this.props} />
        }
    }

    let ConnectedRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)
    return ConnectedRedirectComponent
}