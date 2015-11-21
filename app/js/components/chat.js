import React, { Component } from 'react';
import ChatMessage from './chat-message';

//Rebuild chat server location
var getUrl = window.location;
var baseUrl = getUrl.protocol + "//" + getUrl.hostname;
var socket = io.connect(baseUrl +":3030"); //same port from serverjs chat server
var that;

export default class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages:[
        {
          timeStamp: Date.now(),
          user: 'SYSTEM',
          text: "Welcome to the chat!",
          userImgSrc: '../../images/defaultUserImage.png', 
          received: true
        }
      ]
    }
    that = this;
  }
    
  componentDidMount() {
    // register event handler for new messages received from server
    socket.on('messageAdded', this.onMessageAdded);
        
    //listen for chat minimize/maximize
    var input = document.getElementById('minim_chat_window');
    var messageList = document.getElementById('message-list');
    var panelFooter = document.getElementById('panel-footer');
        
    input.addEventListener("click", function(e){ 
      if (!input.classList.contains('panel-collapsed')) {
        input.classList.add('panel-collapsed');
        input.classList.remove('glyphicon-minus');
        input.classList.add('glyphicon-plus');
        messageList.classList.add('hidden');
        panelFooter.classList.add('hidden');
      } else {
        input.classList.remove('panel-collapsed');
        input.classList.remove('glyphicon-plus');
        input.classList.add('glyphicon-minus');
        messageList.classList.remove('hidden');
        panelFooter.classList.remove('hidden');
      }
    });
  }
	
  onMessageAdded(message) {
    // update the array (setState re-renders the component)
    message.received = true;
    that.setState({messages: that.state.messages.concat(message)});
  }
    
  getCookieValue(cname){
    var match = document.cookie.match(new RegExp(cname + '=([^;]+)'));
    if (match) return match[1];
  }
    
  postIt(e) {
    // prevent form submission which reloads the page
    e.preventDefault();
 
    // get the message
    var input = document.getElementById('message-input');
    var timeStamp = Date.now(),
        user = that.getCookieValue("username"),
        msgText = input.value;
    var message = {
      timeStamp: timeStamp,
      user: user,
      text: msgText, 
      userImgSrc: that.getCookieValue("userPictureSrc"),
      received: false
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
    
    //post chat to api endpoint
    that.postChat(user, timeStamp, msgText);
  }

  postChat(user, timeStamp, msgText){
    const chatData = {
      'from': user,
      'date': timeStamp,
      'message': msgText  
    };
      
    var chatRequest = new XMLHttpRequest();
    chatRequest.open('POST', `/api/chat/`);
    chatRequest.setRequestHeader('Content-Type', 'application/json');
    chatRequest.send(JSON.stringify(chatData));
  }
    
  render() {
    var messages = this.state.messages
    .map((e) => {
      return (<ChatMessage key={e.timeStamp} user={e.user} message={e.text} timeStamp={e.timeStamp} userImg={e.userImgSrc} received={e.received}/>);
    });
            
    return (
      <div className="row chat-window col-xs-5 col-md-3" id="chat_window_1">
        <div className="col-xs-12 col-md-12">
          <div className="panel panel-default">
            <div className="panel-heading top-bar">
              <div className="col-md-8 col-xs-8">
                <h3 className="panel-title"><span className="glyphicon glyphicon-comment"></span> Chat</h3>
              </div>
              <div className="col-md-4 col-xs-4 minimize-chat-div">
                <a href="#"><span id="minim_chat_window" className="glyphicon glyphicon-minus icon_minim"></span></a>
              </div>
            </div>
                        
            <div className="message-list container-fluid" id="message-list">
              {messages}
            </div>
            <div className="panel-footer" id="panel-footer">
              <form onSubmit={this.postIt}>
                <input type="text" id="message-input" placeholder="Type your message here" />
                <button>Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}