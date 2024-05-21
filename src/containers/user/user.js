/**
 * Created by Admin on 12/28/2016.
 */
import React, { Component,PropTypes } from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router'
import { connect } from 'react-redux';
import UsersList from '../../components/userList/userList';
import LoginForm from '../../components/signinform/signinform'
import { parkingActions } from '../../action/parking';
class user extends Component {
static propTypes = {
      auth: PropTypes.object.isRequired,
  }

    componentDidMount() {
        this.props.getParking()

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
    render () {





   const { dispatch, parkings ,auth } = this.props;

        return (
<div>
            {
        !this.props.children ? <div style={{display: 'inline-flex', margin: '20px'}}>


                {

                    this.props.parkings.isloaded ? this.showUsersList(this.props.parkings.parkingData).map(user =>

                            <Card style={{width: '300px', marginLeft: '5px', marginRight: '30px'}}>


                                <CardMedia
                                    overlay={<CardTitle title={user.name} subtitle="Overlay subtitle"/>}
                                >
                                    <img src={user.url} style={{}}/>
                                </CardMedia>
                                <CardTitle style={{textDecoration:'none'}} title={
                                    <Link  style={{textDecoration:'none'}} to={`/${this.props.params.userid}/parkings/${user.uid}` }>
                                        {user.name}
                                    </Link>
                                } subtitle="Card subtitle"/>
                                <CardText>

                                    {user.name}
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                                </CardText>
                            </Card>
                        ) : ''



                }
            </div> :<div>{this.props.children}</div>

         }


</div>
        )
    }
}




const mapStateToProps = (state) => {
  console.log("users page "+state)
	return {

        auth: state.auth ,
        parkings: state.parkingData
        };
};

export default connect(mapStateToProps,parkingActions)(user);