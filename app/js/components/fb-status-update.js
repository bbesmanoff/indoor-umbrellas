import React, { Component } from 'react';

var statusText = '';
var pageAccessToken = '';

var StatusInput = React.createClass({   
  getInitialState: function(){return null;},
  handleChange: function(event){
    statusText = event.target.value;
  },
  render: function() {
    return <textarea type="text" value={this.props.status} onChange={this.handleChange} />;
  }      
});

var PostButton = React.createClass({
  getInitialState: function() {return null;},
  componentDidMount() {
    console.log("mounted");
    //FB JS SDK  
    (function(d, s, id){
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = "//connect.facebook.net/en_US/sdk.js";
       fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk')); 
      
    window.fbAsyncInit = function() {
      FB.init({
        appId      : '819934004772176', //TODO make this private/centralized
        xfbml      : true,
        version    : 'v2.3'
      });
        
      FB.getLoginStatus(function(response){
          pageAccessToken = response.authResponse.accessToken;
           
      });
    };
      
  },
  handleClick: function(event) {
    //TODO post the status through FB, give the user an alert on success vs failure
    console.log("clicked button");
    //Asnyc FB calls
    
    FB.api('/me/feed', 'post', {message: statusText});
  },
  render: function() {
    return (
      <button className='post-status-btn' type="button" onClick={this.handleClick}>Post</button>
    );
  }
});

export default class StatusUpdate extends Component {
    
  render() {
    var statusUpdateText = "";

    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title">{this.props.title}</h3>
        </div>
        <div className="panel-body">
          <p className="text-primary">{this.props.prompt}</p>
          <StatusInput />
          <div className="post-div">
            <PostButton />
          </div>
        </div>
      </div>
    );
  }
}