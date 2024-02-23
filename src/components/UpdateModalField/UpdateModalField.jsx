import React, { useContext, useState } from 'react';
import { Modal } from 'react-bootstrap';
import FormField from '../FormField/FormField';
import { AuthContext } from '../../context/AuthProvider';

const UpdateModalField = ({handleCloseUp,showUpdate,id,updatedTask}) => {
    return (
        <>
            <Modal show={showUpdate} onHide={handleCloseUp}>
                <FormField createTask={updatedTask} id={id} update='true' handleClose={handleCloseUp}></FormField>
            </Modal>
        </>
    );
};

export default UpdateModalField;