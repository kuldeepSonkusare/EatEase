import { createSlice } from '@reduxjs/toolkit';

const CartSlice=createSlice({

    //  Slice -->Slice_name, initial_state(data structure),action-reducers(functions)
    name:'cart',
    initialState:{
        items:[],
    },
    reducers:{
        additem:(state,action) =>{
            state.items.push(action.payload);
        },
        removeitem:(state,action) =>{
            state.items.pop();
        },
        clearCart:(state,action) =>{
            state.items.length=0;

        },
    },

});

//exporting our actions and corresponding reducers functions

export const {additem,removeitem,clearCart}=CartSlice.actions;
export default CartSlice.reducer;
