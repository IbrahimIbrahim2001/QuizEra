import { configureStore } from "@reduxjs/toolkit";
import questionsSliceReducer from "../features/questionsSlice/questionsSlice";


export const store = configureStore({
    reducer: {
        result: questionsSliceReducer,
    }
});

