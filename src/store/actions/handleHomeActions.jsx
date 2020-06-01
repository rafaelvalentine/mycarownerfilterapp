import type from '../type'
import { HTTP } from '../../api/index'

/**
 * types for reducer action
 */
const { OWNERS_DATA } = type
/**
 * @name handleSetOwners
 * @description redux action function passes payload and action for reducer
 * @param {Object} payload
 * @return {NUll} null
 */
const handleSetOwners = payload => ({
  type: OWNERS_DATA,
  payload
})

/**
 * @name handleUserLogin
 * @description  function handles user logins
 * @param {Object} data
 * @return {Promise<{result: AxiosResponse<Object>}>} user object from backend
 */
export const handleFetchFilters = () => dispatch => {
  return HTTP.filterApi()
    .get(`/`)
    .then(res => {
      let result = res.data
      // dispatch(handleSetCats({data: result, paginationCount, paginationLimit, paginationPage}))
      return result
    })
    .catch(err => {
      console.log(err)
    })
}

/**
 * @name handleFilterRequest
 * @description  function fetches a filtered list for server
 * @param {Object} data
 * @return {Promise<{result: AxiosResponse<Object>}>} user object from backend
 */
export const handleFilterRequest = data => dispatch => {
  return HTTP.serverApi()
    .post(`/carowners`,
      data
    )
    .then(res => {
      let result = res.data
      dispatch(handleSetOwners(result.data))
      return result
    })
    .catch(err => {
      console.log(err)
    })
}
