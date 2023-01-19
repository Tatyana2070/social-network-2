import { reduxForm } from 'redux-form'
import { createField, Input, Textarea } from '../../common/FormsControls/FormControls'
import style from '../../common/FormsControls/FormControls.module.css'

const ProfileDataForm = ({ handleSubmit, profile, error }) => {
  return <form onSubmit={handleSubmit}>
    <div><button>Сoхранить</button></div>
    {error && <div className={style.formSummaryError}>
      {error}
    </div>
    }
    <div>
      <b>Имя</b>: {createField('Полное имя', 'fullName', [], Input)}
    </div>
    <div>
      <b>Ищу работу</b>: {createField('', 'lookingForAJob', [], Input, { type: 'checkbox' })}
    </div>
    <div>
      <b>Мои профессиональные навыки</b>: {createField('Мои навыки', 'lookingForAJobDescription', [], Textarea)}
    </div>
    <div>
      <b>Обо мне</b>: {createField('Обо мне', 'aboutMe', [], Textarea)}
    </div>
    <div>
      <b>Контакты</b>: {Object.keys(profile.contacts).map(key => {
        return <div key={key} className='s.contact'>
          <b>{key}: {createField(key, 'contacts.' + key, [], Input)}</b>
        </div>
      })}
    </div>
  </form>
}

const ProfileDataFormReduxForm = reduxForm({ form: 'edit-profile', enableReinitialize: true, destroyOnUnmount: false })(ProfileDataForm)

export default ProfileDataFormReduxForm