import { Component } from 'react';
import { getImgApiData } from 'services/api';

import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Loader } from 'components/Loader/Loader';
import { Button } from 'components/Button/Button';

export class Info extends Component {
  state = {
    images: [],
    error: '',
    status: 'idle',
    page: 1,
  };

  // async componentDidUpdate(prevProps, prevState) {
  //   if (
  //     prevProps.queryValue !== this.props.queryValue ||
  //     prevState.page !== this.state.page
  //   ) {
  //     // this.setState({ status: 'pending' });

  //     try {
  //       if (prevProps.queryValue !== this.props.queryValue) {
  //         this.setState({ page: 1, images: [] });
  //         // console.log('staart');
  //       }

  //       const images = await getImgApiData({
  //         searchQuery: this.props.queryValue,
  //         page: this.state.page,
  //       });

  //       this.setState({
  //         images: [...prevState.images, ...images],
  //         status: 'resolved',
  //       });
  //     } catch (error) {
  //       console.log(error.message);

  //       // this.setState({ error: 'error', status: 'rejected' });
  //     }
  //   }
  // }

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

        this.setState({
          page: this.state.page + 1,
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

      const images = await getImgApiData(nextQueryValue, this.state.page);

      this.setState({
        page: this.state.page + 1,
        status: 'resolved',
        images: [...this.state.images, ...images],
      });
    } catch (error) {
      console.log(error);
    }
  };

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
    if (images.length !== 0) {
      return (
        <>
          <ImageGallery images={images} />

          <Button onClick={this.onClick} />
        </>
      );
    }
    // if (status === 'resolved') {
    //   return (
    // <>
    //   <ImageGallery images={images} />
    //   {/* {status === 'loadingMore' && <Loader />} */}

    //   <Button onClick={this.onClick} />
    // </>
    //   );
    // }
  }
}
