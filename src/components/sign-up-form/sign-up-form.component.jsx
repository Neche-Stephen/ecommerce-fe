import { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

// import {
//   createAuthUserWithEmailAndPassword,
//   createUserDocumentFromAuth,
// } from '../../utils/firebase/firebase.utils';

import './sign-up-form.styles.scss';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const requestBody = { username:displayName, email, password };

    if (password !== confirmPassword) {
      alert('passwords do not match');
      return;
    }

    try {
      const response = await fetch(`http://ecommerce-service-env.eba-2cfa5p2b.eu-north-1.elasticbeanstalk.com/api/v1/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });
 
      if (response.ok) {
        setIsSignupSucessful(true);
        // alert("Registration successful!");
        // navigate("/login");
        console.log(response)
      } else {
        // const errorText = await response.json();
        // alert(`Registration failed: ${errorText}`);
        console.log(response);
        // Extract error message from the response
        const errorData = await response.json();
        const errorMessage = errorData.message || "Error creating user";
        console.log(errorData)
        console.log(errorMessage);
      }
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className='sign-up-container'>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Display Name'
          type='text'
          required
          onChange={handleChange}
          name='displayName'
          value={displayName}
        />

        <FormInput
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />

        <FormInput
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />

        <FormInput
          label='Confirm Password'
          type='password'
          required
          onChange={handleChange}
          name='confirmPassword'
          value={confirmPassword}
        />
        <Button type='submit'>Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
