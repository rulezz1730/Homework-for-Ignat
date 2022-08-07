import {loadingReducer} from './loadingReducer'
import {combineReducers, createStore} from "redux";
import {themeReducer} from "../../h12/bll/themeReducer";

const rootReducers = combineReducers({
    loading: loadingReducer,
    theme: themeReducer,

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
