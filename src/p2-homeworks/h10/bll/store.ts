import {loadingReducer} from './loadingReducer'
import {combineReducers, createStore} from "redux";

const rootReducers = combineReducers({
    loading: loadingReducer,

})
export type AppStoreType = ReturnType<typeof rootReducers>
//
const store = createStore(rootReducers)
//
export default store
//

//
// @ts-ignore
window.store = store // for dev
