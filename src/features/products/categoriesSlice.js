import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Api from "../../Api";

const initialState = {
  allCategories: [],
  mensClothing: [],
  womensClothing: [],
  jewelery: [],
  electronics: [],
  status: {
    mensClothing: "idle",
    womensClothing: "idle",
    jewelery: "idle",
    electronics: "idle",
  },
  error: {
    allCategories: null,
    mensClothing: null,
    womensClothing: null,
    jewelery: null,
    electronics: null,
  },
};

export const fetchAllCategories = createAsyncThunk(
  "categories/fetchAllCategories",
  async () => {
    const response = await axios.get(Api.getCategories);
    return response.data;
  }
);

export const fetchMensClothing = createAsyncThunk(
  "categories/fetchMensClothing",
  async () => {
    const response = await axios.get(`${Api.getCategoriesbyId}/men's clothing`);
    return response.data;
  }
);

export const fetchWomensClothing = createAsyncThunk(
  "categories/fetchWomensClothing",
  async () => {
    const response = await axios.get(
      `${Api.getCategoriesbyId}/women's clothing`
    );
    return response.data;
  }
);

export const fetchJewelery = createAsyncThunk(
  "categories/fetchJewelery",
  async () => {
    const response = await axios.get(`${Api.getCategoriesbyId}/jewelery`);
    return response.data;
  }
);

export const fetchElectronics = createAsyncThunk(
  "categories/fetchElectronics",
  async () => {
    const response = await axios.get(`${Api.getCategoriesbyId}/electronics`);
    return response.data;
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      //Fetching all categories

      .addCase(fetchAllCategories.pending, (state) => {
        state.status.allCategories = "loading";
        console.log("Fetching all categories (redux)...");
      })
      .addCase(fetchAllCategories.fulfilled, (state, action) => {
        state.status.allCategories = "succeeded";
        state.allCategories = action.payload;
      })
      .addCase(fetchAllCategories.rejected, (state, action) => {
        state.status.allCategories = "failed";
        state.error.allCategories = action.error.message;
        console.error("Fetching all categories (redux) failed");
      })

      //Fetching Men's clothing

      .addCase(fetchMensClothing.pending, (state) => {
        state.status.mensClothing = "loading";
        console.log("Fetching mens clothing (redux)...");
      })
      .addCase(fetchMensClothing.fulfilled, (state, action) => {
        state.status.mensClothing = "succeeded";
        state.mensClothing = action.payload;
      })
      .addCase(fetchMensClothing.rejected, (state, action) => {
        state.status.mensClothing = "failed";
        state.error.mensClothing = action.error.message;
        console.error("Fetching mens clothing (redux) failed");
      })

      //Fetching women's clothing

      .addCase(fetchWomensClothing.pending, (state) => {
        state.status.womensClothing = "loading";
        console.log("Fetching women's clothing (redux)...");
      })
      .addCase(fetchWomensClothing.fulfilled, (state, action) => {
        state.status.womensClothing = "succeeded";
        state.womensClothing = action.payload;
      })
      .addCase(fetchWomensClothing.rejected, (state, action) => {
        state.status.womensClothing = "failed";
        state.error.womensClothing = action.error.message;
        console.error("Fetching women's clothing (redux) failed");
      })

      //Fetching jewelery

      .addCase(fetchJewelery.pending, (state) => {
        state.status.jewelery = "loading";
        console.log("Fetching jewelery (redux)...");
      })
      .addCase(fetchJewelery.fulfilled, (state, action) => {
        state.status.jewelery = "succeeded";
        state.jewelery = action.payload;
      })
      .addCase(fetchJewelery.rejected, (state, action) => {
        state.status.jewelery = "failed";
        state.error.jewelery = action.error.message;
        console.error("Fetching jewelery (redux) failed");
      })

      //Fetching electronics

      .addCase(fetchElectronics.pending, (state) => {
        state.status.electronics = "loading";
        console.log("Fetching electronics (redux)...");
      })
      .addCase(fetchElectronics.fulfilled, (state, action) => {
        state.status.electronics = "succeeded";
        state.electronics = action.payload;
      })
      .addCase(fetchElectronics.rejected, (state, action) => {
        state.status.electronics = "failed";
        state.error.electronics = action.error.message;
        console.error("Fetching electronics (redux) failed");
      });
  },
});

export default categoriesSlice.reducer;
