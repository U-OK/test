import React from 'react';

import './formContainer.css'

const FormContainer = ({onSubmit, children, label, subLabel}) => {

  return (
    <form className="form__container" onSubmit={(event) => onSubmit(event)}>
      {label && <h1 className="form__title">{label}</h1>}
      {subLabel && <p>{subLabel}</p>}
      {children}
    </form>
  )
}

export default FormContainer;