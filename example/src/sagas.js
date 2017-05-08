import {fork} from 'redux-saga/effects'
import {sagas} from '@tableflip/ipfs-filexp'

export default function * () {
  yield fork(sagas)
}
