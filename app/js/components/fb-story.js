import React, { Component } from 'react';
import Relay from 'react-relay';
import graphql from 'graphql';

class Story extends React.Component {
  render() {
    var story = this.props.story;
    return (
      <View>
        <Image uri={story.author.profile_picture.uri} />
        <Text>{story.author.name}</Text>
        <Text>{story.text}</Text>
      </View>
    );
  }
}

module.exports = Relay.createContainer(Story, {
  queries: {
      story: function(){
          return graphql `
            Story {
                author {
                  name,
                  profile_picture {
                    uri
                  }
                },
                text
              }
            `;
      }
  }
});