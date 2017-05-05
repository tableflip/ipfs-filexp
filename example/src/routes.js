import React from 'react'
import {Route, IndexRoute} from 'react-router'

import Layout from './components/Layout'
import HomePage from './components/HomePage'
import ExplorerPage from './components/ExplorerPage'
import PreviewPage from './components/PreviewPage'

export default (
  <Route path='/' component={Layout}>
    <IndexRoute component={HomePage} />
    <Route path='files' component={ExplorerPage}>
      <Route path='preview' component={PreviewPage} />
    </Route>
  </Route>
)
