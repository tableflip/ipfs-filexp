import {fork} from 'redux-saga/effects'
import {sagas} from 'ipfs-filexp'

export default function * () {
  yield fork(sagas)
}
