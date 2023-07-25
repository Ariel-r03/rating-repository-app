import * as yup from 'yup'

export const loginValidationShema = yup.object().shape({
  email: yup
    .string()
    .required()
    .email(),
  password: yup
    .string()
    .min(5, 'Too short')
    .max(1000, 'Too long')
    .required('Password is required')
})
