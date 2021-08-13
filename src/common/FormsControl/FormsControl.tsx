import React from 'react'
import s from './FormsControl.module.css'

// @ts-ignore
export const TextArea = ({input, meta, ...props}) => {
    return (
        <div className={s.FormControl +" " + s.error}>
            <div>
            <textarea {...input} {...props} />
            </div>
            {meta.touched && meta.error && <span>{meta.error}</span>}
        </div>)
}

// @ts-ignore
export const Input = ({input, meta, ...props}) => {
    return (
        <div className={s.FormControl + " " + s.error}>
            <div>
                <input {...input} {...props} />
            </div>
            {meta.touched && meta.error && <span>{meta.error}</span>}
        </div>)
}