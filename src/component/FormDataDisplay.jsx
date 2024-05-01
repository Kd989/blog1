import React from 'react';
import { useLocation } from 'react-router-dom';

const FormDataDisplay = () => {
  const location = useLocation();
  const formData = location.state?.formData;

  if (!formData) {
    return <div>No form data found</div>;
  }
  return (
    <div className='container'>
      <div className="row">
        <div className="col-8">

      <h2>Form Data</h2>
      <p>Username: {formData?.username}</p>
      <p>Email: {formData?.email}</p>
      <p>Password: {formData?.password}</p>
        </div>

      </div>
    </div>
  );
};

export default FormDataDisplay;
