import { createSlice, createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit'


export const getUsers =  createAsyncThunk('fetch/users',async (_, thunkApi) => {
    const { rejectWithValue,getState } = thunkApi
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        return (await response.json())
    }
    catch(err) {
        return rejectWithValue(err.message)
    }
})

const initialState = {
    message: 'intalMessage',
    users: null,
    loading: false,
    error: ''
}


const userSlice = createSlice({
    name: 'user/data',
    initialState: initialState,
    reducers: {
    },
    extraReducers: {
        [getUsers.pending]: (state, action) => {
            state.loading = true
            console.log('pendeing', action)
        },
        [getUsers.fulfilled]: (state, action) => {
            state.loading = false
            console.log(action.payload)
            state.users=action.payload
        },
        [getUsers.rejected]: (state, action) => {
            state.loading = false
             state.error= action.payload
            console.log('error', action.payload)
        }
    }

})

export const { setMessage } = userSlice.actions
export default userSlice.reducer