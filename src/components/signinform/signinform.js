import React, {Component, PropTypes} from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import style from './signinform.scss';
const buttonStyle = { width: '100%' }
const fieldStyle = { width: '80%' }

export default class signinForm extends Component {

  static propTypes = {
    onLogin: PropTypes.func
  }

  state = {
    errors: { email: null, password: null }
  }


  render () {
    const { onLogin } = this.props
    const { errors } = this.state

    const handleSubmit = (e) => {
      e.preventDefault()
      const { email, password, errors } = this.state

      if (!email || !password) {
        if (!email) errors.email = 'Email is Required'
        if (!password) errors.password = 'Password is Required'
        return this.setState({ errors })
      }

      this.setState({ errors: { email: null, password: null }})

      onLogin({ email, password })
    }

    return (
      <form style={{padding: '16px',margin:'0px'}} className='LoginForm' onSubmit={handleSubmit}>
        <TextField
          floatingLabelText='Email'
          name="email"
          onChange={({ target }) => { this.setState({email: target.value}) }}
          errorText={errors.email}
          style={fieldStyle}
        />
        <TextField
          floatingLabelText='Password'
          name='password'
          type='password'
          errorText={errors.password}
          onChange={({ target }) => { this.setState({password: target.value}) }}
          style={fieldStyle}
        />

        <div className='LoginForm-Submit'>
          <RaisedButton
            label='Login'
            primary
            type='submit'
            style={buttonStyle}
          />
        </div>
      </form>
    )
  }
}
