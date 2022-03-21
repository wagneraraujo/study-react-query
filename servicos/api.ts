import axios from 'axios'

export const baseURL = 'https://api-bkm-scheduling.herokuapp.com/v1'
// export const baseURL = 'https://prefeituras.herokuapp.com/'

export const api = axios.create({
  baseURL: baseURL,
})

export const getCompany = async () => {
  return api.get('/company', {
    headers: {
      Authorization: 'Token 76d0445f0846c25286527ea6ec592ef2ce5d4ced',
    },
  })
}
