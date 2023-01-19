import Profile from './Profile'
import React from 'react'
import { connect } from 'react-redux'
import { getStatus, getUserProfile, savePhoto, saveProfile, updateStatus } from '../../redux/profile-reducer'
import { useParams, useLocation, useNavigate, Navigate } from 'react-router-dom'
import { compose } from 'redux'


function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }

  return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component {

  refreshProfile() {
    let userId = this.props.router.params.userId
    if (!userId) {
      userId = this.props.authorizedUserId
    }
    this.props.getUserProfile(userId)
    this.props.getStatus(userId)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.router.params.userId !== prevProps.router.params.userId) {
      this.refreshProfile()
    }
  }

  componentDidMount() {
    this.refreshProfile()
  }

  // componentDidMount() {
  //   let userId = this.props.router.params.userId
  //   if (!userId) {
  //     userId = this.props.authorizedUserId
  //   }
  //   this.props.getUserProfile(userId)
  //   this.props.getStatus(userId)
  // }


  render() {
    if (!this.props.isAuth && !this.props.router.params.userId) {
      return <Navigate to={'/login'} />
    }
    return (
      <Profile {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus} 
        isOwner={!this.props.router.params.userId}
        savePhoto={this.props.savePhoto}/>
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth
})

export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile }),
  withRouter
)(ProfileContainer)

