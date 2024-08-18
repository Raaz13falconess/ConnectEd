import React, { useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import AuthContext from '../../context/AuthContext';

const Register = () => {
  const { register } = useContext(AuthContext);

  const initialValues = {
    name: '',
    email: '',
    password: '',
    role: 'candidate',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().required('Required'),
    role: Yup.string().required('Required'),
  });

  const onSubmit = async (values, { setSubmitting }) => {
    await register(values);
    setSubmitting(false);
  };

  return (
    <div className="auth-form">
      <h2>Register</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div className="form-group">
            <Field name="name" type="text" placeholder="Name" />
            <ErrorMessage name="name" component="div" className="error" />
          </div>
          <div className="form-group">
            <Field name="email" type="email" placeholder="Email" />
            <ErrorMessage name="email" component="div" className="error" />
          </div>
          <div className="form-group">
            <Field name="password" type="password" placeholder="Password" />
            <ErrorMessage name="password" component="div" className="error" />
          </div>
          <div className="form-group">
            <Field as="select" name="role">
              <option value="candidate">Candidate</option>
              <option value="company">Company</option>
            </Field>
          </div>
          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Register;
