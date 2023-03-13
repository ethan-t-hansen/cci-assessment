import React from 'react';

class Image extends React.Component {

  render() {
    // returns div that contains an image and the image's title displayed diagonally across it
    return (
      <div className="img-container">
        <img src={this.props.src} title={this.props.title} alt={this.props.title}/>
        <h1 className="overlay-text">{this.props.title}</h1>
      </div>
    );
    
  }
}

export default Image;