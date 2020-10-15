import React from 'react';
import BottomNavigation from '../../containers/BottomNavigation';
import MainWindow from '../../containers/MainWindow';
import SideNavigation from '../../containers/SideNavigation';
import './Room.css';

class Room extends React.Component {

    render(){
        return (
            <div className="main" id="capture">
                <div className="middle-section">
                    <MainWindow/>
                    <BottomNavigation />
                </div>
                <SideNavigation />
            </div>
        );
    }
    
}

export default Room
