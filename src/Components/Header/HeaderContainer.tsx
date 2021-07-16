import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import {StateType} from "../../Redux/Store";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {Auth, setAuthUserData} from "../../Redux/AuthReducer";
import {HeaderApi} from "../../api/Api";

export type HeaderContainerPropsType = {
    isAuth: boolean
    login: string
    setAuthUserData: (userId: any, email: string, login: string) => void
    Auth:() => void
}

class HeaderContainer extends React.Component<HeaderContainerPropsType, StateType> {

    componentDidMount() {
        // this.props.toggleIsFetching(true)
        this.props.Auth()
    }

    render() {
        return <Header isAuth={this.props.isAuth} login={this.props.login}/>
    };
}

const mapStateToProps = (state: any) => ({
    isAuth: state.Auth.isAuth,
    login: state.Auth.login
})

export default connect(mapStateToProps, {setAuthUserData, Auth})(HeaderContainer)