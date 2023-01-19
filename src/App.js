import './App.css';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import { Routes, Route } from 'react-router-dom'
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import { Component, Suspense } from 'react';
import { connect } from 'react-redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/preloader/Preloader';
import React from 'react';
import { Navigate } from 'react-router-dom'


const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))

class App extends Component {
  catchAllUnhandledErrors = (reason, promise) => {
    alert('Some error')
    //console.error(promiseRejectionEvent)
  }
  componentDidMount() {
    this.props.initializeApp()
    window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors) 
  }
  componentWillUnmount() {
    window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors)
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
          <Route exact path="/" element={<Navigate to={'/profile'} /> } />
            <Route path='/profile/' element={
              <ProfileContainer />} />
            <Route path='/profile/:userId' element={
              <Suspense fallback={<Preloader />}>
                <ProfileContainer />
              </Suspense>} />
            <Route path="/dialogs/*" element={
              <Suspense fallback={<Preloader />}>
                <DialogsContainer />
              </Suspense>} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default connect(mapStateToProps, { initializeApp })(App)
