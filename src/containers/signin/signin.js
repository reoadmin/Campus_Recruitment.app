import React, { Component, PropTypes } from 'react'
import firebase from 'firebase';
import { authActions } from '../../action/auth';
// Components
import LoginForm from '../../components/signinform/signinform'
import Paper from 'material-ui/Paper'
import CircularProgress from 'material-ui/CircularProgress'
import Snackbar from 'material-ui/Snackbar'
import RaisedButton from 'material-ui/RaisedButton'

import {browserHistory} from 'react-router';
// redux/firebase
import { connect } from 'react-redux'

class signin extends Component {

 static propTypes = {
      auth: PropTypes.object.isRequired,
      signInWithCustom: PropTypes.func.isRequired
  }



 // Redirect when logged in
  componentWillReceiveProps (nextProps) {
  //console.log(nextProps)
    const { auth } = this.props;

            if (auth.isLoggedin && !nextProps.auth.auth.isLoggedin) {
                browserHistory.push('/signin')
            }
            else if (!auth.isLoggedin && nextProps.auth.auth.isLoggedin && nextProps.auth.auth.user.role=="user" ) {
                browserHistory.push('/'+nextProps.auth.auth.user.uid);
            }
            else if (!auth.isLoggedin && nextProps.auth.auth.isLoggedin && nextProps.auth.auth.user.role=="admin" ) {
                browserHistory.push('/admin/'+nextProps.auth.auth.user.uid);
            }

  }

  handleLogin = (loginData) => {
    this.props.signInWithCustom(loginData)
    // browserHistory.push('/user')
  }


  render () {
      
    return (
      <div className='Login' style={{marginLeft: '340px',marginTop: '67px',width: '50%'}}>
        <Paper className='Login-Panel'>
          <LoginForm onLogin={this.handleLogin} />
        </Paper>

      </div>
    )
  }
}



//=====================================
//  CONNECT
//-------------------------------------


const mapStateToProps = (state) => {
  //console.log(state)
	return { auth: state };
};

export default connect(mapStateToProps, authActions)(signin);