import { LoadMoreBtn } from './Button.styled';

export const Button = ({ onClick }) => {
  return (
    <LoadMoreBtn>
      <button type="button" onClick={onClick}>
        Load more
      </button>
    </LoadMoreBtn>
  );
};
