import React from 'react'
import { Formik, useField } from 'formik'
import { View, Button, StyleSheet } from 'react-native'
import StyledTextInput from '../components/StyledTextInput'
import StyledText from '../components/StyledText'
import { loginValidationShema } from '../validationSchema/login'
export default function LogInPage () {
  const initialValues = {
    email: '',
    password: ''
  }

  const styles = StyleSheet.create({
    error: {
      color: 'red',
      fontSize: 12,
      marginBottom: 20,
      marginTop: -5
    },
    form: {
      margin: 15
    }
  })

  const FormikInputValue = ({ name, ...props }) => {
    const [field, meta, helpers] = useField(name)
    const { setValue } = helpers
    return (
      <>
        <StyledTextInput
          error={meta.error}
          value={field.value}
          onChangeText={value => setValue(value)}
          {...props}
        />
        {meta.error && <StyledText style={styles.error}>{meta.error}</StyledText>}
      </>
    )
  }

  return (
    <Formik validationSchema={loginValidationShema} initialValues={initialValues} onSubmit={values => console.log(values)}>
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
          <View style={styles.form}>
            <FormikInputValue name='email' placeholder='Email' />
            <FormikInputValue name='password' placeholder='Password' secureTextEntry />
            <Button onPress={handleSubmit} title='Log In' />
          </View>
        )
      }}
    </Formik>
  )
}
