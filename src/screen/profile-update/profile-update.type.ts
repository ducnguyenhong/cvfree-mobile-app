import * as yup from 'yup';

interface Address {
  value: { district: string; city: string };
  label: string;
}

export interface UpdateInfoValues {
  fullname: string;
  birthday: string;
  gender: string;
  phone: string;
  email: string;
  address?: Address | null;
  avatar: string | null;
}

const regexEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const updateInfoSchema = yup.object().shape({
  fullname: yup.string().required('Fullname is required'),
  gender: yup.string().required('Gender is required'),
  email: yup
    .string()
    .required('Email is required')
    .matches(regexEmail, 'Invalid email'),
});
