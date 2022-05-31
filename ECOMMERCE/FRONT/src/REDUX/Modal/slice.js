import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isModalVisible:false,
    type:"",
    id:null 
};

export const ModalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        showModal(state,{payload:{type,id}}) {
            state.isModalVisible=true
            state.type=type
            state.id=id
        },
        hideModal(state) {
            state.isModalVisible=false
        },
    },
});
export const { showModal,hideModal } = ModalSlice.actions;
export default ModalSlice.reducer;