import React, { useState } from "react";
import { Link } from "react-router-dom";

import Modal from "../modal/modal";

import "./loginSubtitle.css";

const LoginSubtitle = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="form__subtitle">
      <Link to="#" onClick={() => setModalIsOpen(true)} className="subtitle__link">
        forgot password?
      </Link>
      <span>|</span>
      <Link to="/auth" className="subtitle__link">
        create an account
      </Link>
      <Modal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)}/>
    </div>
  );
};

export default LoginSubtitle;
