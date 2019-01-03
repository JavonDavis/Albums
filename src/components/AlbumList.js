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

  renderAlbums() {
    return this.state.albums.map(album => <Text>{album.title}</Text>);
  }

  render() {
    console.log(this.state);

    return (
      <View>
        {this.renderAlbums()}
      </View>
    );
  }
}

export default AlbumList;
