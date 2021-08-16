import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../Redux/ProfileReducer";
import {StateType} from "../../Redux/Store";
import {RouteComponentProps, withRouter} from 'react-router';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type PathParamType = {
    userId: string
}

type mapStatePropsType = {
    profile: any
    status:string
    isAuth: boolean
    authorizedUserId:string
}

type mapDispatchPropsType = {
    getUserProfile: (userId: string) => void
    getStatus:(userId:string) => void
    updateStatus:(status:string) => void

}

type OwnPropsType = mapStatePropsType & mapDispatchPropsType

type PropsType = RouteComponentProps<PathParamType> & OwnPropsType

class ProfileApiContainer extends React.Component<PropsType, StateType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId && this.props.isAuth){
            userId = this.props.authorizedUserId
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return (
            <Profile profile={this.props.profile} status={this.props.status} updateStatus ={this.props.updateStatus}/>
        )
    }
}


const mapStateToProps = (state: any): mapStatePropsType => ({
    profile: state.ProfilePage.profile,
    status: state.ProfilePage.status,
    isAuth: state.Auth.isAuth,
    authorizedUserId:state.Auth.userId
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile,getStatus,updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileApiContainer)
