import { getRelatedVideos } from './relatedVideosAPI'
const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit')

const initialState = {
  relatedVideos: [],
  isLoading: false,
  isError: false,
  error: '',
}

export const fetchRelatedVideos = createAsyncThunk(
  'videos/fetchVideos',
  async ({ tags, id }) => {
    const videos = await getRelatedVideos({ tags, id })

    return videos
  }
)

export const relatedVideosSlice = createSlice({
  name: 'relatedVideos',
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchRelatedVideos.pending, (state) => {
        state.isError = false
        state.isLoading = true
      })
      .addCase(fetchRelatedVideos.fulfilled, (state, action) => {
        state.isLoading = false
        state.relatedVideos = action.payload
      })
      .addCase(fetchRelatedVideos.rejected, (state, action) => {
        state.isLoading = false
        state.relatedVideos = []
        state.isError = true
        state.error = action.error?.message
      })
  },
})

export default relatedVideosSlice.reducer
