import React from 'react'
import {Link} from 'react-router'

export default function HomePage () {
  return (
    <div>
      <h1>IPFS file explorer</h1>
      <p>Welcome to the file explorer example app!</p>
      <p>Fire up your IPFS daemon and <Link to='/files'>click here</Link> to view it's files</p>
    </div>
  )
}
