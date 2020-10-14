import React from 'react';
import Icon from '../components/Icon';

function BottomNavigation() {
    return (
        <div className="bottom-nav-custom">
                <Icon style="fas fa-microphone" title="Mute"/>
                <Icon style="fas fa-video-slash red" title="Video"/>
            
                <Icon style="fas fa-users" title="Participants"/>
                <Icon style="fas fa-comment-alt" title="Chat"/>
            <Icon textStyle="red bold" title="Leave Meeting"/>
        </div>
    ) 
}

export default BottomNavigation;
