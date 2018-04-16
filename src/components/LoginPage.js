import React from 'react'
import { connect } from 'react-redux'
import { startLogin } from '../actions/auth'

export const LoginPage = ({startLogin})=>(
<div className="box-layout">
  <div className="box-layout__box">
    <h1 className="box-layout__tittle">Expensefy</h1>
    <p>It's time do get you expenses uder control</p>
    <button className="button" onClick={startLogin}>Login with Google</button>
  </div>
  </div>
)


const mapDispashToProps = (dispach) =>({
  startLogin: () => dispach(startLogin())
})


export default connect(undefined, mapDispashToProps)(LoginPage)
