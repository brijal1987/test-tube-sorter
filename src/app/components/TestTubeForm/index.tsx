import React, { useState, useEffect } from 'react';
import { TestTubeInterface } from '../../types';
import TestTubeFormStyles from './TestTubeForm.module.css'

interface Props {
    onSubmit: (tube: TestTubeInterface) => void;
}

const TestTubeForm: React.FC<Props> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<TestTubeInterface>({
    patientName: '',
    patientId: 0,
    age: 0,
    company: '',
    city: '',
    visionDefect: '',
  });
  const [errors, setErrors] = useState({
    patientName: '',
    patientId: 0,
    age: 0,
    company: '',
    city: '',
    visionDefect: '',
  }); 
  const [isFormValid, setIsFormValid] = useState(false); 
  const [isSubmit, setIsSubmit] = useState(false); 

  useEffect(() => { 
    validateForm(); 
  }, [formData.patientName, formData.age, formData.company, formData.city, formData.visionDefect]); 
  // Validate form 
  const validateForm = () => { 
    let errors: any = {}

    if (!formData.patientName) { 
      errors.patientName = 'Patient Name is required.'; 
    } 
    if (!formData.age) { 
      errors.age = 'Age is required.'; 
    } 
    if (!formData.company) { 
      errors.company = 'Company is required.'; 
    } 
    if (!formData.city) { 
      errors.city = 'City is required.'; 
    } 
    if (!formData.visionDefect) { 
      errors.visionDefect = 'Vision Defect is required.'; 
    } 

    setErrors(errors); 
    setIsFormValid(Object.keys(errors).length === 0); 
  }; 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData((previousFormData) => ({
        ...previousFormData,
        [name]: value,
      }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmit(true);
    if (isFormValid) { 
      onSubmit(formData);
      setIsSubmit(false);
      setFormData({
        patientName: '',
        patientId: 0,
        age: 0,
        company: '',
        city: '',
        visionDefect: '',
      });
    }
  };

  return (
    <div className={TestTubeFormStyles.formcontainer}>
      <h2>Add Test tube data</h2>
      <form onSubmit={handleSubmit}>
          <label htmlFor="Patient Name">Patient Name</label><input
              type="text"
              placeholder="Patient Name"
              name="patientName"
              id="patientName"
              className={isSubmit && errors.patientName ? 'error': ''}
              value={formData.patientName}
              onChange={handleChange}
          />
          <label>Age</label><input
              type="text"
              placeholder="Age"
              name="age"
              className={isSubmit && errors.age ? 'error': ''}
              value={formData.age}
              onChange={handleChange}
          />
          <label>Company</label><input
              type="text"
              placeholder="Company"
              name="company"
              className={isSubmit && errors.company ? 'error': ''}
              value={formData.company}
              onChange={handleChange}
          />
          <label>City</label><input
              type="text"
              placeholder="City"
              name="city"
              className={isSubmit && errors.city ? 'error': ''}
              value={formData.city}
              onChange={handleChange}
          />
          <label>Vision Defect</label><input
              type="text"
              placeholder="Vision Defect"
              name="visionDefect"
              className={isSubmit && errors.visionDefect ? 'error': ''}
              value={formData.visionDefect}
              onChange={handleChange}
          />
          <button className="btn" type="submit">Add Test Tube</button>
      </form>
    </div>
  );
};

export default TestTubeForm;
