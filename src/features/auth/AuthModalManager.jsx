import React from "react";
import { useContext, useState } from "react";
import DataContext from "../../Context/Context";
import AuthModalContainer from "./AuthModalContanier";
function AuthModalManager() {
  const [showRegister, setShowRegister] = useState(false);
  const { showLogin, setShowLogin } = useContext(DataContext);

  // Sign in Function

  return (
    <div>
      {!showRegister ? (
        <AuthModalContainer
          show={showLogin}
          onHide={()=>setShowLogin(false)}
          title="Login"
          fields={[
            { name:"email",type: "email", placeholder: "Email" },
            { name:"password",type: "password", placeholder: "Password" },
          ]}
          buttonText="Send"
          googleText="Google ile giris edin"
          switchText={{ text: "hesabiniz yoxdur?", linkText: "register" }}
          onSwitch={() => {
            setShowLogin(false);
            setShowRegister(true);
          }}
        />
      ) : (
        <AuthModalContainer 
         show={showRegister}
          onHide={()=>setShowRegister(false)}
          title="Register"
          fields={[
            { name:"name",type: "text", placeholder: "Name" },
            { name:"email",type: "email", placeholder: "Email" },
            { name:"password",type: "password", placeholder: "Password" },
            { name:"confirmPassword",type: "password", placeholder: "Confirm Password" },
          ]}
          buttonText="Send"
          googleText="Google ile qeydiyyatdan kecin"
          switchText={{ text: "hesabiniz var?", linkText: "login" }}
          onSwitch={() => {
            setShowRegister(false);
            setShowLogin(true);
          }}
        />
      )}
    </div>
  );
}

export default AuthModalManager;
