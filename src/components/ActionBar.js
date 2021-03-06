import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {isEmpty} from 'lodash-es'

import Icon from './Icon'

export default class ActionBar extends Component {
  static propTypes = {
    onCreateDir: PropTypes.func.isRequired,
    onRemoveDir: PropTypes.func.isRequired,
    selectedFiles: PropTypes.array.isRequired
  };

  render () {
    const {selectedFiles, onRemoveDir, onCreateDir} = this.props
    let fileActions

    if (!isEmpty(selectedFiles)) {
      const length = selectedFiles.length
      const plural = length > 1 ? 's' : ''
      const count = `${length} file${plural}`

      fileActions = (
        <div className='action-bar-file-actions'>
          <a onClick={onRemoveDir}>
            <Icon glyph='minus' />
            Delete {count}
          </a>
        </div>
      )
    }

    return (
      <div className='action-bar'>
        <div className='action-bar-general-actions'>
          <a onClick={onCreateDir}>
            <Icon glyph='plus' />
            Create Folder
          </a>
        </div>
        {fileActions}
      </div>
    )
  }
}
