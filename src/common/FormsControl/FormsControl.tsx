import React from 'react'

// @ts-ignore
export const TextArea = ({input,meta,...props}) => {
    return(<div>
        <textarea {...input} {...props} />
    </div>)
}