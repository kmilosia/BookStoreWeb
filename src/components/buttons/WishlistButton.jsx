import React from 'react'
import { GoHeart, GoHeartFill } from 'react-icons/go'

function WishlistButton(props) {
  return (
    <>
    {props.wishlisted ?
    <button className={`absolute top-2 right-2 rounded-lg p-2 bg-white shadow-sm dark:bg-midnight-950 text-purple-400`}><GoHeartFill /></button>
    :
    <button className={`absolute top-2 right-2 rounded-lg p-2 bg-white shadow-sm dark:bg-midnight-950 text-purple-400`}><GoHeart /></button>
    }
    </>
  )
}

export default WishlistButton
