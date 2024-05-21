/**
 * Created by Admin on 12/28/2016.
 */


import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Route, IndexRoute, Router } from 'react-router'
import App from '../../containers/app/app'
import Home from '../../containers/home/home'
import signup from '../../containers/signup/signup'
import signin from '../../containers/signin/signin'
import userhome from '../../containers/userhome/userhome'
import user from '../../containers/user/user'
import parkings from '../../containers/parkings/parkings'
import admin from '../../containers/admin/admin'

const requireAuth = (nextState, replace) => {
    // if (!auth.isAdmin()) {
    //     // Redirect to Home page if not an Admin
    //     replace({ pathname: '/' })
    // }

   // console.log (nextState)
}




 //  <Route path='user' component={userhome} onEnter={requireAuth} >
        //     <Route path=":userid" component={user} data={data}/>
        //     <Route path=":groupid" component={group} data={data}/>
        // </Route>
export default function Root({history, store}) {
    return (
<Provider store={store}>
  <Router history={history}>
     <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route path='signup' component={signup} />
         <Route path='signin' component={signin} />
         <Route path='' component={userhome} onEnter={requireAuth}>
              <Route path="/:userid" component={user}>
                  <Route path="parkings/:parkingid" component={parkings}/>
              </Route>
              <Route path="admin/:userid" component={admin}/>
         </Route>
    </Route>
  </Router>
 </Provider>
    );
}

Root.propTypes = {
    history: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired
};

