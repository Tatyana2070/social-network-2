import { NavLink } from 'react-router-dom'
import s from './Navbar.module.css'


const Navbar = () => {
  return (
    <nav className={s.nav}>
        <div className={s.item}>
          <NavLink to='/profile' className={SelectedLink()}>Профиль</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to='/dialogs' className={SelectedLink()}>Сообщения</NavLink>
          </div>
        <div className={s.item}>
          <NavLink to='/news' className={SelectedLink()}>Мои новости</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to='/music' className={SelectedLink()}>Музыка</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to='/users' className={SelectedLink()}>Пользователи</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to='/settings' className={SelectedLink()}>Настройки</NavLink>
        </div>
      </nav>
  )
}


const SelectedLink = () => {
  return (
    select => select.isActive ? s.activeLink : s.item
  )
}



export default Navbar