import React, {ChangeEvent, useState} from 'react';
import s from './ProfileStatus.module.css'
import {CircularProgress} from "@material-ui/core";
import {ProfileApi} from "../../../api/Api";

export type ProfileInfoPropsType = {
    profile: any
    status:string
    updateStatus:(status:string) => void
}


const ProfileStatus = (props: ProfileInfoPropsType) => {

    const [status, setStatus] = useState(props.status)
    const [editMode, setEditMode] = useState(false)
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }
    const onEditModeOff = () => {
        setEditMode(false)
        props.updateStatus(status)
    }


    if (!props.profile) {
        return (<CircularProgress color="secondary"/>)
    }
    if (editMode) {
        return (
            <div className={s.status}>
                <input autoFocus onBlur={onEditModeOff} onChange={onChangeHandler} value={status}/>
            </div>
        )
    } else {
        return (
            <div className={s.status}>
                <span onDoubleClick={() => setEditMode(true)}>{status ? status : 'Double click to change status'}</span>
            </div>
        )

    }
}
export default ProfileStatus