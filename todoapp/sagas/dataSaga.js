// // src/sagas/dataSaga.js
// import { call, put, takeEvery } from 'redux-saga/effects';

// // Hàm giả lập gọi API
// const fetchTodosAPI = () => {
//   return new Promise((resolve) =>
//     setTimeout(() => resolve([{ id: 1, text: 'Learn Redux-Saga' }, { id: 2, text: 'Build To-Do App' }]), 1000)
//   );
// };

// // Worker Saga: thực hiện khi FETCH_TODOS_REQUEST được dispatch
// function* fetchTodosSaga() {
//   try {
//     const todos = yield call(fetchTodosAPI);
//     yield put({ type: 'FETCH_TODOS_SUCCESS', payload: todos });
//   } catch (error) {
//     yield put({ type: 'FETCH_TODOS_FAILURE', payload: error.message });
//   }
// }

// // Watcher Saga: lắng nghe action FETCH_TODOS_REQUEST
// function* dataSaga() {
//   yield takeEvery('FETCH_TODOS_REQUEST', fetchTodosSaga);
// }

// export default dataSaga;


// toolkit
import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchTodosRequest, fetchTodosSuccess, fetchTodosFailure } from '../reducers/dataSlice';

// Hàm giả lập gọi API
const fetchTodosAPI = () => {
  return new Promise((resolve) =>
    setTimeout(() => resolve([{ id: 1, text: 'Learn Redux-Saga' }, { id: 2, text: 'Build To-Do App' }]), 1000)
  );
};

// Worker Saga: thực hiện khi fetchTodosRequest được dispatch
function* fetchTodosSaga() {
  try {
    const todos = yield call(fetchTodosAPI);
    yield put(fetchTodosSuccess(todos));
  } catch (error) {
    yield put(fetchTodosFailure(error.message));
  }
}

// Watcher Saga: lắng nghe action fetchTodosRequest
function* dataSaga() {
  yield takeEvery(fetchTodosRequest.type, fetchTodosSaga);
}

export default dataSaga;
