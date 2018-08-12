import { put, call, takeEvery } from 'redux-saga/effects'
import { GET_GROUPS, GROUP_REQUEST } from '../actions/actionTypes'
import { getGroup } from '../api'
import { getGroups, groupRequest } from '../actions/group'

function* fetchGroupsSaga(action) {
  try {
    const res = yield call(getGroup)
    yield put(getGroups(res.data))
  } catch (error) {
    console.log(error)
  }
}

export function* fetchGroupsWatch() {
  yield takeEvery(GROUP_REQUEST, fetchGroupsSaga)
}
