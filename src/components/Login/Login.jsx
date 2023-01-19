import { reduxForm } from 'redux-form'
import { required } from '../../utils/validators/validators'
import { createField, Input } from '../common/FormsControls/FormControls'
import { connect } from 'react-redux'
import { login } from '../../redux/auth-reducer'
import { Navigate } from 'react-router-dom'
import style from '../common/FormsControls/FormControls.module.css'
import styles from './../../assets/styles/styles.module.css'


const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField('Email', 'email', [required], Input)}
      {createField('Пароль', 'password', [required], Input, {type: 'password'})}
      {createField(null, 'rememberMe', [], Input, { type: 'checkbox' }, 'Запомнить меня')}

      {captchaUrl && <img src={captchaUrl} alt='captcha' />}
      {captchaUrl && createField('Введите символы', 'captcha', [required], Input, {})}

      {error && <div className={style.formSummaryError}>
        {error}
      </div>
      }
      <div>
        <button className={styles.button}>Логин</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({
  form: 'login'
})(LoginForm)

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
  }

  if (props.isAuth) {
    return <Navigate to={'/profile'} />
  }

  return <div>
    <h1>ЛОГИН</h1>
    <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
  </div>
}

const mapStateToProps = (state) => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login)


