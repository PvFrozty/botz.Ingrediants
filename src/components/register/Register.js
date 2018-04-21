import React from 'react';


class Register extends React.Component {

	constructor(props){
			super(props);
			this.state = {
				email: '',
				password: '',
				name:''
			}
		}

		onNameChange = (event) => {
			this.setState({name:event.target.value});
		}
		onEmailChange = (event) => {
			this.setState({email:event.target.value});
		}

		onPassChange = (event) => {
			this.setState({password:event.target.value});
		}

		onSubmitSignIn = () => {
			console.log(this.state);
			fetch('http://localhost:3000/Register', {
				method: 'post',
				headers: {'Content-Type':'application/json'},
				body: JSON.stringify({
					email: this.state.email,
					password: this.state.password,
					name: this.state.name
				})
			}).then(response => response.json())
			.then(user => {
				if(user){
					this.props.loadUser(user);
					this.props.setRoute('home');
				}
			})
			
		}

	render(){

			const {setRoute} = this.props;
		return(

	

		<div className='pa5'> 
		
		<article className="br2 ba white b--white-1 mv4 w-100 w-80-m w-80-l mw6 center">
			<main className="pa4 black-80 white">
			  <form className="measure center">
			    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
			      <legend className="f2 fw6 ph0 mh0">Register</legend>
			      <div className="mt3">
			        <label className="db fw6 lh-copy f6 fl" htmlFor="name">Name</label>
			        <input className="pa2 input-reset ba bg-transparent white hover-bg-black hover-white w-100"
			         type="text" name="name"  id="name" onChange={this.onNameChange}/>
			      </div>
			      <div className="mt3">
			        <label className="db fw6 lh-copy f6 fl" htmlFor="email-address">Email</label>
			        <input className="pa2 input-reset ba bg-transparent white hover-bg-black hover-white w-100" 
			        type="email" name="email-address"  id="email-address" onChange={this.onEmailChange}/>
			      </div>
			      <div className="mv3">
			        <label className="db fw6 lh-copy f6 fl" htmlFor="password">Password</label>
			        <input className="b pa2 input-reset ba bg-transparent white hover-bg-black hover-white w-100"
			         type="password" name="password"  id="password" onChange={this.onPassChange}/>
			      </div>
			    </fieldset>
			    <div className="">
			      <input className="b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib white"
			       type="submit" onClick={this.onSubmitSignIn} value="Register"/>
			    </div>
			    <div className="lh-copy mt3">
			      <a href="#0" className="f6 link dim white db" onClick={() => setRoute('SignIn')}>Back</a>
			    </div>
			  </form>
			</main>
		</article>
		</div>

		);
	}

}

export default Register;