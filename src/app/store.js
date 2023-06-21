import { configureStore } from '@reduxjs/toolkit'
import filterReducer from '../features/filter/filterSlice'
import relatedVideosReducer from '../features/relatedVideos/relatedVideosSlice'
import tagReducer from '../features/tags/tagsSlice'
import videoReducer from '../features/video/videoSlice'
import videosReducer from '../features/videos/videosSlice'

export const store = configureStore({
  reducer: {
    videos: videosReducer,
    tags: tagReducer,
    video: videoReducer,
    relatedVideos: relatedVideosReducer,
    filter: filterReducer,
  },
})
