import preloader from '../../../assets/images/preloader.gif';
import style from './Preloader.module.css'

const Preloader = (props) => {
  return <img className={style.preloader} src={preloader} alt='preloader' /> 
}

export default Preloader
