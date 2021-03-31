import React, { useState } from 'react'
import Header from '../Header'
import styled from 'styled-components'
import { StyledFilters, StyledRecipeContainer } from './styles'
import { useSelector } from 'react-redux'
import DotLoader from 'react-spinners/DotLoader'
import { css } from '@emotion/core'

const StyledDashboard = styled.section`
  height: 100vh;
  width: 100%;
  position: fixed;

  /* .loader {
    position: absolute;
    left: 50%;
    top: 30%;
  } */
`
const loader = css`
  position: absolute;
  left: 53%;
  top: 30%;
`

const Dashboard = ({ signedIn, signOut }) => {
  const { isLoading } = useSelector((state) => state)

  const [clicked, setClicked] = useState(false)

  const click = () => {
    setClicked((clicked) => !clicked)
  }

  return (
    <>
      <Header signedIn={signedIn} signOut={signOut} />
      <StyledDashboard>
        <StyledFilters>
          <div className="filters">
            <button className="new-recipe-btn">Add Recipe</button>
            <input name="search" placeholder="search:"></input>
          </div>
        </StyledFilters>
        {isLoading ? (
          <DotLoader color={'#fb5c7c'} loading={true} css={loader} size={150} />
        ) : (
          <StyledRecipeContainer>
            <div className="bg-img">
              <div className="recipe">
                <h3
                  align="center"
                  style={{
                    borderBottom: 'solid 2px rgba(0, 0, 0, 0.1)',
                    padding: '5% 0',
                    margin: 0,
                  }}
                >
                  Title
                </h3>
              </div>
              <div className="recipe">
                <h3
                  align="center"
                  style={{
                    borderBottom: 'solid 2px rgba(0, 0, 0, 0.1)',
                    padding: '5% 0',
                    margin: 0,
                  }}
                >
                  Title
                </h3>
              </div>
              <div className="recipe">
                <h3
                  align="center"
                  style={{
                    borderBottom: 'solid 2px rgba(0, 0, 0, 0.1)',
                    padding: '5% 0',
                    margin: 0,
                  }}
                >
                  Title
                </h3>
              </div>
              <div className="recipe">
                <h3
                  align="center"
                  style={{
                    borderBottom: 'solid 2px rgba(0, 0, 0, 0.1)',
                    padding: '5% 0',
                    margin: 0,
                  }}
                >
                  Title
                </h3>
              </div>
              <div className="recipe">
                <h3
                  align="center"
                  style={{
                    borderBottom: 'solid 2px rgba(0, 0, 0, 0.1)',
                    padding: '5% 0',
                    margin: 0,
                  }}
                >
                  Title
                </h3>
              </div>
              <div className="recipe">
                <h3
                  align="center"
                  style={{
                    borderBottom: 'solid 2px rgba(0, 0, 0, 0.1)',
                    padding: '5% 0',
                    margin: 0,
                  }}
                >
                  Title
                </h3>
              </div>
              <div className="recipe">
                <h3
                  align="center"
                  style={{
                    borderBottom: 'solid 2px rgba(0, 0, 0, 0.1)',
                    padding: '5% 0',
                    margin: 0,
                  }}
                >
                  Title
                </h3>
              </div>
            </div>
            <div
              className={clicked ? 'recipe-modal' : 'recipe-modal hidden'}
            ></div>
          </StyledRecipeContainer>
        )}
      </StyledDashboard>
    </>
  )
}

export default Dashboard
