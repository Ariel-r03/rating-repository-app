import React from 'react'
import { Formik, useField } from 'formik'
import { View, Button } from 'react-native'
import StyledTextInput from '../components/StyledTextInput'

export default function LogInPage () {
  const initialValues = {
    email: '',
    password: ''
  }

  const FormikInputValue = ({ name, ...props }) => {
    const [field, meta, helpers] = useField(name)
    const { setValue } = helpers
    return (
      <StyledTextInput
        value={field.value}
        onChangeText={value => setValue(value)}
        {...props}
      />
    )
  }

  return (
    <Formik initialValues={initialValues} onSubmit={values => console.log(values)}>
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting
        /* and other goodies */
      }) => {
        return (
          <View>
            <FormikInputValue name='email' placeholder='Email' />
            <FormikInputValue name='password' placeholder='Password' secureTextEntry />
            <Button onPress={handleSubmit} title='Log In' />
          </View>
        )
      }}
    </Formik>
  )
}
