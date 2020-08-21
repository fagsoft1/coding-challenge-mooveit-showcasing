import {configureStore} from '@reduxjs/toolkit';
import menuReducer from '../components/Menu/menuSlice'
import {useDispatch} from "react-redux";

const store = configureStore({
    reducer: {
        menu: menuReducer,
    },
});
export default store;
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()