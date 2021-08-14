import React from 'react';
import {reduxForm, Field, InjectedFormProps} from "redux-form";
import {Input} from "../../common/FormsControl/FormsControl";
import {requiredField} from "../../utils/validators/validator";
import {connect, useDispatch, useSelector} from "react-redux";
import {login} from '../../Redux/AuthReducer'
import {AppRootStateType} from "../../Redux/ReduxStore";
import {Redirect} from "react-router-dom";

 type FormDataType = {
     email:string
     Password:string
    rememberMe:boolean
}

const LoginForm:React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field placeholder='Emain' validate={[requiredField]} name={'email'} component={Input}/></div>
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

const Login = (props:any) => {
    const onSubmit = (formData:FormDataType) => {
        props.login(formData.email,formData.Password,formData.rememberMe)
    }
    if(props.isAuth){
        return (<Redirect to='/profile' />)
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}
const mapStateToProps = (state:AppRootStateType) =>({
    isAuth:state.Auth.isAuth
})


export default connect(mapStateToProps,{login}) (Login)