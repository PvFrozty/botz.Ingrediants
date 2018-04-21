import React from 'react';
import botlogo from '../navigation/NanobotzGold.png';
import Tilt from 'react-tilt';

class SignIn extends React.Component {

	constructor(props){
			super(props);
			this.state = {
				signInEmail: '',
				signInPass: ''
			}
		}

		onEmailChange = (event) => {
			this.setState({signInEmail:event.target.value});
		}

		onPassChange = (event) => {
			this.setState({signInPass:event.target.value});
		}

		onSubmitSignIn = () => {
			console.log(this.state);
			fetch('http://localhost:3000/SignIn', {
				method: 'post',
				headers: {'Content-Type':'application/json'},
				body: JSON.stringify({
					email: this.state.signInEmail,
					password: this.state.signInPass
				})
			}).then(response => response.json())
			.then(user => {
				if(user.id){
					this.props.loadUser(user);
					this.props.setRoute('home');
				}
			});
			
		}

		// toReg = () => {
		// 	this.props.setRoute('Register');
		// }


	render(){

		return(
		<div className='pa5'> 
		<div className='br2 center mv4 w-80 mw5'>
				<Tilt className="Tilt br2 br-black bg-white shadow-4 ma2 center pa2" options={{ max : 25 }} style={{ height: 200, width: 200 }} >
 					<div className="Tilt-inner pa3"> 
 						<img alt='Nanobotz Logo' src={botlogo} />
 					</div>
				</Tilt>
		</div>
		<article className="br2 ba white b--white-1 mv4 w-100 w-80-m w-80-l mw5 center">
			<main className="pa4 black-80 white">
			  <form className="measure center">
			    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
			      <legend className="f2 fw6 ph0 mh0">Sign In</legend>
			      <div className="mt3">
			        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
			        <input onChange={this.onEmailChange} className="pa2 input-reset ba bg-transparent white hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
			      </div>
			      <div className="mv3">
			        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
			        <input onChange={this.onPassChange} className="b pa2 input-reset ba bg-transparent white hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
			      </div>
			    </fieldset>
			    <div className="">
			      <input  onClick={this.onSubmitSignIn} className="b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib white" type="button" value="Sign in"/>
			    </div>
			    <div className="lh-copy mt3">
			      <a  className="f6 link dim white db" onClick={() => this.props.setRoute('Register')}>Sign up</a>
			    </div>
			  </form>
			</main>
		</article>
		</div>
		);
	}
	

}

export default SignIn;