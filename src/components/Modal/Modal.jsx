import ReactModal from 'react-modal';
import PropTypes from 'prop-types';
import './styles.css';

// ReactModal.setAppElement('#main');

const customStyles = {
  content: {
    tabindex: '10000000000',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    padding: '0',
    border: 'none',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

ReactModal.setAppElement('#root');

export const Modal = ({ img, openModal, closeModal }) => {
  return (
    <ReactModal
      isOpen={openModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      {/* <button onClick={closeModal}>close</button> */}
      <img src={img} alt={img.tags} width={900} />
    </ReactModal>
  );
};

// export default Modal;

Modal.propTypes = {
  img: PropTypes.string.isRequired,
  openModal: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};
