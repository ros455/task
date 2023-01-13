import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./user";
import { postsReducer } from "./posts";
import { albumsReducer } from "./albums";

export default configureStore({
    reducer: {
        users:usersReducer,
        posts:postsReducer,
        albums: albumsReducer,
    }
})