import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  listItems: [],
  isLoadingListItems: "idle",
};

export const fetchList = createAsyncThunk(
  "list/fetchList",
  async (_, thunkAPI) => {
    try {
      const response = await fetch(`https://randomuser.me/api/?results=9`);

      let res = await response.json();

      return res.results;
    } catch (err) {
      return thunkAPI.rejectWithValue("Ошибка соединения. Повторите попытку");
    }
  }
);

const ListSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    addNewItem: (state, action) => {
      state.listItems.push(action.payload);
    },
    editItem: (state, action) => {
      const {
        payload: { id, name, phone },
      } = action;
      state.listItems = state.listItems.map((item) =>
        item.id === id ? { ...item, name, phone } : item
      );
    },
    deleteItem: (state, action) => {
      state.listItems = state.listItems.filter(
        (item) => item.id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchList.fulfilled, (state, action) => {
      state.listItems = action.payload.map((a) => ({
        id: `${a.login.uuid}`,
        name: `${a.name.first} ${a.name.last}`,
        phone: a.phone,
      }));

      state.isLoadingListItems = "succeeded";
    });
    builder.addCase(fetchList.pending, (state) => {
      state.isLoadingListItems = "pending";
    });
    builder.addCase(fetchList.rejected, (state) => {
      state.isLoadingListItems = "failed";
    });
  },
});

export const { addNewItem, editItem, deleteItem } = ListSlice.actions;

export default ListSlice.reducer;
