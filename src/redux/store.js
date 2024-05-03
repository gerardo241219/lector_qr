import { configureStore } from '@reduxjs/toolkit';
import qrSlice from './qrSlice';

export default configureStore({
    reducer: {
        qr: qrSlice
    }
});