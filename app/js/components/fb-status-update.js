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
     FB.api('/me/feed', 'post', {message: statusText}, postCallback);
  },
  render: function() {
    return (
      <button className='post-status-btn' type="button" onClick={this.handleClick}>Post</button>
    );
  }
});

function postCallback(result){
    //Returns the id of the post that was just created
    if(result.id !== null){
         showAlert('alert-success', 'Your status has been posted successfully!');
    } else{
         showAlert('alert-danger', 'There was a problem posting your status.');
    }
}

function showAlert(alerttype, message){
    $('#alert-placeholder').append(
             '<div id="alertdiv" class="alert fade in ' +  alerttype + '"><a class="close" data-dismiss="alert">×</a><strong>Success!  </strong> '+message+'</div>')

    setTimeout(function() { // this will automatically close the alert and remove this if the users doesnt close it in 5 secs
        $("#alertdiv").remove();
    }, 5000);
}

export default class StatusUpdate extends Component {
    
  render() {
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