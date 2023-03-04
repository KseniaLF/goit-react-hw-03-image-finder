import { ImageGalleryItem } from 'components/ImageGallery/ImageGallery.styled';
import Modal from 'components/Modal';
import { Component } from 'react';

export class ImageItem extends Component {
  state = {
    isOpen: false,
  };

  openModal = () => {
    this.setState({ isOpen: true });
  };
  closeModal = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const { image } = this.props;
    return (
      <ImageGalleryItem key={image.id}>
        <div onClick={this.openModal}>
          <img src={image.webformatURL} alt={image.tags} />
        </div>
        {/* <button type="button" onClick={this.openModal}>
          OPEN
        </button> */}

        {this.state.isOpen && (
          <Modal
            img={image}
            openModal={this.state.isOpen}
            closeModal={this.closeModal}
          />
        )}
      </ImageGalleryItem>
    );
  }
}
