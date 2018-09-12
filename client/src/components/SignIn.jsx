/* global gapi */

import React from 'react';

class SignIn extends React.Component{

  constructor(props){
	super(props);
	this.onSignIn = this.onSignIn.bind(this)
  }

  componentDidMount() {
	console.log('this mounted')
	gapi.signin2.render('my-signin2', {
	  'scope': 'profile email',
	  'width': 250,
	  'height': 50,
	  'longtitle': true,
	  'theme': 'light',
	  'onsuccess': this.onSignIn
	});
  }

  onSignIn(googleUser) {
	let profile = googleUser.getBasicProfile();
	this.props.afterSignIn(profile.getName());
	console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
	console.log('Name: ' + profile.getName());
	console.log('Image URL: ' + profile.getImageUrl());
	console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  }

  render() {
	return(
	  <div>
		<div id="my-signin2" data-onsuccess={this.onSignIn}></div>
	  </div>
	)
  }
}

export default SignIn