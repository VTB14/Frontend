import React from 'react'
import style from './FirstPage.module.css'
import FormLogin from './FormLogin/FormLogin'

const FirstPage = (props) => {
 
  return (
    <div className={style.container}>

      <div className={style.content}>
        <div className={style.top}>
          <h2> Портал клиента </h2>
          <div> Команда №14 </div>
        </div>

        <FormLogin />

        <div className={style.bottom}></div>
      </div>

      <div className={style.image}>
        <h2>Добро пожаловать!</h2>
        <img src={require('../../img/defense.png')} alt="icon" />
        <h3>Вместе с нами жизнь стала безопаснее!</h3>
      </div>

    </div>
  )
}

export default FirstPage