import { Component } from 'react';
import { getImgApiData } from 'services/api';

import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Loader } from 'components/Loader/Loader';

export class Info extends Component {
  state = {
    images: null,
    error: '',
    status: 'idle',
    page: 1,
  };

  async componentDidUpdate(prevProps) {
    if (prevProps.queryValue !== this.props.queryValue) {
      this.setState({ status: 'pending' });

      try {
        const images = await getImgApiData(this.props.queryValue);
        // console.log(images);

        if (images.length === 0) {
          return this.setState({ error: 'Not found', status: 'rejected' });
        }

        this.setState({ images: images, status: 'resolved' });
      } catch (error) {
        console.log(error.message);

        // this.setState({ error: 'error', status: 'rejected' });
      }
    }
  }

  render() {
    const { images, error, status } = this.state;
    // return <Loader />;
    if (status === 'idle') {
      return <p>~</p>;
    }
    if (status === 'pending') {
      return <Loader />;
    }
    if (status === 'rejected') {
      return <p>{error}</p>;
    }
    if (status === 'resolved') {
      return <ImageGallery images={images} />;
    }
  }
}
