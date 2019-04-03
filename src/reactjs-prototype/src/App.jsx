import React from 'react';
import './App.css';
import SideBar from './components/SideBar';
import NavBar from './components/NavBar';

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <NavBar />
                <div class="container-fluid">
                    <div class="row">
                      <SideBar />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default App;
