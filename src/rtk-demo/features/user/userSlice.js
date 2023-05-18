const createSlice = require('@reduxjs/toolkit').createSlice
const createAsyncThunk = require('@reduxjs/toolkit').createAsyncThunk
const axios = require('axios')

const initialState = {
    loading: false,
    users: [],
    error: ''
}
const fetchUsers = createAsyncThunk('user/fetchUsers', ()=> {
    return axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            return response.data.map(user=> user.id)
        })
        .catch(error => {
            return error.message
        })

})
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, state=> {
                state.loading = true
            })
            .addCase(fetchUsers.fulfilled, (state,action) => {
                state.loading = false
                state.users = action.payload
                state.error = ''
            })
            .addCase(fetchUsers.rejected, (state,action)=> {
                state.loading=false
                state.users = []
                state.error = action.payload
            })
    }
})
module.exports = userSlice.reducer
module.exports.fetchUsers = fetchUsers
