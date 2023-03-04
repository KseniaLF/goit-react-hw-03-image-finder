import { ImageGalleryList } from './ImageGallery.styled';

// import Modal from 'components/Modal';
import { Component } from 'react';
import { ImageItem } from 'components/ImageGaleryItem/ImageGaleryItem';

export class ImageGallery extends Component {
  // return console.log(images);
  // state = {
  //   isOpen: false,
  // };

  // openModal = () => {
  //   console.log(4444444);
  //   this.setState({ isOpen: true });
  // };

  render() {
    const { images } = this.props;

    return (
      <ImageGalleryList>
        {images.map(image => {
          return (
            <ImageItem key={image.id} image={image} />
            // <ImageGalleryItem key={image.id}>
            //   <img src={image.webformatURL} alt={image.tags} />
            //   {/* <button type="button" onClick={this.openModal}>
            //     OPEN
            //   </button> */}
            //   {/* {this.state.isOpen && <Modal img={image} />} */}
            // </ImageGalleryItem>
          );
        })}
      </ImageGalleryList>
    );
  }
}
