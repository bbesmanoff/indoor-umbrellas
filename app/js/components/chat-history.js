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
            
            //prepare text file
            if (this.textFile !== null) {
              window.URL.revokeObjectURL(this.textFile);
            }
            this.textFile = window.URL.createObjectURL(new Blob([chatString], {type: 'text/plain'}));
            document.getElementById('download-chat-hist').href = this.textFile;
        }
        else {
          // request failed
        }
    };

    chatRequest.send();
  }

  render() {
      function dateFormatter(cell, row){
        var formattedDate = new Date(parseInt(Date.parse(cell))).toLocaleString();
        return formattedDate;
      }
      
      return (
          <div className="chat-history-table">
              <a id="download-chat-hist" download="chat-log.txt">Download Chats</a>
              <BootstrapTable data={this.state.chatHistoryItems} striped={true} hover={true} search={true}>
                  <TableHeaderColumn dataField="date" isKey={true} dataFormat={dateFormatter}>Date</TableHeaderColumn>
                  <TableHeaderColumn dataField="from">Sender</TableHeaderColumn>
                  <TableHeaderColumn dataField="message">Message</TableHeaderColumn>
              </BootstrapTable>
          </div>
      );
  }
}
