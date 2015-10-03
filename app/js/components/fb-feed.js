import React, { Component, Containers } from 'react';
import Relay from 'react-relay';
import graphql from 'graphql';

import Story from './fb-story';

class NewsFeed extends React.Component {
  render() {
    var stories = this.props.viewer.stories; // `viewer` is the active user
    return (
      <View>
        {stories.map(story => <Story story={story} />)}
        <Button onClick={() => this.loadMore()}>Load More</Button>
      </View>
    );
  }

  loadMore() {
    // read current params
    var count = this.props.queryParams.count;
    // update params
    this.props.setQueryParams({
      count: count + 5
    });
  }
}

module.exports = Relay.createContainer(NewsFeed, {
  queryParams: {
    count: 3                             /* default to 3 stories */
  },
  queries: {
    viewer: function(){
       return graphql`
          Viewer {
            stories(first: <count>) {        /* fetch viewer's stories */
              edges {                        /* traverse the graph */
                node {
                  ${Story.getQuery('story')}  /*compose child query */
                }
              }
            }
          }
        `;
    }
  }
});
