import React from 'react';
import s from './ProfileInfo.module.css'
import {CircularProgress} from "@material-ui/core";
import ProfileStatus from "./ProfileStatus";

export type ProfileInfoPropsType = {
    profile: any
    status:string
    updateStatus:(status:string) => void
}


const ProfileInfo = (props: ProfileInfoPropsType) => {

    if (!props.profile) {
        return (<CircularProgress color="secondary"/>)
    }
    return (
            <div className={s.info}>
               <div> {props.profile.fullName}</div>
                <ProfileStatus profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
                <img src={props.profile.photos.large} alt=""/>
                <div>
                <span>{props.profile.aboutMe}</span>
                </div>
                {props.profile.lookingForAJob
                    ?<div><span>Ищу работу</span> <div><span>{props.profile.lookingForAJobDescription}</span></div></div>
                    : <span>Не ищу работу</span>}
            </div>
        )
}

export default ProfileInfo