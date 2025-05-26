import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import { ErrorMessage } from "formik";

export default function FormikForm() {
  const FeedbackSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, "Too short!")
      .max(50, "Too long!")
      .required("Required"),
    email: Yup.string().email("Must be valid email!").required("Required!"),
    message: Yup.string().max(100, "Too long!"),
    level: Yup.string().oneOf(["good", "bad", "neutral"]).required("Required"),
  });

  const nameFieldId = useId();
  const mailFieldId = useId();
  const msgFieldId = useId();
  const levelFieldId = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{ username: "", email: "", message: "", level: "good" }}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form>
        <label htmlFor={nameFieldId}>Username</label>
        <Field type="text" name="username" id={nameFieldId} />
        <ErrorMessage name="username" component="span" />
        <label htmlFor={mailFieldId}>Mail</label>
        <Field type="email" name="email" id={mailFieldId} />
        <ErrorMessage name="email" component="span" />
        <label htmlFor={msgFieldId}>Message</label>
        <Field as="textarea" name="message" id={msgFieldId} row="5" />
        <ErrorMessage name="message" component="span" />
        <label htmlFor={msgFieldId}>Level of satisfaction</label>
        <Field as="select" name="level" id={levelFieldId}>
          <option value="good">Good</option>
          <option value="bad">Bad</option>
          <option value="neutral">Neutral</option>m
        </Field>
        <ErrorMessage name="level" component="span" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}
