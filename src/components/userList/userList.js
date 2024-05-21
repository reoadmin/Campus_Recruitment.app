import React, { Component } from 'react';
import { userActions } from '../../action/users';
import firebase from 'firebase';
export default class UsersList extends Component {
  componentDidMount() {
    firebase.database().ref('users').on('child_added', (snapshot) => {
      this.props.dispatch(
        userActions.addConnectedUser({
          uid: snapshot.key,
          userPayload: snapshot.val()
        })
      );
    });
  }


  showUsersList(users) {
    if(!users) {
      return [];
    }

    return Object.keys(users).reduce(
      (list, uid) => {
      return [
        ...list,
        {
          uid,
          ...users[uid]
        }
      ];
    }, []);
  }

  render() {
    const { users } = this.props;

    return (



      <ul>

        { this.showUsersList(users).map(user => <li>{ user.firstName }</li>) }

      </ul>
    );
  }
}