import React, { Component, PropTypes } from 'react';

/* Login form */
import LoginForm from '../components/LoginForm';

/* Redux connect */
import { connect } from 'react-redux';

/* Actions */
import { performLogin } from '../actions';

class Login extends Component {

   constructor(props) {
      super(props)

      /* Bind this */
      this.onSubmit = this.onSubmit.bind(this)

   }

   onSubmit(email, password){
   		this.props.performLogin(email, password)
   		.then(()=>{
   			this.context.router.push(`/`)
   		})
   		.catch(()=>{
   			window.dev&&console.log('failed to log in!')
   		})
   }

   render() {
	   	return (
	   		<section className="login">
	   			<LoginForm 
	   				onSubmit={this.onSubmit}
	   			/>
	   		</section>
	   	)
   }

}

Login.contextTypes = {
	router : PropTypes.object.isRequired
}


const mapStateToProps = (state, props) => ({
   	isLoggingIn : state.user.isLoggingIn
})


export default connect(mapStateToProps, { performLogin })(Login)