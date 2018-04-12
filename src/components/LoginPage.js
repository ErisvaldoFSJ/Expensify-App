import React from 'react'
import { connect } from 'react-redux'
import { startLogin } from '../actions/auth'

export const LoginPage = ({startLogin})=>(
  <div>
    <button onClick={startLogin}>Login</button>
  </div>
)


const mapDispashToProps = (dispach) =>({
  startLogin: () => dispach(startLogin())
})


export default connect(undefined, mapDispashToProps)(LoginPage)