import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import { ErrorMessage } from "formik";
import css from "../FormikForm/FormikForm.module.css";

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
      <Form className={css.form}>
        <label htmlFor={nameFieldId} className={css.label}>
          Username
        </label>
        <Field
          className={css.field}
          type="text"
          name="username"
          id={nameFieldId}
        />
        <ErrorMessage name="username" component="span" />
        <label htmlFor={mailFieldId} className={css.label}>
          Mail
        </label>
        <Field
          className={css.field}
          type="email"
          name="email"
          id={mailFieldId}
        />
        <ErrorMessage name="email" component="span" />
        <label htmlFor={msgFieldId} className={css.label}>
          Message
        </label>
        <Field
          as="textarea"
          className={css.field}
          name="message"
          id={msgFieldId}
          row="5"
        />
        <ErrorMessage name="message" component="span" />
        <label htmlFor={msgFieldId}>Level of satisfaction</label>
        <Field
          as="select"
          className={`${css.field}${css.select}`}
          name="level"
          id={levelFieldId}
        >
          <option value="good">Good</option>
          <option value="bad">Bad</option>
          <option value="neutral">Neutral</option>m
        </Field>
        <ErrorMessage name="level" component="span" />
        <button type="submit" className={css.button}>
          Submit
        </button>
      </Form>
    </Formik>
  );
}
