import { NavLink } from 'react-router-dom'
import s from './Header.module.css'
import components from './../../assets/styles/styles.module.css'

const Header = (props) => {
  return (
    <header className={s.header}>
      <img src='https://elevagedelahart.be/____impro/1/onewebmedia/00148-Horse-logo-design-free-logo-template-02.png?etag=%2278e0-570e1202%22&amp;sourceContentType=image%2Fpng' alt='logo' />

      <div className={s.loginBlock}>
        {props.isAuth
          ? <div>props.login</div> && <button className={components.button} onClick={props.logout}>Выйти</button>
          : <NavLink to={'/login'}>Логин</NavLink>}
      </div>
    </header>
  )
}

export default Header