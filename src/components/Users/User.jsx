import styles from './User.module.css'
import userPhoto from '../../assets/images/user.png'
import { NavLink } from 'react-router-dom'


let User = ({user, followingInProgress, unfollow, follow}) => {
  return <div className={styles.userBlock}>
    <span>
      <div>
        <NavLink to={'/profile/' + user.id}>
          <img src={user.photos.small != null ? user.photos.small : userPhoto} alt='ava' className={styles.userPhoto} />
        </NavLink>
      </div>
      <div>
        {user.followed
          ? <button disabled={followingInProgress
            .some(id => id === user.id)}
            onClick={() => { unfollow(user.id) }}>Отписаться</button>
          : <button disabled={followingInProgress
            .some(id => id === user.id)}
            onClick={() => { follow(user.id) }}>Подписаться</button>}
      </div>
    </span>
    <span>
      <span>
        <div className={styles.userName}>{user.name}</div>
        <div>{user.status}</div>
      </span>
      <span>
        <div>{'user.location.country'}</div>
        <div>{'user.location.city'}</div>
      </span>
    </span>
  </div >
}

export default User


