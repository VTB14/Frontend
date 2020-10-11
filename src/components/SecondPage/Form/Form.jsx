import React from 'react'
import style from './Form.module.css'

const Form = (props) => {
  return (
  <div className={style.form}>
    <h3>Введите данные</h3>
    <input autocomplete="off" data-test-id="login" name="login" placeholder='Номер карты'/>
    <input autocomplete="off" data-test-id="login" name="login" placeholder='Сумма перевода'/>
    <button>Отправить</button>
  </div>
  )
}

export default Form