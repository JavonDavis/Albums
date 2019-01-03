import React, { Component } from 'react';
import { View, Text } from 'react-native';

class AlbumList extends Component {
  state = { albums: [] };

  async componentWillMount() {
      console.log('componentWillMount in AlbumList');
      try {
        const response = await fetch('https://rallycoding.herokuapp.com/api/music_albums');
        const jsonData = await response.json();
        // console.log(jsonData);
        this.setState({ albums: jsonData });
      } catch (error) {
        console.log(error);
      }
  }

  render() {
    console.log(this.state);

    return (
      <View>
        <Text> Album List!! </Text>
      </View>
    );
  }
}

export default AlbumList;
