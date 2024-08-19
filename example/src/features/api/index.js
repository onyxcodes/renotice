import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";

const doFetch = () => {
    return new Promise((resolve, reject) => {
        console.log("Executing promise");
        setTimeout(() => {
            resolve({
                data: 'Example data'
            });
        }, 1000);
    });
}

export const fetchExampleData = createAsyncThunk(
    'example/fetchData',
    async () => {
        console.log("Executing async thunk")
        return await fetchExampleData();
    }
);

const initialState = {
    data: null,
    loading: false,
    error: null
}

const reducer = createReducer(initialState, (builder) => {
    builder
        .addCase(fetchExampleData.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchExampleData.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload.data;
        })
        .addCase(fetchExampleData.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
});

export default reducer;
