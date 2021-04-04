import React from 'react'
import './RecipeForm.css'

export default function RecipeForm(props) {
  const { values, submit, change, disabled, errors } = props

  const onSubmit = (evt) => {
    evt.preventDefault()
    submit()
  }

  const onChange = (evt) => {
    /* 🔥 FIX THIS SO IT ALSO WORKS WITH CHECKBOXES */
    const { name, value, type, checked } = evt.target
    const valueToUse = type === 'checkbox' ? checked : value
    change(name, valueToUse)
  }

  return (
    <form className="formContainer" onSubmit={onSubmit}>
      <div className="nestedContainer">
        <div className="form-group-submit">
          <h1>Add New Recipe</h1>
          {/* <fieldset className="recipeContainer"> */}
          {/* <legend>Add a Recipe</legend> */}
          <div className="title">
            <label>
              {' '}
              Title:&nbsp;
              {/* <p className="pRecipe">Title&nbsp;</p> */}
              <input
                value={values.title}
                onChange={onChange}
                name="title"
                type="text"
                placeholder="Name of recipe"
              />
            </label>
          </div>
          <div className="source">
            <label>
              {' '}
              Source:&nbsp;
              {/* <p className="pRecipe">Source&nbsp;</p> */}
              <input
                value={values.source}
                onChange={onChange}
                name="source"
                type="text"
                placeholder="Source of recipe"
              />
            </label>
          </div>
          {/* <div className="ing_ins"> */}
          <div className="category">
            <label>
              Category:&nbsp;
              <input
                value={values.category_name}
                onChange={onChange}
                name="category_name"
                type="text"
                placeholder="Add a category"
              />
            </label>
          </div>
          {/* <div> */}
          <fieldset className="ingredients">
            <legend>Ingredients</legend>
            <label>
              <textarea
                value={values.ingredients}
                onChange={onChange}
                name="ingredients"
                type="text"
                size="20"
                rows="3"
                cols="30"
              />
            </label>
          </fieldset>
          {/* </div> */}
          {/* <div> */}
          <fieldset className="instructions">
            <legend>Instructions</legend>
            <label>
              <textarea
                value={values.instructions}
                onChange={onChange}
                name="instructions"
                type="text"
                size="20"
                rows="3"
                cols="30"
              />
            </label>
          </fieldset>
          {/* </div> */}
          {/* </div> */}
          {/* 🔥 DISABLE THE BUTTON */}
          <button className="recipeButton" disabled={disabled}>
            Submit Recipe
          </button>
          <div className="errors">
            {/* 🔥 RENDER THE VALIDATION ERRORS HERE */}
            <div>{errors.title}</div>
            <div>{errors.source}</div>
            <div>{errors.ingredients}</div>
            <div>{errors.instructions}</div>
            <div>{errors.category_name}</div>
          </div>
          {/* </fieldset> */}
        </div>
      </div>
    </form>
  )
}
