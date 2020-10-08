import React from "react";
import FormContainer from "../form/formContainer";
import Input from "../form/input";
import Button from "../button/button";
import Portal from "../portal/portal";

import './modal.css'

const Modal = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <Portal>
          <div className="modal__overlay" onClick={onClose}>
            <div
              className="modal__window"
              onClick={(event) => {
                event.stopPropagation();
              }}
            >
              {/* <div className={classes.header}>
                <div className={classes.title}>{title}</div>
                <Button onClick={onClose} color="secondary">
                  Закрыть
                </Button>
              </div>
              <div className={classes.content}>
                <Component onClose={onClose} />
              </div> */}
              <FormContainer
                label="FORGOT YOUR PASSWORD?"
                subLabel="Enter your account email address below to reset your password"
              >
                <Input label="email address"></Input>
                <div className="modal__buttons">
                  <Button secondary onClick={onClose}>Close</Button>
                  <Button primary onClick={() => {}}>Request pawword reset</Button>
                </div>
              </FormContainer>
            </div>
          </div>
        </Portal>
      )}
    </>
  );
};

export default Modal;
