import { availableJobApi, availableJobReducer } from './reducers/availablejob/availablejobThunk';
import { completeJobReducer } from './reducers/completejob/completejobThunk';
import { hiddenJobReducer } from './reducers/hiddenjob/hiddenjobThunk';
import { progressJobReducer } from './reducers/progressjob/progressThunk';

import { userApi } from './reducers/user/userThunk';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [availableJobApi.reducerPath]: availableJobApi.reducer,
    completeJob: completeJobReducer, 
    hiddenJob: hiddenJobReducer,    
    progressJob: progressJobReducer, 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      userApi.middleware,
      availableJobApi.middleware
    ), 
});
