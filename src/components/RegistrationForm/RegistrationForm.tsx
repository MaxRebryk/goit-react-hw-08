import { Field, Formik, Form, FormikHelpers } from "formik";
import { useId } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

type InitialValues = {
  name: string;
  email: string;
  password: string;
};

export default function RegistrationForm() {
  const initialValues: InitialValues = { name: "", email: "", password: "" };
  const loginId: string = useId();
  const passwordId: string = useId();
  const nameId: string = useId();

  const dispatch = useDispatch();

  const handleSubmit = (
    values: InitialValues,
    actions: FormikHelpers<InitialValues>
  ) => {
    dispatch(register(values))
      .unwrap()
      .catch((error: never) => {
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
