import React from 'react';
import Icon from '../components/Icon';
import html2canvas from 'html2canvas';
import {saveAs} from 'file-saver';

class BottomNavigation extends React.Component {
    screenshot(){
        // html2canvas(this.state.element).then(canvas => {
        //     // document.body.appendChild(canvas);
        //     canvas.toBlob(function (blob) {
        //         saveAs(blob, "prettyimage.png");
        //     });
        // });
    
    }
    componentDidMount() {
        // this.setState(this.state.element,document.querySelector("#capture") );
        // html2canvas(element).then(canvas => {
        //     document.body.appendChild(canvas);
        //     canvas.toBlob(function (blob) {
        //         saveAs(blob, "prettyimage.png");
        //     });
        // });

        // saveAs('/', 'image.jpg');
    }

    render() {
        return (
            <div className="bottom-nav-custom">
                <Icon classes="fas fa-microphone" title="Mute" />
                <Icon classes="fas fa-video-slash red" textStyle="red" title="Video" />
                <Icon classes="fas fa-camera" title="Screenshot"/>
                <Icon classes="fas fa-arrow-up green" textStyle="green" title="Share Screen"/>
                <Icon classes="fas fa-users" title="Participants" />
                <Icon classes="fas fa-comment-alt" title="Chat" />
                <Icon textStyle="red bold" title="Leave Meeting" />
            </div>
        );
    }

}

export default BottomNavigation;
