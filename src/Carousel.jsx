import React from 'react';

class Carousel extends React.Component {
  state = {
    photos: [],
    active: 0
  };
  static getDerivedStateFromProps({ media }) {
    let photos = ['http://placecorgi.com/600/600'];

    if (media.length) {
      photos = media.map(({ large }) => large);
    }

    return { photos };
  }

  // whenever doing event listeners or passing functions to children
  // use arrow function as it doesn't create context 
  // hence this refers to the component
  // saves having to bind in ctor which looks ridiculous
  handleIndexClick = (event) => {
    this.setState({
      active: +event.target.dataset.index
    })
  }

  render() {
    const { photos, active } = this.state;

    return (
      <div className="carousel">
        <img src={photos[active]} alt="animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            <img
              key={photo}
              onClick={this.handleIndexClick}
              data-index={index}
              src={photo}
              className={index === active ? "active" : ""}
              alt="Animal Thumbnail"
            />
          ))}
        </div>
      </div>
    )
  }
}

export default Carousel;
