import {fork} from 'redux-saga/effects'
import {takeLatest} from 'redux-saga'

import {actions} from '../actions'

import * as files from './files'
import * as preview from './preview'

const loaders = {
  files,
  preview
}

export default function * () {
  yield Object.keys(loaders)
    .reduce((acc, name) => {
      const loader = loaders[name]

      if (loader.load) {
        acc.push(fork(function * () {
          yield * takeLatest(actions[name.toUpperCase()].LOAD, loader.load)
        }))
      }

      if (loader.leave) {
        acc.push(fork(function * () {
          yield * takeLatest(actions[name.toUpperCase()].LEAVE, loader.leave)
        }))
      }

      return acc
    }, [])
}
