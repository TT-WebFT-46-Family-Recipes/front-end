import React, { useEffect, useState } from 'react'
import Header from '../Header'
import { LoginForm } from './LoginForm'
import styled from 'styled-components'
import img from '../../Assets/loginbackground.jpg'
import * as yup from 'yup'
import schema from './formSchema'
import axios from 'axios'
import { useHistory } from 'react-router'

const StyledLoginPage = styled.section`
  background-image: url(${img});
  background-size: cover;
  background-position: 30% 70%;
  background-repeat: no-repeat;
  position: fixed;
  height: 100vh;
  width: 100%;
`

const LoginPage = ({ signedIn, signIn }) => {
  const { push } = useHistory()

  const [loginFormVals, setLoginFormVals] = useState({
    username: '',
    password: '',
  })
  const [registerFormVals, setRegisterFormVals] = useState({
    username: '',
    password: '',
  })
  const [loginFormErrors, setLoginFormErrors] = useState({
    username: 'username must be 6 characters long',
    password: 'password must be 8 characters long',
  })
  const [registerFormErrors, setRegisterFormErrors] = useState({
    username: 'username must be 6 characters long',
    password: 'password must be 8 characters long',
  })
  const [loginValidated, setLoginValidated] = useState(false)
  const [registerValidated, setRegisterValidated] = useState(false)
  const [registerFormOpen, setRegisterFormOpen] = useState(false)

  const [attemptMsg, setAttemptMsg] = useState({
    success: true,
    formValidationFailed: false,
    incorrectCredentials: false,
    userAlreadyExists: false,
  })

  /* used to determine if the register form drawer is open or closed */
  const showRegisterForm = () => {
    setRegisterFormOpen((registerFormOpen) => !registerFormOpen)
  }

  /* based on the values of name/value it will update the corresponding 
    object in state (loginForm or registerForm) */
  const updateForm = (name, value) => {
    switch (name) {
      case 'username':
      case 'password':
        setLoginFormVals({
          ...loginFormVals,
          [name]: value.replace(/\s+/g, ''),
        })
        break
      case 'newUserUn':
        name = 'username'
        setRegisterFormVals({
          ...registerFormVals,
          [name]: value.replace(/\s+/g, ''),
        })
        break
      case 'newUserPass':
        name = 'password'
        setRegisterFormVals({
          ...registerFormVals,
          [name]: value.replace(/\s+/g, ''),
        })
        break
      default:
        break
    }
  }

  /* resets the username and password fields as well as the attempt 
    message object in state when the drawer opens and closes */
  useEffect(() => {
    if (registerFormOpen) {
      setLoginFormVals({ username: '', password: '' })
      setAttemptMsg({
        success: true,
        formValidationFailed: false,
        incorrectCredentials: false,
        userAlreadyExists: false,
      })
    } else {
      setRegisterFormVals({ username: '', password: '' })
      setAttemptMsg({
        success: true,
        formValidationFailed: false,
        incorrectCredentials: false,
        userAlreadyExists: false,
      })
    }
  }, [registerFormOpen])

  /* performs form validation for login form using yup */
  useEffect(() => {
    for (const key of Object.keys(loginFormVals))
      yup
        .reach(schema, key)
        .validate(loginFormVals[key])
        .then(() => {
          setLoginFormErrors(
            (loginFormErrors) =>
              (loginFormErrors = {
                ...loginFormErrors,
                [key]: '',
              })
          )
        })
        .catch((err) => {
          setLoginFormErrors(
            (loginFormErrors) =>
              (loginFormErrors = {
                ...loginFormErrors,
                [key]: err.errors[0],
              })
          )
        })
  }, [loginFormVals])

  /* performs form validation for register form using yup */
  useEffect(() => {
    for (const key of Object.keys(registerFormVals))
      yup
        .reach(schema, key)
        .validate(registerFormVals[key])
        .then(() => {
          setRegisterFormErrors(
            (registerFormErrors) =>
              (registerFormErrors = {
                ...registerFormErrors,
                [key]: '',
              })
          )
        })
        .catch((err) => {
          setRegisterFormErrors(
            (registerFormErrors) =>
              (registerFormErrors = {
                ...registerFormErrors,
                [key]: err.errors[0],
              })
          )
        })
  }, [registerFormVals])

  /* changes login and register validation state based on if yup 
    finds any errors with the forms (min/required values met) */
  useEffect(() => {
    if (loginFormErrors.username === '' && loginFormErrors.password === '')
      setLoginValidated(true)
    else if (loginFormErrors.username !== '' || loginFormErrors.password !== '')
      setLoginValidated(false)
    if (
      registerFormErrors.username === '' &&
      registerFormErrors.password === ''
    )
      setRegisterValidated(true)
    else if (
      registerFormErrors.username !== '' ||
      registerFormErrors.password !== ''
    )
      setRegisterValidated(false)
  }, [loginFormErrors, registerFormErrors, registerFormOpen, attemptMsg])

  /* resets the login and register validation state when the 
    drawer opens and closes  */
  useEffect(() => {
    if (registerFormOpen) {
      setLoginValidated(false)
    } else setRegisterValidated(false)
  }, [registerFormOpen])

  /* performs the login authentication and sets corresponding errors 
    according to the attempt message object in state (if any) */
  const logIn = (evt) => {
    evt.preventDefault()
    if (loginValidated) {
      axios
        .post(
          'https://tt-webft-46-family-recipes.herokuapp.com/api/auth/login',
          loginFormVals
        )
        .then((res) => {
          localStorage.setItem('token', res.data.token)
          setLoginFormVals({ username: '', password: '' })
          signIn((signedIn) => !signedIn)
          push('/dashboard')
        })
        .catch((err) => {
          setLoginFormVals({ username: '', password: '' })
          setAttemptMsg({
            ...attemptMsg,
            incorrectCredentials: true,
            formValidationFailed: false,
            success: false,
          })
        })
    } else {
      setAttemptMsg({
        ...attemptMsg,
        incorrectCredentials: false,
        formValidationFailed: true,
        success: false,
      })
      setLoginFormVals({ username: '', password: '' })
    }
  }

  /* performs the register authentication and sets corresponding errors 
    according to the attempt message object in state (if any) */
  const register = (evt) => {
    evt.preventDefault()
    if (registerValidated) {
      axios
        .post(
          'https://tt-webft-46-family-recipes.herokuapp.com/api/auth/register',
          registerFormVals
        )
        .then((res) => {
          localStorage.setItem('token', res.data.token)
          setRegisterFormVals({ username: '', password: '' })
          signIn((signedIn) => !signedIn)
          push('/dashboard')
        })
        .catch((err) => {
          setRegisterFormVals({ username: '', password: '' })
          setAttemptMsg({
            ...attemptMsg,
            userAlreadyExists: true,
            formValidationFailed: false,
            success: false,
          })
        })
    } else {
      setAttemptMsg({
        ...attemptMsg,
        userAlreadyExists: false,
        formValidationFailed: true,
        success: false,
      })
      setRegisterFormVals({ username: '', password: '' })
    }
  }

  return (
    <>
      <Header signedIn={signedIn} signIn={signIn} />
      <StyledLoginPage>
        <LoginForm
          update={updateForm}
          loginVals={loginFormVals}
          registerVals={registerFormVals}
          logIn={logIn}
          register={register}
          registerFormOpen={registerFormOpen}
          showRegisterForm={showRegisterForm}
          attemptMsg={attemptMsg}
        />
      </StyledLoginPage>
    </>
  )
}

export default LoginPage
