import React from 'react'
import { connect } from 'react-redux';
import actions from '../../../redux/actions';

import LoginWithSalseForce from '../../components/Buttons/Login/LoginWithSalseForce'
import logoUrl from '../../../assets/logo.png'
import './index.scss'

const LoginInWithSalseForcePage = ({ login }) => {
  function handleLogin() {
    const params = {
      client_id: '3MVG96hCAx1bhPaglDTyFCa4LhXrXpBHi7cHCTNOI0xtdA_6FsjUqdjAmcVFXfsTDonw7TOCcoXA_FKua5DiR',
      client_secret: '92D4E394B393940DF3592AFD15C59D5B0ED3080F71CD780E69EA8B6656AC9193',
      redirect_uri : 'https://localhost:3000/oauth/_callback',
      grant_type: 'password',
      username: 'salescope@cloudadvisory.io',
      password: 'Cloudadv2020$'
    }

    login(params);    
  }

  return (
    <div className="login-salseforce--wrapper">
      <div className="login-salseforce--inner">
        <div className="logo-img"><img src={logoUrl} alt="logo" /></div>
        <LoginWithSalseForce title="Login with salseforce" handleLogin={handleLogin} />
      </div>
    </div>
  )
}


const mapStateToProps = state => ({
  selectedIndex: state.auth.selectedIndex,
});

const mapDispatchToProps = dispatch => ({
  login: (params) => {
    dispatch(actions.login(params));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginInWithSalseForcePage);

