import React from 'react'
import {useContext} from 'react'
import UserContext from "./UserContext"

// const User = ({username}) => {
const User = () => {
    const username = useContext(UserContext)
  return (
    <div>
      <h2>Hello {username}</h2>
    </div>
  )
}

export default User

