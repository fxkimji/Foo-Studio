import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: "",
  email: "",
  image: "",
  _id: "",
  Favourites : [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginRedux: (state, action) => {
      state._id = action.payload.data._id;
      state.name = action.payload.data.name;
      state.email = action.payload.data.email;
      state.image = action.payload.data.image;
      state.Favourites = action.payload.data.Favourites;
    },
    logoutRedux: (state, action) => {
      state._id = "";
      state.name = "";
      state.email = "";
      state.image = "";
      state.Favourites = "";
    },
    FavRedux :(state, action)=>{
      state.Favourites = action.payload.data.Favourites
    }
  },
});

export const { loginRedux ,logoutRedux , FavRedux} = userSlice.actions;

export default userSlice.reducer;