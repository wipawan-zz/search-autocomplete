import { takeLatest, all, call, put, select } from 'redux-saga/effects';
import axios from 'axios';

const ACCESS_TOKEN = 'Token PERSONAL_ACCESS_TOKEN';
axios.defaults.headers.common['Authorization'] = ACCESS_TOKEN;

export default function* rootSaga() {
  yield all([
    watchFetchRepos()
  ]);
}

// watcher saga: watches for actions dispatched to the store, start worker saga
function* watchFetchRepos() {
  yield takeLatest("FETCH_REPOS", fetchReposWorker);
}

// worker saga: makes the api call when watcher saga sees the action
function* fetchReposWorker() {
  // get query from the store
  let query = yield select(state => state.query);

  try {
    const response = yield call(fetchRepos, query);
    console.log('response: ', response)
    let results = [],
        url = response.config.url,
        responseQuery = "";

    if (response.status === 200) {
      responseQuery = url.substring(url.indexOf("=") + 1, url.length);
      // get the latest query from input
      query = yield select(state => state.query);
      if (responseQuery === query) {
        results = response.data.items;
        // dispatch a succces action to the store with new search results
        yield put({ type: "FETCH_REPOS_SUCCESS", results });
      }
    }
  } catch (error) {
    // dispatch a failure action to the store with error
    yield put({ type: "API_CALL_FAILURE", error });
  }
}

function fetchRepos(query) {
  return axios({
    method: "get",
    url: `https://api.github.com/search/repositories?q=${query}`
  });
}