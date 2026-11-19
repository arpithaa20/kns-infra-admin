
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiServices } from "../../utils/apiServices";

const initialPayload = {
    userID: "171903551052335600",
    isPublished: "",
    isActive: "",
    generalSearch: "",
    sortOrder: "",
    iDisplayStart: "",
    iDisplayLength: "",
};

export const getWebProjects = createAsyncThunk(
    "projects/getWebProjects",
    async (payload = initialPayload, { rejectWithValue }) => {
        try {
            const response = await apiServices("getWebProject", payload);
            return response;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const initialState = {
    projects: [],
    // loading: false,
    error: null,
};

const getWebProjectSlice = createSlice({
    name: "projects",
    initialState,

    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(getWebProjects.pending, (state) => {
                // state.loading = true;
                state.error = null;
            })

            .addCase(getWebProjects.fulfilled, (state, action) => {
                // state.loading = false;
                state.projects = action.payload.data;
            })

            .addCase(getWebProjects.rejected, (state, action) => {
                // state.loading = false;
                state.error = action.payload;
            });
    },
});

export default getWebProjectSlice.reducer;
