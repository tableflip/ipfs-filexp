# ipfs-filexp

This is a web based file manager for use with IPFS.

## Usage

The explorer is built in [React](https://facebook.github.io/react/), and requires a [redux](http://redux.js.org/) store, with [saga](https://redux-saga.js.org/) middleware to be available in your app.

**main.js**

```js
import React, {Component} from 'react'
import {render} from 'react-dom'
import {Route} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'
import configureStore from './configure-store'
import {Explorer, Preview} from 'ipfs-filexp'

class ExplorerPage extends Component {
  render () { return <Explorer /> }
}

class PreviewPage extends Component {
  render () { return <Preview /> }
}

const store = configureStore()
const history = syncHistoryWithStore(hashHistory, store)

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={ExplorerPage}>
        <Route path='preview' component={PreviewPage} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
```

That's it! Although we need an appropriate `configureStore` function which will apply the **file explorer redux reducers** and run the **file explorer sagas** for us. Here's how you might do that:

**configure-store.js**

```js
import {createStore, applyMiddleware, combineReducers} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {routerMiddlware} from 'react-router-redux'
import * as Filexp from 'ipfs-filexp'
// BYO reducers and sagas
import reducers from './reducers'
import sagas from './sagas'

export default function configureStore (initialState) {
  const rootReducer = combineReducers({ ...reducers, ...Filexp.reducers })
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(rootReducer, initialState, applyMiddleware(sagaMiddleware))

  sagaMiddleware.run(function * () { yield [fork(sagas), fork(Filexp.sagas)] })

  return store
}
```

## Development

Make sure [node.js](https://nodejs.org/) version 4+ and [npm](https://docs.npmjs.com/) version 3+ are installed and in your path.

### Building

```bash
npm run build # The result will be in /lib
```

## Contribute

[![](https://cdn.rawgit.com/jbenet/contribute-ipfs-gif/master/img/contribute.gif)](https://github.com/ipfs/community/blob/master/contributing.md)

Please contribute! The more people who work on this, the faster we'll be able to ship it. Dive in by testing it and [looking at the issues](https://github.com/ipfs/ipfs-filexp/issues).

The [CONTRIBUTING](CONTRIBUTING.md) file has more information relevant to this repo. To contribute to IPFS in general, just click on the image above to go to our [global contributing guide](https://github.com/ipfs/community/blob/master/contributing.md).

## License

[MIT License](LICENSE)
