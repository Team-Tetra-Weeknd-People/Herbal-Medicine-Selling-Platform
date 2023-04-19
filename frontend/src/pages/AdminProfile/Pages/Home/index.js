import React from 'react'

import Navbar from '../../Navbar'
import Landing from './Landing'
import Orders from './Orders'

export default function Home() {

  document.title = "Admin Profile"

  return (
    <>
      <Navbar />
      <Landing />
      <Orders />
    </>
  )
}
