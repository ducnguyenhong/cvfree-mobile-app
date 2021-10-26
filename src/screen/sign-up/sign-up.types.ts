import * as yup from 'yup';

export interface signInValues {
  username: string;
  password: string;
  confPassword: string;
  email: string;
}

export const initialValues: signInValues = {
  username: '',
  password: '',
  confPassword: '',
  email: '',
};

const regexEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const regexUsername = /^[a-zA-Z0-9@.\-_]+$/;

export const signInSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required')
    .matches(regexUsername, 'Invalid username'),
  password: yup
    .string()
    .min(6, 'Password minimum 6 characters')
    .max(14, 'Password up to 14 characters')
    .required('Password is required'),
  confPassword: yup
    .string()
    .min(6, 'Confirm password minimum 6 characters')
    .max(14, 'Confirm password up to 14 characters')
    .required('Confirm password is required')
    .oneOf([yup.ref('password'), null], 'Confirm password is incorrect'),
  email: yup
    .string()
    .required('Email is required')
    .matches(regexEmail, 'Invalid email'),
});
