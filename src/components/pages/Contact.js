import React, { useState } from 'react';
import '../../styles/contactStyles.css'
import '../../styles/pageStyles.css'

export default function Contact({ setCurrentPage }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [emailError, setEmailError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // validate email field and render 'invalid' string if email doesn't match regex
    if (name === 'email') {
      const emailPattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
      // .test will check the value pattern against the regex pattern
      if (!emailPattern.test(value)) {
        setEmailError('Invalid email format');
      } else {
        setEmailError('');
      }
    }

    // validate empty fields and set errors
    const newErrors = { ...errors };
    if (value.trim() === '') {
      newErrors[name] = `${name} is required`;
    } else {
      delete newErrors[name]; // remove error if field is not empty
    }
    setErrors(newErrors);
  };

  const handleMouseOut = (e) => {
    const { name, value } = e.target;
    // validate the field when the mouse leaves, trigger with onMouseOut in JSX
    if (value.trim() === '') {
      const newErrors = { ...errors };
      newErrors[name] = `${name} is required`;
      setErrors(newErrors);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // validate empty fields before submitting
    const newErrors = {};
    for (const field in formData) {
      if (formData[field].trim() === '') {
        newErrors[field] = `${field} is required`;
      }
    }
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {

      console.log('Form submitted:', formData);

      setFormData({
        name: '',
        email: '',
        message: '',
      });
      setErrors({});
    }
  };

  return (
    <div className="page-container custom-scrollbar">
      <h2 className='page-title'>Contact Me</h2>
      <div className='contact-container'>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onMouseOut={handleMouseOut}
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onMouseOut={handleMouseOut}
            />
            {errors.email && <p className="error">{errors.email}</p>}
            {emailError && <p className="error">{emailError}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              onMouseOut={handleMouseOut}
            />
            {errors.message && <p className="error">{errors.message}</p>}
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
