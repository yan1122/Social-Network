import React from 'react';
import {reduxForm, Field, InjectedFormProps} from "redux-form";
import {Input} from "../../common/FormsControl/FormsControl";
import {requiredField} from "../../utils/validators/validator";

 type FormDataType = {
    login:string
    password:string
    rememberMe:boolean
}

const LoginForm:React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field placeholder='Login' validate={[requiredField]} name={'Login'} component={Input}/></div>
            <div><Field placeholder='Password' validate={[requiredField]} name={'Password'} component={Input}/></div>
            <div><Field type='checkbox'  name={'rememberMe'} component={Input}/> remember me</div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)

const Login = () => {

    const onSubmit = (formData:FormDataType) => {
        console.log(formData)
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default Login