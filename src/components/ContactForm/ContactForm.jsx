import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
export default function ContactForm() {
  const nameId = useId();
  const numberId = useId();

  const dispatch = useDispatch();

  const onAdd = (values) => {
    dispatch(
      addContact({ id: Date.now(), name: values.name, number: values.number })
    );
  };

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = (values, actions) => {
    onAdd(values);
    console.log(values);
    actions.resetForm();
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        <Form>
          <label htmlFor={nameId}>Name</label>
          <Field type="text" name="name" id={nameId} />
          <ErrorMessage name="name" component="span" />
          <label htmlFor={numberId}>Number</label>
          <Field type="text" name="number" id={numberId} />
          <ErrorMessage name="number" component="span" />
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </>
  );
}
