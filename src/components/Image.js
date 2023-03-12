import React from 'react';

class Image extends React.Component {

  render() {
    // the image is contained within a container that styles the image title to overlay text diagonally
    return (
      <div className="img-container">
        <img src={this.props.src} title={this.props.title} alt={this.props.title}/>
        <h2 className="overlay-text">{this.props.title}</h2>
      </div>
    );
    
  }
}

export default Image;