
import React, { Component } from 'react';

var socket = io.connect('http://localhost:8080');
var that;

export default class MessageList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages:[{
                timeStamp: Date.now(), 
				text: "Welcome to the test chat app!"
            }]
        }
        that = this;
      }
    
    componentDidMount() {
        // register event handler for new messages received from server
		socket.on('messageAdded', this.onMessageAdded);
	}
	onMessageAdded(message) {
		// update the array (setState re-renders the component)
		that.setState({messages: that.state.messages.concat(message)});
	}
	postIt(e) {
        // prevent form submission which reloads the page
		e.preventDefault();
 
		// get the message
		var input = document.getElementById('message-input');
		var message = {
			timeStamp: Date.now(),
			text: input.value
		};
 
		// add it locally for this client
		that.setState({messages: that.state.messages.concat(message)});
		/**
		 * Alternatively you could have the server emit to ALL clients,
		 * including the one who sent the message. In that case the message
		 * would go from your client to the server and back before it got added
		 * to the message list. 
		 */
 
		// clear the input
		input.value = "";
 
		// emit to server so other clients can be updated
		socket.emit('messageAdded', message);
	}
    
    render() {
        return (
                <div>
                    <h2>Messages</h2>
                    <ul className="message-list">
                        {this.state.messages.map(function(message) {
                            return(
                                <li key={message.timeStamp}>{message.text}</li>
                            );
                        })}
                    </ul>
                    <form onSubmit={this.postIt} ref={(ref) => this.form = ref}>
                        <input type="text" id="message-input" size="40" placeholder="Type your message here" />
                        <button>Post it!</button>
                    </form>
                </div>
        );
    }
}