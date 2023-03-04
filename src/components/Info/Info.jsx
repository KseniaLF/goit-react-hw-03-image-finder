import { Component } from 'react';
import { getImgApiData } from 'services/api';
import { toast } from 'react-toastify';

import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Loader } from 'components/Loader/Loader';
import Button from 'components/Button';

export class Info extends Component {
  state = {
    images: [],
    page: 1,
    loading: false,
  };

  async componentDidUpdate(prevProps, _) {
    try {
      const prevQueryValue = prevProps.queryValue;
      const nextQueryValue = this.props.queryValue;

      if (prevQueryValue !== nextQueryValue) {
        this.setState({
          images: [],
          page: 1,
          loading: true,
          // status: 'pending',
        });

        const images = await getImgApiData(nextQueryValue, 1);

        if (images.length === 0) {
          this.setState({ loading: false });
          return toast.error(`Sorry, NOT FOUND`);
        }

        this.setState({
          page: this.state.page + 1,
          // status: 'resolved',
          images: images,
          loading: false,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  onClick = async () => {
    try {
      const nextQueryValue = this.props.queryValue;

      this.setState({ loading: true });

      const images = await getImgApiData(nextQueryValue, this.state.page);

      return this.setState({
        page: this.state.page + 1,
        // status: 'resolved',
        images: [...this.state.images, ...images],
        loading: false,
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { images, loading } = this.state;

    if (images.length === 0 && loading === true) {
      return <Loader />;
    }

    if (images.length !== 0) {
      return (
        <>
          <ImageGallery images={images} />

          {loading === true ? <Loader /> : <Button onClick={this.onClick} />}
        </>
      );
    }
  }
}
