import { configureStore } from '@reduxjs/toolkit';
import CartSlice from './CartSlice';
// CREATING/CONFIGURING OUR REDUX STORE IN OUR APP

const AppStore = configureStore({
    reducer:{
        cart:CartSlice,
    }

});

export default AppStore;