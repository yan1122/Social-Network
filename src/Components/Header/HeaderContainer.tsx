import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import {StateType} from "../../Redux/Store";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../Redux/AuthReducer";

export type HeaderContainerPropsType = {
    isAuth:boolean
    login:string
    setAuthUserData: (userId: any, email: string, login: string) => void
}

class HeaderContainer extends React.Component<HeaderContainerPropsType, StateType> {

    componentDidMount() {
        // this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}).then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                this.props.setAuthUserData(id, email, login)
            }
        })
    }

    render() {
        return <Header isAuth={this.props.isAuth} login={this.props.login}/>
    };
}

const mapStateToProps = (state: any) => ({
    isAuth:state.Auth.isAuth,
    login:state.Auth.login
})

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer)