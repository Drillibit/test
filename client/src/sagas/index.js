import { fork } from 'redux-saga/effects'
import { fetchItemsWatch } from './items'
import { fetchGroupsWatch } from './groups'

export default function*() {
  yield fork(fetchGroupsWatch)
  yield fork(fetchItemsWatch)
}
