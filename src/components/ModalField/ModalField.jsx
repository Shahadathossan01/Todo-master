
import Modal from 'react-bootstrap/Modal';
import FormField from '../FormField/FormField';

function ModalField({handleClose,show,createTask}) {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <FormField handleClose={handleClose} createTask={createTask}></FormField>
      </Modal>
    </>
  );
}

export default ModalField;