import React from "react";
import { Link } from "react-router-dom";

import './agreement.css'

const Agreement = () => {
  return (
    <div className="form__agreement">
      <p>
        by creating an account, you agree to
        <Link to="#" className="agreement__link">
          our terms
        </Link>
        and conditions and
        <Link to="#" className="agreement__link">
          privacy policy
        </Link>
      </p>
    </div>
  );
};

export default Agreement;
