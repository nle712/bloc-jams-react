import React, { Component } from 'react';
import  albumData from './../data/albums';

class Library extends Component {
  constructor(props){
    super(props);
    this.state = { albums: albumData};
    }
  render() {
    return (
      <section className='Library'>
        {
          this.state.albums.map( (album, index) =>
            <div key={index} >
              <img src={album.albumCover} alt={album.title} />
              <div>{album.title}</div>
              <div>{album.artist}</div>
              <div>{album.songs.length} song</div>
            </div>
          )
        }
      </section>
    );
  }
}

export default Library;
