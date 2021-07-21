import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../Redux/ProfileReducer";
import {StateType} from "../../Redux/Store";
import {RouteComponentProps, withRouter} from 'react-router';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type PathParamType = {
    userId: string
}

type mapStatePropsType = {
    profile: any
    isAuth: boolean
}

type mapDispatchPropsType = {
    getUserProfile: (userId: string) => void
}

type OwnPropsType = mapStatePropsType & mapDispatchPropsType

type PropsType = RouteComponentProps<PathParamType> & OwnPropsType

class ProfileApiContainer extends React.Component<PropsType, StateType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        this.props.getUserProfile(userId)
    }

    render() {
        return (
            <Profile profile={this.props.profile}/>
        )
    }
}

let AuthRedirectComponent = withAuthRedirect(ProfileApiContainer)

const mapStateToProps = (state: any): mapStatePropsType => ({
    profile: state.ProfilePage.profile,
    isAuth: state.Auth.isAuth
})

let withUrlDataContainerComponent = withRouter(AuthRedirectComponent)

export default connect(mapStateToProps, {getUserProfile})(withUrlDataContainerComponent)
