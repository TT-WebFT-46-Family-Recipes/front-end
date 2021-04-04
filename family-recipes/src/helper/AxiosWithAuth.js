import axios from 'axios'

export const axiosWithAuth = () => {
  const token = localStorage.getItem('token')

  return axios.create({
    baseURL: 'https://tt-webft-46-family-recipes.herokuapp.com/api/',
    headers: {
      authorization: token,
    },
  })
}
