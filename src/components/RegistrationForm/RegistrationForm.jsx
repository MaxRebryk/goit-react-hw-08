import { Field, Formik, Form } from "formik";
import { useId } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

export default function RegistrationForm() {
  const initialValues = { name: "", email: "", password: "" };
  const loginId = useId();
  const passwordId = useId();
  const nameId = useId();

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values))
      .unwrap()
      .catch((error) => {
        alert(error);
      });
    actions.resetForm();
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <label htmlFor={nameId}>Name</label>
        <Field type="text" name="name" id={nameId} />
        <label htmlFor={loginId}>Email</label>
        <Field type="mail" name="email" id={loginId} />
        <label htmlFor={passwordId}>Password</label>
        <Field type="password" name="password" id={passwordId} />
        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
}
