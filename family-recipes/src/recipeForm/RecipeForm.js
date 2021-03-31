import React from 'react';
import './RecipeForm.css'


export default function RecipeForm(props) {
    const { values, submit, change, disabled, errors } = props;
  
    const onSubmit = (evt) => {
      evt.preventDefault();
      submit();
    };
  
    const onChange = (evt) => {
      /* 🔥 FIX THIS SO IT ALSO WORKS WITH CHECKBOXES */
      const { name, value, type, checked } = evt.target;
      const valueToUse = type === "checkbox" ? checked : value;
      change(name, valueToUse);
    };
  
    return (
      
      <form className="formContainer" onSubmit={onSubmit}>
        <div className = "nestedContainer">
        
        <div className="form-group-submit">
        
        <fieldset className ="recipeContainer">
          <legend>Add a Recipe</legend>

          {/*////////// TEXT INPUTS //////////*/}

          <div className= "topInputs">
            <div className ="title">
          <label>
            <p>Title&nbsp;</p>
            <input
              value={values.title}
              onChange={onChange}
              name="title"
              type="text"
              placeholder = "name of recipe"
            />
          </label>
          </div>
          <div className = "source">
          <label>
            <p>Source&nbsp;</p>
            <input
              value={values.source}
              onChange={onChange}
              name="source"
              type="text"
              placeholder = "source of recipe"
            />
          </label>
          </div>
          </div>
          <div className= "ing_ins">

              {/*///////// DROPDOWN ////////// */}
          <div className="category">
          <label>
            category&nbsp;
            <select onChange={onChange} value={values.category} name="category">
              <option value="">- Select an option -</option>
              <option value="dinner">dinner</option>
              <option value="chicken">chicken</option>
              <option value="dessert">dessert</option>
              <option value="pasta">pasta</option>
              <option value="other">other</option>
            </select>
          </label>
          </div>

          <div>
          <fieldset className = 'ingredients'>
          <legend>Ingredients</legend>
          <label>
            <textarea
              value={values.ingredients}
              onChange={onChange}
              name="ingredients"
              type="text"
              size = "60"
              rows="5" cols="60"
            />
          </label>
          </fieldset>
          </div>
          <div>
          <fieldset className="instructions">
          <legend>Instructions</legend>
            <label >
            
              <textarea
                value={values.instructions}
                onChange={onChange}
                name="instructions"
                type="text"
                size = "60"
                rows="5" cols="60"
              />
            </label>
            </fieldset>
          </div>
        </div>
 
        
         

           {/* 🔥 DISABLE THE BUTTON */}

           <button className = "recipeButton" disabled={disabled}>Submit Recipe</button>

           <div className="errors">
            {/* 🔥 RENDER THE VALIDATION ERRORS HERE */}
            <div>{errors.title}</div>
            <div>{errors.source}</div>
            <div>{errors.ingredients}</div>
            <div>{errors.instructions}</div>
            <div>{errors.category}</div>
          </div>
          
          </fieldset>
        </div>
        </div>
      </form>
    );
  }