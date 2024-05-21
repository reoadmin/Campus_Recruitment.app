/**
 * Created by S jawwad hashmi on 1/28/2017.
 */
import React, { Component, PropTypes } from 'react'
import firebase from 'firebase';
import { Link } from 'react-router'
import { bookingActions } from '../../action/booking';
// Components
import LoginForm from '../../components/signinform/signinform'
import Paper from 'material-ui/Paper'
import CircularProgress from 'material-ui/CircularProgress'
import Snackbar from 'material-ui/Snackbar'

import TextField from 'material-ui/TextField'

const buttonStyle = { width: '100%' }
const fieldStyle = { width: '80%' }

import {browserHistory} from 'react-router';
// redux/firebase
import FlatButton from 'material-ui/FlatButton';
import { connect } from 'react-redux'
import {Tabs, Tab} from 'material-ui/Tabs';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import RaisedButton from 'material-ui/RaisedButton'

import {
    Step,
    Stepper,
    StepLabel,
} from 'material-ui/Stepper';

const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        marginTop:'100px'
    },
    gridList: {
        display: 'flex',
        flexWrap: 'nowrap',
        overflowX: 'auto',
    },
    titleStyle: {
        color: 'rgb(0, 188, 212)',
    },
};


class parkings extends Component {


    componentDidMount() {

        this.props.getbookingSlots(this.props.params.parkingid)

    }
    showUsersList(users) {
        if(!users) {
            return [];
        }
        console.log(users)
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
    componentWillReceiveProps (nextProps) {


    }



    state = {
        finished: false,
        stepIndex: 0,
        startDate: null,
        startTime:null,
        endTime:null,
    };

    handleNext = () => {
    const {stepIndex} = this.state;
    this.setState({
        stepIndex: stepIndex + 1,
        finished: stepIndex >= 2,
    });
};

    _handleStartDate = (event, date) => {

            var currentState = this.state;
            currentState.startDate = date;
            this.setState(currentState);

    };
    _handleStartTime = (event, time) => {
        var currentState = this.state;
        currentState.startTime = time;
        this.setState(currentState);
    };
    _handleEndTime = (event, time) => {
        var currentState = this.state;
        currentState.endTime = time;
        this.setState(currentState);
    };
    handlePrev = () => {
        const {stepIndex} = this.state;
        if (stepIndex > 0) {
            this.setState({stepIndex: stepIndex - 1});
        }
    };
    handleSubmit = () => {
      console.log(this.state)

        this.props.updatebookingSlots(this.state)
        //browserHistory.push('/signin')
    };

    handleFeedback = () => {
      console.log(this.state)


    };

    onDelete = (e) => {
      console.log("jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj")
              const data ={
                  slotid : this.props.params.parkingid,
                  userid:this.props.auth.auth.user.uid
              }
        this.props.cancelbookingSlots(data)

    };


    getStepContent(stepIndex) {
        switch (stepIndex) {
            case 0:
                return 'Select slots for booking...';
            case 1:
                return <DatePicker
                    hintText="Starting Date" value={this.state.startDate}  onChange={this._handleStartDate}  mode="landscape" />
            case 2:
                return  <TimePicker
                    hintText="Starting Time" value={this.state.startTime}  onChange={this._handleStartTime}
                />
            case 3:
                return <TimePicker
                    hintText="Ending Time" value={this.state.endTime}  onChange={this._handleEndTime}
                />;
            default:
                return 'You\'re a long way from home sonny jim!';
        }
    }
    handlefinish = (data) => {


        var currentState = this.state;
        currentState.data = data;
        currentState.user=this.props.auth.auth.user.lastName,
        currentState.userid=this.props.auth.auth.user.uid,
        currentState.slotid=this.props.params.parkingid
        this.setState(currentState);


    };

    render () {

        const {finished, stepIndex} = this.state;
        const contentStyle = {margin: '0 16px'};
        let iconButtonElement = (
            <IconButton
                touch={true}
                tooltip="more"
                tooltipPosition="bottom-left"
            >
                <MoreVertIcon color={grey400} />
            </IconButton>
        );

        let rightIconMenu = (
            <IconMenu iconButtonElement={iconButtonElement}>
                <MenuItem onTouchTap={this.onDelete} >cancel reservation</MenuItem>
            </IconMenu>
        );


        return (
            <div>
                <Tabs>
                    <Tab label="Reservation" >
                        <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
                            <Stepper activeStep={stepIndex}>
                                <Step>
                                    <StepLabel>Select slots</StepLabel>
                                </Step>
                                <Step>
                                    <StepLabel>Select parking Date</StepLabel>
                                </Step>
                                <Step>
                                    <StepLabel>Select Starting Time</StepLabel>
                                </Step>
                                <Step>
                                    <StepLabel>Select Ending Time</StepLabel>
                                </Step>
                            </Stepper>

                            <div style={contentStyle}>
                                {finished ? (
                                        <p>
                                            <RaisedButton
                                                label='finish'
                                                secondary={true}
                                                onTouchTap={this.handleSubmit}
                                            />
                                        </p>
                                    ) : (
                                        <div>
                                            <p>{this.getStepContent(stepIndex)}</p>
                                            <div style={{marginTop: 12}}>
                                                <FlatButton
                                                    label="Back"
                                                    disabled={stepIndex === 0}
                                                    onTouchTap={this.handlePrev}
                                                    style={{marginRight: 12}}
                                                />
                                                <RaisedButton
                                                    label={stepIndex === 4 ? '' : 'Next'}
                                                    primary={true}
                                                    onTouchTap={this.handleNext}
                                                />
                                            </div>
                                        </div>
                                    )}
                            </div>
                        </div>

                        <div style={styles.root}>
                            {
                                this.props.bookings.isloaded ?
                                    <GridList style={styles.gridList} cols={2.2}>
                                        { this.props.bookings.isloaded ? this.showUsersList(this.props.bookings.bookingData).map(tile =>
                                                <GridTile
                                                    key={tile.url}
                                                    title={tile.name + ' ' +tile.bookedbyName }
                                                    actionIcon={<IconButton ><StarBorder color={ tile.booking ?'red':'rgb(0, 188, 212)'} /></IconButton>}
                                                    titleStyle={styles.titleStyle}
                                                    titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                                                    onTouchTap={this.handlefinish.bind(this, tile)}
                                                >
                                                    <img src={tile.url} />
                                                </GridTile>
                                            ):''}
                                    </GridList>:''
                        }

                        </div>
                    </Tab>
                    <Tab label="View Reservation" >
                        <List>
                            <Subheader>Today</Subheader>

                            {
                                this.props.bookings.isloaded ? this.showUsersList(this.props.bookings.bookingData).map(tile =>

                                        tile.bookedby == this.props.auth.auth.user.uid ?
                                            <div>
                                                <ListItem
                                                    leftAvatar={<Avatar src={tile.url} />}
                                                    primaryText={tile.bookedbyName}
                                                    secondaryText={
                                                        <p>
                                                            <span style={{color: darkBlack}}>{tile.name}</span><br />
                                                            I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
                                                        </p>
                                                    }
                                                    secondaryTextLines={2}
                                                />
                                                <Divider inset={true} />
                                            </div>
                                            :''

                                    ):''}

                        </List>
                    </Tab>
                    <Tab
                        label="Cancel reservation"
                    >

                        <List>
                            <Subheader>Today</Subheader>

                            {
                                this.props.bookings.isloaded ? this.showUsersList(this.props.bookings.bookingData).map(tile =>

                                        tile.bookedby == this.props.auth.auth.user.uid ?
                                            <div>
                                            <ListItem
                                                leftAvatar={<Avatar src={tile.url} />}
                                                rightIconButton={rightIconMenu}
                                                primaryText={tile.bookedbyName}
                                                secondaryText={
                                                    <p>
                                                        <span style={{color: darkBlack}}>{tile.name}</span><br />
                                                        I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?
                                                    </p>
                                                }
                                                secondaryTextLines={2}
                                            />
                                                <Divider inset={true} />
                                            </div>
                                            :''

                                    ):''}

                        </List>
                    </Tab>
                    <Tab
                        label="Feedback"
                    >
                        <div>
                            <form style={{padding: '16px',margin:'0px'}} className='LoginForm'  >
                                <TextField
                                    floatingLabelText='Enter your feedback'
                                    name="feedback"
                                    onChange={({ target }) => { this.setState({feedback: target.value}) }}
                                    style={fieldStyle}
                                />

                                <div className='LoginForm-Submit'>
                                    <RaisedButton
                                        label='Send'
                                        primary
                                        type='submit'
                                        style={buttonStyle}
                                    />
                                </div>
                            </form>
                        </div>
                    </Tab>
                </Tabs>
            </div>
        )
    }
/*
    render () {

        return (
            <div>
              <h1>welcome to slots</h1>

                {
                    this.props.bookings.isloaded ? this.showUsersList(this.props.bookings.bookingData).map(user =>
                            <div>{user.name}</div>

                        ):''
                }
            </div>
        )
    }*/
}



//=====================================
//  CONNECT
//-------------------------------------


const mapStateToProps = (state) => {
    console.log(state)
    return {
        auth: state,
        parkings: state.parkingData,
        bookings: state.bookingData
    };
};

export default connect(mapStateToProps, bookingActions)(parkings);