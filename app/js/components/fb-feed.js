import React, { Component, Containers } from 'react';

import Story from './fb-story';

export default class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {feed:[]}
  }

  componentDidMount() {
    var that = this;
      
    //Asnyc FB calls
    window.fbAsyncInit = function() {
      FB.init({
        appId      : '819934004772176', //TODO make this private/centralized
        xfbml      : true,
        version    : 'v2.3'
      });
        
      var pageAccessToken = '';
      var fbStatusRetrieved = FB.getLoginStatus(function(response){
          pageAccessToken = response.authResponse.accessToken;
          
          FB.api("/me/feed", {access_token:pageAccessToken}, (response) => {
              if (response && !response.error) {
                var feed = response.data;
                that.setState({
                  feed
                });
              } else{}
            }
          );
          
          //get and store the fb user name/picture
          FB.api("/"+response.authResponse.userID, {access_token:pageAccessToken}, (response) => {
              if (response && !response.error) {
                document.cookie="username="+response.name;
              } else{}
            }
          );
          FB.api("/"+response.authResponse.userID+"/picture?type=small", {access_token:pageAccessToken}, (response) => {
              if (response && !response.error) {
                var userData = response.data;
                document.cookie="userPictureSrc="+userData.url;
              } else{}
            }
          );
      });
    };
      
    //FB JS SDK  
    (function(d, s, id){
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = "//connect.facebook.net/en_US/sdk.js";
       fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));  
  }

  render() {
    var feed = this.state.feed
    .filter((e) => {
      return (e.message || e.story);
    })
    .map((e) => {
      return (<Story key={e.id} created={e.created_time} message={e.message} story={e.story} />);
    });
    return (
      <div>
        {feed}
      </div>
    );
  }
}