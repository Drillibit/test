import { put, call, takeEvery } from 'redux-saga/effects'
import { getItem } from '../api'
import { getItems } from '../actions/item'
import { ITEM_REQUEST } from '../actions/actionTypes'

function* fetchItemsDataSaga(action) {
  try {
    const res = yield call(getItem)
    yield put(getItems(res.data))
  } catch (error) {
    yield console.log(error)
  }
}

export function* fetchItemsWatch() {
  yield takeEvery(ITEM_REQUEST, fetchItemsDataSaga)
}
