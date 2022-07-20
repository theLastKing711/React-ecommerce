import { createSlice } from "@reduxjs/toolkit";

interface User {
  username: string;
  password: string;
}

export interface RegisterUser extends User {
  email: string;
}

export interface LoginUser extends User {}

// const

// const userSlice = createSlice({
//     name: 'user',
//     reducers: {

//     }
// })
