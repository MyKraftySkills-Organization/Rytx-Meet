import React from 'react';
import BottomNavigation from '../../containers/BottomNavigation';
import MainWindow from '../../containers/MainWindow';
import SideNavigation from '../../containers/SideNavigation';
import './Room.css';

function Room() {
    return (
        <div className="main">
            <div className="middle-section">
                <MainWindow/>
                <BottomNavigation/>
            </div>
            <SideNavigation/>
        </div>
    )
}

export default Room
