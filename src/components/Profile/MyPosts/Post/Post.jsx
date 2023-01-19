import s from './Post.module.css'

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://kartinkin.net/uploads/posts/2022-03/1646311422_4-kartinkin-net-p-kartinki-loshadok-5.jpg" alt='ava'/>
      { props.message }
      <div>
        <span>like </span>{ props.likesCount }
      </div>
    </div>
  )
}

export default Post