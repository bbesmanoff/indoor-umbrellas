import React, { Component } from 'react';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-2">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="/">Indoor Umbrellas</a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-2">
            <ul className="nav navbar-nav">
              <li className={this.props.page=="Home"?"active":""}><a href="/index.html">Home <span className="sr-only">(current)</span></a></li>
            </ul>
            <ul className="nav navbar-nav">
              <li className={this.props.page=="Calendar"?"active":""}><a href="/calendar.html">Calendar <span className="sr-only">(current)</span></a></li>
            </ul>
            <ul className="nav navbar-nav">
              <li className={this.props.page=="Stocks"?"active":""}><a href="/stocks.html">Stocks <span className="sr-only">(current)</span></a></li>
            </ul>
            <ul className="nav navbar-nav">
              <li className={this.props.page=="Chat"?"active":""}><a href="/chat.html">Temp Chat <span className="sr-only">(current)</span></a></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="/logout">Logout</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
