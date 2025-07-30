import React from "react";
import { useContext, useState } from "react";
import DataContext from "../../Context/Context";
import AuthModalContainer from "./AuthModalContanier";
function AuthModalManager() {
  const [showRegister, setShowRegister] = useState(false);
  const { showLogin, setShowLogin } = useContext(DataContext);

  return (
    <div>
      {!showRegister ? (
        <AuthModalContainer
          show={showLogin}
          onHide="handleCloseLogin"
          title="Login"
          fields={[
            { type: "email", placeholder: "Email" },
            { type: "password", placeholder: "Password" },
          ]}
          buttonText="Send Login"
          googleText="Google ile giris edin"
          switchText={{ text: "hesabiniz yoxdur?", linkText: "register" }}
          onSwitch={() => {
            setShowLogin(false);
            setShowRegister(true);
          }}
        />
      ) : (
        <AuthModalContainer 
         show={showLogin}
          onHide="handleCloseRegister"
          title="Register"
          fields={[
            { type: "name", placeholder: "Name" },
            { type: "email", placeholder: "Email" },
            { type: "password", placeholder: "Password" },
            { type: "password", placeholder: "Confirm Password" },
          ]}
          buttonText="Send Register"
          googleText="Google ile qeydiyyatdan kecin"
          switchText={{ text: "hesabiniz var?", linkText: "login" }}
          onSwitch={() => {
            setShowLogin(true);
            setShowRegister(false);
          }}
        />
      )}
    </div>
  );
}

export default AuthModalManager;
