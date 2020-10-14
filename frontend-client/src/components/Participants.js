import React from 'react'
import Person from './Person'

function Participants() {
    return (
        <div className="participants">
            <h3 className="center">Participants</h3>
            <div className="share-link">
                <span>Share Meeting Link</span>
                <i className="fa fa-share-alt"></i>
            </div>
            <div className="participants-list">
                <Person style="fa fa-user green" name="Akshit Batra"/>
                <Person style="fa fa-user red" name="Some other guy"/>
                <Person style="fa fa-user green" name="Some other guy"/>
                <Person style="fa fa-user green" name="Some guy"/>
                <Person style="fa fa-user red" name="Random"/>
                <Person style="fa fa-user green" name="Some other guy"/>
                <Person style="fa fa-user green" name="Guy"/>
            </div>
        </div>
    )
}

export default Participants
