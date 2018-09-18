/* global gapi */

import React from 'react';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.onSignIn = this.onSignIn.bind(this);
  }

  componentDidMount() {
    gapi.signin2.render('my-signin2', {
      scope: 'profile email',
      width: 250,
      height: 50,
      longtitle: true,
      theme: 'light',
      onsuccess: this.onSignIn,
    });
  }

  onSignIn(googleUser) {
    const profile = googleUser.getBasicProfile();
    this.props.afterSignIn(profile.getName());
    this.props.changeView('home');
  }

  render() {
    return (
      <div>
        <div id="my-signin2" data-onsuccess={this.onSignIn} />
      </div>
    );
  }
}

export default SignIn;
