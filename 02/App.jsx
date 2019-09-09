import React from 'react';
import Navbar from './Navbar';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <>
        <div className="hamburger-icon">&#9776;</div>
        <Navbar />
      </>
    );
  }
}

export default App;
