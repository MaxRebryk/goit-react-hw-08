import { Field, Formik, Form } from "formik";
import { useId } from "react";
import { login } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";

export default function LoginForm() {
  const initialValues = { email: "", password: "" };
  const loginId = useId();
  const passwordId = useId();

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(login(values))
      .unwrap()
      .catch((error) => {
        alert(error);
      });
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <label htmlFor={loginId}>Email</label>
        <Field type="mail" name="email" id={loginId} />
        <label htmlFor={passwordId}>Password</label>
        <Field type="password" name="password" id={passwordId} />
        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
}
