/**
 * Created by Admin on 12/28/2016.
 */
import React, { Component,PropTypes } from 'react'
import { connect } from 'react-redux'
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import ActionFlightTakeoff from 'material-ui/svg-icons/action/flight-takeoff';


class admin extends Component {
static propTypes = {
      auth: PropTypes.object.isRequired,
  }
    render () {

        const {auth } = this.props
     console.log(this.props.auth.auth)


        return (

            <div>
                <Tabs>
                    <Tab label="Users" >

                    </Tab>
                    <Tab label="View Locations" >

                    </Tab>
                    <Tab
                        label="View slots"
                    >
                        
                    </Tab>
                    <Tab
                        label="Feedback"
                    ><div>

                        </div>
                    </Tab>
                </Tabs>
            </div>
        )
    }
}




const mapStateToProps = (state) => {
  //console.log(state)
	return { auth: state };
};

export default connect(mapStateToProps)(admin);