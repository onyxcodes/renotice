import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";

const doFetch = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                data: 'Example data'
            });
        }, 2500);
    });
}

const doFailingFetch = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Failures happen");
        }, 2500);
    });
}

export const fetchExampleData = createAsyncThunk(
    'example/fetchData',
    async () => {
        return await doFetch();
    }
);

export const fetchFailingData = createAsyncThunk(
    'example/fetchFailingData',
    async () => {
        return await doFailingFetch();
    }
)

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
        })
        .addCase(fetchFailingData.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchFailingData.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload.data;
        })
        .addCase(fetchFailingData.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
});

export default reducer;
