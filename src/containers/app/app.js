/**
 * Created by Admin on 12/28/2016.
 */
import React, { Component, PropTypes } from 'react'

import Navbar from '../navbar/Navbar'
// Themeing/Styling
import Theme from '../../config/theme/theme'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
// Tap Plugin
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

export default class App extends Component {


    render () {
        return (
            <div>
                <Navbar/>
                {this.props.children}
            </div>
        )
    }
}
