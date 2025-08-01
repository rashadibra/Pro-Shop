import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import GoogleLogo from "../../assets/GIcon.png";

function Example({
  show,
  onHide,
  title,
  fields,
  buttonText,
  googleText,
  switchText,
  onSwitch,
}) {
  const RegisterFormik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
      .required("Ad boş ola bilməz")
      .min(5,"Minimum 5 hərf olmalıdır"),
      email: Yup.string()
        .email("Email düzgün deyil")
        .required("Email boş ola bilməz"),
      password: Yup.string()
        .required("Şifrə boş ola bilməz")
        .min(6, "Şifrə minimum 6 simvol olmalıdır"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Şifrələr uyğun deyil")
        .required("Təkrar şifrə boş ola bilməz"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const LoginFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Email düzgün deyil")
        .required("Email boş ola bilməz"),
      password: Yup.string()
        .required("Şifrə boş ola bilməz")
        .min(6, "Şifrə minimum 6 simvol olmalıdır"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <>
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            onSubmit={
              title == "Login"
                ? LoginFormik.handleSubmit
                : RegisterFormik.handleSubmit
            }
          >
            {fields.map((item, index) => (
              <div key={index} className="my-2">
                <Form.Control
                  name={item.name}
                  value={
                    title == "Login"
                      ? LoginFormik.values[item.name]
                      : RegisterFormik.values[item.name]
                  }
                  onChange={
                    title == "Login"
                      ? LoginFormik.handleChange
                      : RegisterFormik.handleChange
                  }
                  type={item.type}
                  placeholder={item.placeholder}
                  onBlur={
                    title == "Login"
                      ? LoginFormik.handleBlur
                      : RegisterFormik.handleBlur
                  }
                />
        {title === "Login" ? (
  LoginFormik.touched[item.name] && LoginFormik.errors[item.name] ? (
    <p style={{ color: "rgb(247, 89, 89)" }}>{LoginFormik.errors[item.name]}</p>
  ) : null
) : (
  RegisterFormik.touched[item.name] && RegisterFormik.errors[item.name] ? (
    <p style={{ color: "rgb(247, 89, 89)" }}>{RegisterFormik.errors[item.name]}</p>
  ) : null
)}

              </div>
            ))}
            <Button
              type="submit"
              onClick={() => {
                if (title == "Login") {
                  LoginFormik.handleSubmit;
                } else if (title == "Register") {
                  RegisterFormik.handleSubmit;
                }
              }}
              className="w-100"
            >
              {buttonText}
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
          <Button
            variant="light"
            className="d-flex w-100 justify-content-center"
          >
            <img src={GoogleLogo} width={"25px"} className="me-2" />
            <span>{googleText}</span>
          </Button>
          <p>{switchText.text}</p>
          <Button variant="link" onClick={onSwitch}>
            {switchText.linkText}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;
