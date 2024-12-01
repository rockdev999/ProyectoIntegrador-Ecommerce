import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const ValidatorProvider = createContext();

export function ValidationRoute({ children }) {
  const [emailValidation, setEmailValidation] = useState(false);
  const [user, setUser] = useState({});

  return (
    <ValidatorProvider.Provider
      value={{ emailValidation, setEmailValidation, user, setUser }}
    >
      {children}
    </ValidatorProvider.Provider>
  );
}

ValidationRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
