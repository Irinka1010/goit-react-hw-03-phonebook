import { Formik, Form, Field, ErrorMessage } from 'formik';
import css from 'components/ContactForm/ContactForm.module.css';
import * as yup from 'yup';
export default function ContactForm({ onSubmit }) {
  const initialValues = {
    name: '',
    number: '',
  };
  const schema = yup.object().shape({
    name: yup
      .string()
      .min(2, 'Too Short!')
      .max(70, 'Too Long!')
      .required('Required'),
    number: yup.string().min(6).max(16).required(),
  });

  const handelSubmit = (values, { resetForm }) => {
    resetForm();
    onSubmit(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handelSubmit}
    >
      <Form>
        <label htmlFor="name">
          Name
          <Field type="text" name="name" />
          <ErrorMessage name="name" />
        </label>

        <label htmlFor="number">
          Number
          <Field type="tel" name="number" />
          <ErrorMessage component="div" name="number" />
        </label>

        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
