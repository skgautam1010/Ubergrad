import React from 'react'
import Introduction from '../Introduction/Introduction';
import Nav from '../Navbar/Navbar';
import Requirements from '../Requirements/Requirements';
import Specialization from '../Specialization/Specialization';
import './App.css';

class App extends React.Component {
  render() {
    return (
    <div className='container'>
        <div className='row row-content'>
            <Nav/>
        </div>
        <Introduction />
        <div className='row row-content'>
          <Specialization />
        </div>
        <Requirements />
    </div>
    )
  }
}


export default App;
