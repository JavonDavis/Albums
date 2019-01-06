import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';

import AlbumDetail from './AlbumDetail';

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
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />
    );
  }

  render() {
    console.log(this.state);

    return (
        <ScrollView>
            <View>
                {this.renderAlbums()}
            </View>
        </ScrollView>
    );
  }
}

export default AlbumList;
