import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import CalendarItem from './calendar-item';

export default class ChatHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {chatHistoryItems:[]}
  }

  componentDidMount() {
    var chatRequest = new XMLHttpRequest();
    chatRequest.open('GET', `/api/chat/`);
    chatRequest.onload = () => {
        if (chatRequest.status === 200) {
            var chatString = chatRequest.responseText;
            var chatHistoryItems = JSON.parse(chatString);
            this.setState({
              chatHistoryItems
            });
        }
        else {
          // request failed
        }
    };

    chatRequest.send();
  }

  render() {
      return (
          <BootstrapTable data={this.state.chatHistoryItems} striped={true} hover={true} search={true}>
              <TableHeaderColumn dataField="date" isKey={true}>Date</TableHeaderColumn>
              <TableHeaderColumn dataField="from">Sender</TableHeaderColumn>
              <TableHeaderColumn dataField="message">Message</TableHeaderColumn>
          </BootstrapTable>
      );
  }
}
