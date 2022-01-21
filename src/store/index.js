import { configureStore } from '@reduxjs/toolkit';
import users from './usersSlice';

const store=configureStore({
    reducer:{
        users
    }
})

export default store