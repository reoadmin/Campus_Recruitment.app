/**
 * Created by Admin on 12/28/2016.
 */
import React, { Component,PropTypes } from 'react'
import { connect } from 'react-redux'
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import ActionFlightTakeoff from 'material-ui/svg-icons/action/flight-takeoff';


class company extends Component {
static propTypes = {
      auth: PropTypes.object.isRequired,
  }
    render () {

        const {auth } = this.props
     console.log(this.props.auth.auth)


        return (

            <div>
                <h4>This is Company Page { this.props.auth.auth.user.email } </h4>
            </div>
        )
    }
}




const mapStateToProps = (state) => {
  //console.log(state)
	return { auth: state };
};

export default connect(mapStateToProps)(company);