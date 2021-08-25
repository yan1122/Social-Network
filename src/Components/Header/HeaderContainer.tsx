import React from 'react';
import {StateType} from "../../Redux/Store";
import Header from "./Header";
import {connect} from "react-redux";
import {Auth, Logout, setAuthUserData} from "../../Redux/AuthReducer";


export type HeaderContainerPropsType = {
    isAuth: boolean
    login: string
    Logout : () => void
}

class HeaderContainer extends React.Component<HeaderContainerPropsType, StateType> {

    render() {
        return <Header isAuth={this.props.isAuth} login={this.props.login} logout={this.props.Logout}/>
    };
}

const mapStateToProps = (state: any) => ({
    isAuth: state.Auth.isAuth,
    login: state.Auth.login
})

export default connect(mapStateToProps, {setAuthUserData,Logout})(HeaderContainer)