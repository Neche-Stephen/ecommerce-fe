import { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import axios from 'axios';
// import {
//   signInAuthUserWithEmailAndPassword,
//   signInWithGooglePopup,
// } from '../../utils/firebase/firebase.utils';

import './sign-in-form.styles.scss';

const defaultFormFields = {
 username: '',
  password: '',
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { username, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  // const signInWithGoogle = async () => {
  //   await signInWithGooglePopup();
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(`http://ecommerce-service-env.eba-2cfa5p2b.eu-north-1.elasticbeanstalk.com/api/v1/auth/login`, {
       username, password
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      // console.log(response);
  
      if (response.data && response.data.loginInfo) {
        const { username, token } = response.data.loginInfo;
        // Store the username and token in localStorage
        localStorage.setItem('username', username);
        localStorage.setItem('token', token);
        // console.log("admin token",token)
        // navigate('/admin/dashboard');
      }

    } catch (error) {
      // console.error('Failed to login user', error);
      console.error('Failed to login user');
      console.log(error);

      // console.log(error.response.data);
      // const notify = () => toast(error.response.data);

      // notify();
      // toast.error(error.response.data)
      if (error.response) {
        console.error('Error response data:', error.response.data);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className='sign-in-container'>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='User name'
          type='text'
          required
          onChange={handleChange}
          name='username'
          value={username}
        />

        <FormInput
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />
        <div className='buttons-container'>
          <Button type='submit'>Sign In</Button>
          <Button buttonType='google' type='button' >
            Sign In With Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
