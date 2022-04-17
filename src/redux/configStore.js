import { applyMiddleware, combineReducers, createStore } from "redux"
import thunk from "redux-thunk"
import { CarouselReducer } from "./reducers/CarouselReducer"
import { QuanLyDatVeReducer } from "./reducers/QuanLyDatVeReducer"
import { QuanLyNguoiDungReducer } from "./reducers/QuanLyNguoiDungReducer"
import { QuanLyPhimReducer } from "./reducers/QuanLyPhimReducer"
import { QuanLyRapReducer } from "./reducers/QuanLyRapReducer"
import {LoadingReducer} from "./reducers/LoadingReducer"

const rootReducer = combineReducers({
    CarouselReducer,
    QuanLyPhimReducer,
    QuanLyRapReducer,
    QuanLyNguoiDungReducer,
    QuanLyDatVeReducer,
    LoadingReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))