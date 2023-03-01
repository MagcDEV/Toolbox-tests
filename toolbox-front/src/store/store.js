import { configureStore } from '@reduxjs/toolkit'
import filesSlice from './slices/filesSlice'
import listSlice from './slices/listSlice'

export default configureStore({
  reducer: {
    files: filesSlice,
    list: listSlice
  }
})