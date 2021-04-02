import React, { useEffect } from 'react'
import Header from '../Header'
import styled from 'styled-components'
import { StyledFilters, StyledRecipeContainer } from './styles'
import { useSelector, useDispatch } from 'react-redux'
import DotLoader from 'react-spinners/DotLoader'
import { css } from '@emotion/core'
import { useHistory } from 'react-router'
import { fetchRecipeData } from '../../store/actions'

const StyledDashboard = styled.section`
  height: 100vh;
  width: 100%;
  position: fixed;
`
const loader = css`
  z-index: 2;
  position: absolute;
  left: 43%;
  top: 30%;
`

const Dashboard = ({ signedIn, signIn }) => {
  const { isLoading, glRecipes } = useSelector((state) => state)

  const { push } = useHistory()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchRecipeData())
  }, [dispatch])

  console.log(glRecipes)

  return (
    <>
      <Header signedIn={signedIn} signIn={signIn} />
      <StyledDashboard>
        <StyledFilters>
          <div className="filters">
            <button
              onClick={() => push('/newrecipe')}
              className="new-recipe-btn"
            >
              Add Recipe
            </button>
            <input name="search" placeholder="search:"></input>
          </div>
        </StyledFilters>
        {isLoading ? (
          <DotLoader color={'#fb5c7c'} loading={true} css={loader} size={150} />
        ) : (
          <StyledRecipeContainer>
            <div className="bg-img">
              {glRecipes.map((recipe, idx) => {
                return (
                  <div key={idx} className="recipe">
                    <h3>{recipe.title}</h3>
                    <h3>{recipe.category_name}</h3>
                    <h3>{recipe.author}</h3>
                  </div>
                )
              })}
            </div>
            <div
              className={
                'recipe-modal hidden'
                // clicked ? "recipe-modal" : "recipe-modal hidden"
              }
            ></div>
          </StyledRecipeContainer>
        )}
      </StyledDashboard>
    </>
  )
}

export default Dashboard
