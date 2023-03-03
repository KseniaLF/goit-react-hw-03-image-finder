import { Button } from 'components/Button/Button';
import { ImageGalleryList, ImageGalleryItem } from './ImageGallery.styled';

export const ImageGallery = ({ images }) => {
  //   return console.log(images);
  return (
    <>
      <ImageGalleryList>
        {images.map(image => {
          return (
            <ImageGalleryItem key={image.id}>
              <img src={image.webformatURL} alt={image.tags} />
            </ImageGalleryItem>
          );
        })}
      </ImageGalleryList>
      <Button />
    </>
  );
};
