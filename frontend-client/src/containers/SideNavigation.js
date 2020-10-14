import React from 'react'
import Chat from '../components/Chat'
import Participants from '../components/Participants'

function SideNavigation() {
    return (
        <div className="side-panel">
            {/* <Chat/> */}
            <Participants/>
        </div>
    )
}

export default SideNavigation
