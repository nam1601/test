const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
    numOfCake: 10
}
const cakeSlice =createSlice({
    name: 'cake',
    initialState,
    reducers: {
        ordered: (state) => {
            state.numOfCake--;
        },
        restocked: (state, action) => {
            state.numOfCake += action.payload
        }
    }
})
module.exports = cakeSlice.reducer
module.exports.cakeActions = cakeSlice.actions
// import { createSlice } from "@reduxjs/toolkit";

// export const initialState = {
//     numOfCake: 10,
// }
// const cakeSlice = createSlice({
//     name: 'cake',
//     initialState,
//     reducers: {
//         ordered: (state) => {
//             state.numOfCake--;
//         },
//         restock: (state, action) => {
//             state.numOfCake += action.payload;
//         }
//     }
// })
// export const {ordered, restock} = cakeSlice.actions;
// export default cakeSlice.reducer;