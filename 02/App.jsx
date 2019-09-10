import React from 'react';
import Navbar from './Navbar';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navbarDisplay: false,
    };
    this.toggleNavBar = this.toggleNavBar.bind(this);
  }

  toggleNavBar() {
    this.setState({
      navbarDisplay: !this.state.navbarDisplay,
    });
  }

  render() {
    return (
      <>
        <div className="hamburger-icon" onClick={this.toggleNavBar}>&#9776;</div>
        <Navbar navbarDisplay={this.state.navbarDisplay} />
      </>
    );
  }
}

export default App;
