import React from 'react';
import style from './FormLogin.module.css';
import {Field, reduxForm} from 'redux-form';
import {required, maxLengthCreator} from '../../../utils/validators';
import { Input } from '../../FormsControls/FormsControls';
import { connect } from 'react-redux';
import { login } from '../../../redux/authReducer';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const maxLength10 =  maxLengthCreator(10);

const FormLogin = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field 
      autoComplete="off" 
      placeholder='Логин' 
      name="login" 
      component={Input}
      validate={[required, maxLength10]}
      type="login"
      />
      <Field 
      autoComplete="off" 
      placeholder='Пороль' 
      name="password" 
      component={Input}
      validate={[required, maxLength10]}
      type="password"
      />
      <button> Войти </button>
      <NavLink to="/second" className={style.next}><div>NEXT</div></NavLink>
    </form>
  )
}
const LoginReduxForm = reduxForm({form: 'login'})(FormLogin)

const Login = (props) => {

  const onSubmit = (formData) => {
    let key = "_";
    while(key.length < 250) {key = key + Math.random().toString(36).substr(2, 10)};
    
     


    console.log(formData);
    console.log(key);

    
    // props.login(formData.login, formData.password)
  }

  return (
    <div className={style.form}>
      <h1>Вход</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  )
}

export default connect (null, {login}) (Login);