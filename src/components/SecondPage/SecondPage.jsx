import React from 'react'
import Form from './Form/Form'
import style from './SecondPage.module.css'

const SecondPage = (props) => {
  return (
    <div className={style.container}>
      <h2>Перевод денег</h2>
      <div className={style.content}>
        <div className={style.menu}>
          <div>
            На банковскую карту
          </div>
        </div>

        <Form />
      </div>
    </div>
  )
}

export default SecondPage