import { ImageGalleryList } from './ImageGallery.styled';

import { ImageItem } from 'components/ImageGaleryItem/ImageGaleryItem';

export const ImageGallery = ({ images }) => {
  return (
    <ImageGalleryList>
      {images.map(image => {
        return <ImageItem key={image.id} image={image} />;
      })}
    </ImageGalleryList>
  );
};
