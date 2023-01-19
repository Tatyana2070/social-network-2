import Preloader from '../../common/preloader/Preloader'
import s from './ProfileInfo.module.css'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'
import userPhoto from '../../../assets/images/user.png'
import { useState } from 'react'
import ProfileDataForm from './ProfileDataForm'


const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto, saveProfile }) => {

  let [editMode, setEditMode] = useState(false)

  if (!profile) {
    return <Preloader />
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0])
    }
  }

  const onSubmit = (formData) => {
    saveProfile(formData).then(() => {
      setEditMode(false)
    })
  }


  return (
    <div>
      <div className={s.descriptionBlock}>
        <img src={profile.photos.large || userPhoto} className={s.mainPhoto}
          alt='ava' />
        {isOwner && <input type={'file'} onChange={onMainPhotoSelected} />}

        {editMode
          ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
          : <ProfileData goToEditMode={() => { setEditMode(true) }} profile={profile} isOwner={isOwner} />}

        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      </div>
    </div>
  )
}

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
  return <div>
    {isOwner && <div><button onClick={goToEditMode}>Редактировать</button></div>}
    <div>
      <b>Имя</b>: {profile.fullName}
    </div>
    <div>
      <b>Ищу работу</b>: {profile.lookingForAJob ? 'да' : 'нет'}
    </div>
    {profile.lookingForAJob &&
      <div>
        <b>Мои профессиональные навыки</b>: {profile.lookingForAJobDescription}
      </div>
    }
    <div>
      <b>Обо мне</b>: {profile.aboutMe}
    </div>
    <div>
      <b>Контакты</b>: {Object.keys(profile.contacts).map(key => {
        return <Contact contactTitle={key} contactValue={profile.contacts[key]} />
      })}
    </div>
  </div>
}


const Contact = ({ contactTitle, contactValue }) => {
  return <div className={s.contact}><b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileInfo
