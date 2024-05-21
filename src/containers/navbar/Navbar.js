import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import firebase from 'firebase';
import { authActions } from '../../action/auth';
import {browserHistory} from 'react-router';
// redux/firebase
import { connect } from 'react-redux'
// ...

// Components
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import FlatButton from 'material-ui/FlatButton'
import Avatar from 'material-ui/Avatar'
const buttonStyle = { color: 'white' }
const stockPhotoUrl = 'https://s3.amazonaws.com/kyper-cdn/img/User.png'
const originSettings = { horizontal: 'right', vertical: 'bottom' }
const avatarSize = 50

  class Navbar extends Component {

 static propTypes = {
      auth: PropTypes.object.isRequired,
      signOut: PropTypes.func.isRequired
    }

    state = {
        open: false
    }

handleLogin = (loginData) => {
    this.props.signOut()
     browserHistory.push('/')
  }

  render () {
const { auth } = this.props;
      const mainMenu = (
      <div className='Navbar-Main-Menu' >
        <FlatButton
          label='Sign Up'
          style={buttonStyle}
          onClick={() => browserHistory.push('/signup')}
        />
        <FlatButton
          label='Login'
          style={buttonStyle}
          onClick={() => browserHistory.push('/signin')}
        />
      </div>
    )

const rightMenu = auth.auth.user ? (
       <FlatButton
          label='LogOut'
          style={buttonStyle}
          onClick={this.handleLogin} 
        />
    ) : mainMenu

   /* return (
      <AppBar
      title={
          <Link to='/' style={buttonStyle}>
            iq
          </Link>
        }
        className='Navbar'
        iconElementRight={mainMenu}
      />
    )*/

      return(
          <div>

          <AppBar title="Panacloud Parking System" className='Navbar' showMenuIconButton={false} iconElementRight={rightMenu} />
        
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

export default connect(mapStateToProps, authActions)(Navbar);