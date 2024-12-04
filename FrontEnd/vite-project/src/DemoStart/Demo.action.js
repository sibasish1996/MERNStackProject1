import * as constants from './Demo.constant'

export const fetchApi = (payload) => ({type: constants.GET_API, payload})
export const storeApi = (payload) => ({type: constants.STORE_API, payload})