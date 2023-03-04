import { Component } from 'react';
import { getImgApiData } from 'services/api';
// import { toast } from 'react-toastify';

import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Loader } from 'components/Loader/Loader';
import Button from 'components/Button';

export class Info extends Component {
  state = {
    images: [],
    error: '',
    status: 'idle',
    page: 1,
    loadingMore: false,
  };

  async componentDidUpdate(prevProps, _) {
    try {
      const prevQueryValue = prevProps.queryValue;
      const nextQueryValue = this.props.queryValue;

      if (prevQueryValue !== nextQueryValue) {
        this.setState({
          images: [],
          page: 1,
          status: 'pending',
        });

        const images = await getImgApiData(nextQueryValue, 1);

        if (images.length === 0) {
          return this.setState({
            status: 'rejected',
            error: 'NOT FOUND',
          });
        }

        this.setState({
          // page: this.state.page + 1,
          status: 'resolved',
          images: images,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  onClick = async () => {
    try {
      const nextQueryValue = this.props.queryValue;

      this.setState({ loadingMore: true });

      const images = await getImgApiData(nextQueryValue, this.state.page);

      return this.setState({
        page: this.state.page + 1,
        status: 'resolved',
        images: [...this.state.images, ...images],
        loadingMore: false,
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { images, error, status, loadingMore } = this.state;
    if (status === 'idle') {
      // return <p>~</p>;
    }
    if (status === 'pending') {
      return <Loader />;
    }
    if (status === 'rejected') {
      return <p>{error}</p>;
      // toast.error(`${error}`);
      // console.log(555);
    }
    if (status === 'resolved') {
      return (
        <>
          <ImageGallery images={images} />

          {loadingMore === true ? (
            <Loader />
          ) : (
            <Button onClick={this.onClick} />
          )}
        </>
      );
    }
  }
}
