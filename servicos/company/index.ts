import { createUseCompanyKey } from './keys'
import { useQuery, UseQueryOptions } from 'react-query'
import { api, getCompany } from '../api'

export const useCompany = (options?: UseQueryOptions<any>) => {
  return useQuery(
    createUseCompanyKey(),
    () => <any>getCompany()
        .then((response) => console.log(response))
        .catch((err) => {
          if (err.response) {
            console.log(err.response)
          } else if (err.request) {
            console.log(err.request)
          } else {
            console.log()
          }
        }),
    options,
  )
}
