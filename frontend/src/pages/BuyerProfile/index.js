import React from 'react'

import {
  Navbar,
  ItemCart
} from "../../components";

export default function BuyerProfile() {

  document.title = "Buyer Profile"

  return (
    <>
      <Navbar />
      <ItemCart />
    </>
  )
}
