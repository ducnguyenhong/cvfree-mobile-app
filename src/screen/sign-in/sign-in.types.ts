import * as yup from 'yup';

export interface signInValues {
  username: string;
  password: string;
  deviceId?: string;
}

export const initialValues: signInValues = {
  username: '',
  password: '',
};

export const signInSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup
    .string()
    .min(6, 'Password minimum 6 characters')
    .max(14, 'Password up to 14 characters')
    .required('Password is required'),
});
