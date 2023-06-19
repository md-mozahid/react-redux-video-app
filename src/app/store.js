import { configureStore } from '@reduxjs/toolkit'
import tagReducer from '../features/tags/tagsSlice'
import videosReducer from '../features/videos/videosSlice'

export const store = configureStore({
  reducer: {
    videos: videosReducer,
    tags: tagReducer,
  },
})
