// // src/store.js
// import { createStore, applyMiddleware } from 'redux';
// import createSagaMiddleware from 'redux-saga';
// import dataReducer from './reducers/dataReducer';
// import dataSaga from './sagas/dataSaga';

// const sagaMiddleware = createSagaMiddleware();

// const store = createStore(dataReducer, applyMiddleware(sagaMiddleware));

// // Chạy Saga
// sagaMiddleware.run(dataSaga);

// export default store;


// toolkit
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import dataReducer from './reducers/dataSlice';
import dataSaga from './sagas/dataSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    todos: dataReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(dataSaga);

export default store;
