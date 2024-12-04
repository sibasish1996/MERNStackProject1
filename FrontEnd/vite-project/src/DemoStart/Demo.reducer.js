import { fromJS } from "immutable";
import { STORE_API } from "./Demo.constant";
import { createReducer } from "../store/createReducer";



const initialData = fromJS({
    data: null
})

const DemoObj = {
    [STORE_API]: (state, payload) => state.set('data', fromJS(payload))
}

export const demoProject = createReducer(initialData, DemoObj)