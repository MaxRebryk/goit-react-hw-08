import { Field, Formik, Form } from "formik";
import { useId } from "react";
import { login } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";

type InitialValues = {
  email: string;
  password: string;
};

const LoginForm: React.FC = () => {
  const initialValues: InitialValues = { email: "", password: "" };
  const loginId: string = useId();
  const passwordId: string = useId();

  const dispatch = useDispatch();

  const handleSubmit = (values: InitialValues, actions) => {
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
};

export default LoginForm;
