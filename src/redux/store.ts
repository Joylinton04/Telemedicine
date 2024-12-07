import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { usersSlice } from './loginSlice'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';


const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const rootReducer = combineReducers({
  users: usersSlice,
})
const persistedReducer = persistReducer(persistConfig, usersSlice.reducer)

const store = configureStore({
  reducer:persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;
export default store