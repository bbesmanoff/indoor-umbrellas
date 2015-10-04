import React, { Component } from 'react';

var statusText = '';

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
  handleClick: function(event) {
    //TODO post the status through FB, give the user an alert on success vs failure
    
    console.log('posted status: ' + statusText);
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