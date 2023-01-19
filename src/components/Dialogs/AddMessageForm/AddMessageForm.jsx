import { Field } from 'redux-form'
import { Textarea } from '../../common/FormsControls/FormControls'
import { maxLengthCreator, required } from '../../../utils/validators/validators'
import components from './../../../assets/styles/styles.module.css'

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea} validate={[required, maxLengthCreator(50)]}name='newMessageBody' placeholder='Добавьте сообщение' />
      </div>
      <div>
        <button className={components.button}>Отправить</button>
      </div>
    </form>
  )
}

export default AddMessageForm