import React, { Component } from 'react';

class Song extends Component {
  constructor(props) {
    super(props);

    this.state={
      isHovering: false
    }
  }

  renderIcons() {
    if (this.props.isPlaying && this.state.isHovering) {
      return <td><i className= "icon ion-md-pause"></i></td>
    } else if (!this.props.isPlaying && this.state.isHovering) {
      return <td><i className="icon ion-md-play"></i></td>
    } else {
      return <td>{this.props.number}</td>
    }
  }

  hover() {
    this.setState({ isHovering: !this.state.isHovering } );
  }

  render() {
    return (
      <tr
        className="song"
        onClick={() => this.props.handleClick(this.props.data)}
        onMouseEnter={this.hover.bind(this)}
        onMouseLeave={this.hover.bind(this)}
      >
        {this.renderIcons()}
        <td>{this.props.data.title}</td>
        <td>{this.props.formatTime(this.props.data.duration)}</td>
      </tr>
    );
  }
}

export default Song;
