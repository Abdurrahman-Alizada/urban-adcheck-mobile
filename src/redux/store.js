
import { configureStore } from '@reduxjs/toolkit';

import userReducer from "./reducers/user/userReducer"
import { userApi } from './reducers/user/userThunk';
import jobReducer from './reducers/Job/JobReducer';
import { jobApi } from './reducers/Job/JobThunk';

export const store = configureStore({
  reducer: {
     user : userReducer,
     job : jobReducer,

    [userApi.reducerPath]: userApi.reducer,
    [jobApi.reducerPath]: jobApi.reducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      userApi.middleware,jobApi.middleware,
    ), 
});
