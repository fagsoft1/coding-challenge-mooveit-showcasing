import {createSlice} from '@reduxjs/toolkit';
import {RootState} from "../../app/store";

interface IMenuSliceState {
    visited_links: string[],
    current: string
}

const initialState: IMenuSliceState = {
    visited_links: [],
    current: ''
}

export const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        addVisitedLink: (state: IMenuSliceState, action) => {
            state.visited_links = Array.from(new Set([...state.visited_links, action.payload]));
            state.current = action.payload
        },
    },
});

export const {addVisitedLink} = menuSlice.actions;
export const selectVisitedLinks = (state: RootState) => state.menu.visited_links;
export const current = (state: RootState) => state.menu.current;
export default menuSlice.reducer;
