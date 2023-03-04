import ReactModal from 'react-modal';

const customStyles = {
  content: {
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

const Modal = ({ img, openModal, closeModal }) => {
  //   return console.log(openModal);
  //   return <img src={img.webformatURL} alt={img.tags} />;
  return (
    <ReactModal
      isOpen={openModal}
      //   onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      {/* <button onClick={closeModal}>close</button> */}
      <img src={img.largeImageURL} alt={img.tags} width={900} />
    </ReactModal>
  );
};

export default Modal;
