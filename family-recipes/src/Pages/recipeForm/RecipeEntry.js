import React, { useState, useEffect } from 'react'
// import axios from 'axios'
import * as yup from 'yup'
import RecipeForm from './RecipeForm'
import schema from './validation/formSchema'
// import { useHistory } from 'react-router'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { addNewRecipe } from '../../store/actions'

const initialFormValues = {
  title: '',
  source: '',
  ingredients: '',
  instructions: '',
  category: '',
}

const initialFormErrors = {
  title: '',
  source: '',
  ingredients: '',
  instructions: '',
  category: '',
}

// const initialRecipes = []
const initialDisabled = true

export default function RecipeEntry() {
  //   const [recipes, setRecipes] = useState(initialRecipes) // array of friend objects
  const [formValues, setFormValues] = useState(initialFormValues) // object
  const [formErrors, setFormErrors] = useState(initialFormErrors) // object
  const [disabled, setDisabled] = useState(initialDisabled) // boolean

  const { glRecipes } = useSelector((state) => state)
  const dispatch = useDispatch()
  console.log(glRecipes)

  //   const { push } = useHistory()

  const postNewRecipes = (newRecipes) => {
    dispatch(addNewRecipe(newRecipes))

    // push('/dashboard')
  }

  const inputChange = (name, value) => {
    yup
      .reach(schema, name)

      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: '',
        })
      })

      .catch((err) => {
        setFormErrors({
          ...formErrors,

          [name]: err.errors[0],
        })
      })
    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  const formSubmit = () => {
    const newRecipes = {
      title: formValues.title.trim(),
      source: formValues.source.trim(),
      ingredients: formValues.ingredients.trim(),
      instructions: formValues.instructions.trim(),

      category: ['dinner', 'chicken', 'dessert', 'pasta', 'other'].filter(
        (category) => formValues[category]
      ),
    }

    postNewRecipes(newRecipes)
  }

  // useEffect(() => {
  //   getRecipes();
  // }, []);

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid)
    })
  }, [formValues])

  return (
    <div className="App">
      <RecipeForm
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />
    </div>
  )
}
