import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import api from '../../services/api';

const JobApplication = ({ match }) => {
  const [file, setFile] = useState(null);

  const onFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const onSubmit = async (values) => {
    const formData = new FormData();
    formData.append('resume', file);
    formData.append('coverLetter', values.coverLetter);

    await api.post(`/applications/${match.params.jobId}`, formData);
  };

  return (
    <div className="application-form">
      <h2>Apply for Job</h2>
      <Formik initialValues={{ coverLetter: '' }} onSubmit={onSubmit}>
        <Form>
          <div className="form-group">
            <Field as="textarea" name="coverLetter" placeholder="Cover Letter" />
          </div>
          <div className="form-group">
            <input type="file" onChange={onFileChange} />
          </div>
          <button type="submit">Submit Application</button>
        </Form>
      </Formik>
    </div>
  );
};

export default JobApplication;
